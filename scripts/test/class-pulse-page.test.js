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
 *   - the receipt's coaching note splits Checkpoint 2 into coached and not coached;
 *   - a marked feedback session counts, and After class names, only answers the
 *     database saved after it, and clearing the mark clears them;
 *   - projector-safe mode leaves no student name on the grid;
 *   - Class view, for the projector, shows no name, no student's words and nothing
 *     that opens an answer, strips quoted words from wrong ideas, and shows a pasted
 *     model answer only when asked, with the revisited criterion highlighted;
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
const ANA2 = 'Plantations needed year-round labor, so slavery became hereditary and tied to race.';
const BEN2 = 'The mita sent workers to Potosi.';
// The example class works on Topic 4.7, where only a Submit receipt counts. Topics
// through 4.6 recover saved writing (RECOVER_THROUGH, 2026-11-17); their own section
// below uses liveStore(false, '4.6').
const LIVE_TOPIC = '4.7';
function liveStore(multi, topic) {
  const key = (topic || LIVE_TOPIC).replace('.', '-');
  const P = 'projects/behistoric/databases/(default)/documents/tenants/zcs/';
  const docs = new Map(), commits = [], requests = [];
  const put = (name, fields, when) => docs.set(P + name, { name: P + name, fields, updateTime: when || new Date().toISOString() });
  const t = v => ({ stringValue: v });
  // One class, as first set up; or, with `multi`, a list holding two of the teacher's
  // classes, each student carrying their own (2026-11-06).
  put('rosters/teach1', { classLabel: t(multi ? 'G4, S1' : 'G4') });
  [['ana1', 'Ana Ruiz', 'G4'], ['ben1', 'Ben Cole', 'S1'], ['cal1', 'Cal Ito', 'S1']].forEach(([u, l, sec]) =>
    put('rosters/teach1/students/' + u, multi ? { label: t(l), section: t(sec) } : { label: t(l) }));
  const ans = (u, slot, text, c, when) => put(`responses/${u}__${key}__${slot}`, { studentId: t(u), topicKey: t(key), slotId: t(slot), text: t(text), confidence: c ? { integerValue: String(c) } : t('') }, when);
  ans('ana1', 'checkpoint-one-response', ANA, 4);
  ans('ana1', 'checkpoint-one-response-submitted', 'Submitted Oct 31, 9:14 AM · fingerprint ' + Sync.valueHash(ANA, '4'));
  ans('ben1', 'checkpoint-one-response', 'The devshirme took boys, and I changed this after submitting.', 3);
  ans('ben1', 'checkpoint-one-response-submitted', 'Submitted Oct 31, 9:20 AM · fingerprint ' + Sync.valueHash('The devshirme took boys.', '3'));
  ans('cal1', 'checkpoint-one-response', 'Half an', '');
  // Checkpoint 2: Ana copied the AI Coach prompt before submitting, Ben did not
  // (the receipt's coaching note, 2026-11-07).
  ans('ana1', 'checkpoint-two-response', ANA2, 3);
  // She tapped a different confidence after submitting (the answer says 3, the receipt
  // was made at 5). The writing is the same, so it still counts as submitted (2026-11-16).
  ans('ana1', 'checkpoint-two-response-submitted', 'Submitted Oct 31, 10:02 AM · AI Coach prompt copied · fingerprint ' + Sync.valueHash(ANA2, '5'), '', '2099-01-01T00:00:00Z');
  ans('ben1', 'checkpoint-two-response', 'The mita sent workers to Potosi.', 2);
  ans('ben1', 'checkpoint-two-response-submitted', 'Submitted Oct 31, 10:05 AM · fingerprint ' + Sync.valueHash('The mita sent workers to Potosi.', '2'), '', '2026-10-31T15:05:00Z');
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
// The batch-by-batch cards live on Read the work, inside a closed fallback
// (2026-11-16: the one-paste Reader is the main path).
const toBatches = async p => {
  await p.click('#tab-read');
  if (!(await p.$eval('#paste-panel', d => d.open))) await p.click('#paste-panel > summary');
};
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

  section('Class view');
  // With names switched back on, so the view's own rule is what is tested.
  await s.p.click('#names [data-v="names"]');
  await choose(s.p, '2.3');
  await s.p.click('#tab-class');
  await s.p.waitForFunction(() => /How the class did/i.test(document.getElementById('cv').textContent), null, { timeout: 8000 }).catch(() => {});
  const cv = await s.p.$eval('#cv', e => e.textContent);
  const shownNames = await s.p.$$eval('#heat td.name', tds => tds.map(t => t.childNodes[0].textContent));
  const answers = await s.p.evaluate(() => (window.BHClassPulseCalibration.rows || []).map(r => r.text));
  const leaked = answers.filter(t => t && t.length > 40).filter(t => { for (let i = 0; i + 40 <= t.length; i += 20) if (cv.includes(t.slice(i, i + 40))) return true; return false; });
  check('Class view shows no student name, even with names on', shownNames.length > 0 && shownNames.every(nm => !cv.includes(nm)) && !/Student \d\d/.test(cv), shownNames.find(nm => cv.includes(nm)) || '');
  check('Class view shows no student\'s words', answers.length > 0 && leaked.length === 0, (leaked[0] || '').slice(0, 80));
  check('Class view names a criterion to revisit and what a strong answer does', /Let's revisit criterion \d/i.test(cv) && /A strong answer:/.test(cv), cv.slice(0, 120));
  check('Class view has nothing that opens an answer', (await s.p.$$('#cv [data-s], #cv [data-seg], #cv button')).length === 0);
  const MODEL = 'Model paragraph one.\n\nModel paragraph two.\n\nModel paragraph three.';
  await s.p.click('#cv-model-show [data-v="show"]');
  await s.p.click('.cv-model-entry summary');
  await s.p.fill('#cv-model-text', MODEL);
  const modelShown = await s.p.$$eval('#cv .cv-model p', ps => ps.map(x => x.textContent));
  check('a pasted model answer shows, one paragraph per criterion', JSON.stringify(modelShown) === JSON.stringify(['Model paragraph one.', 'Model paragraph two.', 'Model paragraph three.']), JSON.stringify(modelShown));
  check('with the revisited criterion\'s paragraph highlighted', (await s.p.$$('#cv .cv-model p.cv-hot')).length === 1);
  // The model answers file (Jeff, 2026-11-10): one load fills every checkpoint in it.
  // Placeholder text only: real model answers never go in this public repository.
  const FILE_TEXT = '# Model answers\n\n## Topic 2.3 · Checkpoint 1\n\nFile one.\n\nFile two.\n\nFile three.\n\n## Topic 2.3 · Checkpoint 2\n\nSecond one.\n\nSecond two.\n\nSecond three.\n\n## Topic 9.42 · Checkpoint 1\n\nNowhere.\n\n## Claims\n\nA reviewer note.\n';
  await s.p.setInputFiles('#cv-model-file', { name: 'Unit-Model-Answers.md', mimeType: 'text/markdown', buffer: Buffer.from(FILE_TEXT) });
  await s.p.waitForFunction(() => /Loaded/.test(document.getElementById('cv-model-status').textContent), null, { timeout: 4000 }).catch(() => {});
  const fileShown = await s.p.$$eval('#cv .cv-model p', ps => ps.map(x => x.textContent));
  check('loading the model answers file fills this checkpoint in, one paragraph per criterion', JSON.stringify(fileShown) === JSON.stringify(['File one.', 'File two.', 'File three.']), JSON.stringify(fileShown));
  check('and puts it in the box under the dropdown', (await s.p.$eval('#cv-model-text', e => e.value)) === 'File one.\n\nFile two.\n\nFile three.');
  const loadNote = await s.p.$eval('#cv-model-status', e => e.textContent);
  check('the teacher is told what loaded and what was skipped', /Loaded 2 model answers/.test(loadNote) && /9\.42 Checkpoint 1 is not a topic Class Pulse reads/.test(loadNote), loadNote);
  await s.p.click('#cv-cp [data-v="cp2"]');
  const fileShown2 = await s.p.$$eval('#cv .cv-model p', ps => ps.map(x => x.textContent));
  check('the other checkpoint in the file is already filled in too', JSON.stringify(fileShown2) === JSON.stringify(['Second one.', 'Second two.', 'Second three.']), JSON.stringify(fileShown2));
  check('a reviewer note in the file never reaches the screen', !(await s.p.$eval('#cv', e => e.textContent)).includes('A reviewer note'));
  await s.p.click('#cv-cp [data-v="cp1"]');
  await s.p.click('#cv-model-show [data-v="hide"]');
  check('and Hide takes it off the screen', !/Model paragraph one\.|File one\./.test(await s.p.$eval('#cv', e => e.textContent)));
  check('the teacher is told who has not submitted yet', /have not submitted Checkpoint 1 yet|Everyone has submitted/.test(await s.p.$eval('#cv-teacher-note', e => e.textContent)));
  // The projector screen (2026-11-16): a second window that is sent class totals only.
  await s.p.click('#cv-model-show [data-v="show"]');
  await s.p.evaluate(() => { window.__pj = []; window.__pjc = new BroadcastChannel('class-pulse-projector'); window.__pjc.onmessage = e => { if (e.data && e.data.type === 'state') window.__pj.push(e.data.state); }; });
  const pj = await s.context.newPage();
  const pjErrors = []; pj.on('pageerror', e => pjErrors.push(String(e)));
  await pj.goto(`http://127.0.0.1:${server.address().port}/teacher/class-pulse-projector.html`, { waitUntil: 'load' });
  await pj.waitForFunction(() => /Topic 2\.3/.test(document.getElementById('pj-topic').textContent), null, { timeout: 8000 }).catch(() => {});
  check('the projector screen opens on the title alone', /Topic 2\.3/.test(await pj.$eval('#pj-stage', e => e.textContent)) && !/How the class did/.test(await pj.$eval('#pj-stage', e => e.textContent)));
  const seenText = [];
  // One slide per criterion for the model answer (2026-11-18, Jeff): Topic 2.3's
  // Checkpoint 1 has three criteria, so five fixed parts and three model slides.
  const sceneLabels = await s.p.$$eval('#proj-scenes button', bs => bs.map(b => b.textContent));
  check('the model answer is one slide per criterion, each with its own button', JSON.stringify(sceneLabels.slice(5)) === JSON.stringify(['6. Model answer, criterion 1', '7. Model answer, criterion 2', '8. Model answer, criterion 3']) && sceneLabels.length === 8, sceneLabels.join(' | '));
  for (let i = 1; i < 8; i++) {
    await s.p.click(`#proj-scenes [data-scene="${i}"]`);
    await pj.waitForFunction(n => document.getElementById('pj-step').textContent.startsWith((n + 1) + ' of 8'), i, { timeout: 4000 }).catch(() => {});
    seenText.push(await pj.$eval('body', e => e.textContent));
  }
  const sentStates = await s.p.evaluate(() => window.__pj);
  const sentAll = JSON.stringify(sentStates), drawn = seenText.join('\n');
  const leak = t => answers.filter(a => a && a.length > 40).some(a => { for (let i = 0; i + 40 <= a.length; i += 20) if (t.includes(a.slice(i, i + 40))) return true; return false; });
  check('each part reaches the projector screen in turn', /Explain how knowledge|Explain/.test(seenText[0]) && /How the class did/.test(seenText[1]) && /Let's revisit criterion \d/.test(seenText[2]) && /Wrong ideas to fix/.test(seenText[3]) && /A model answer/.test(seenText[4]), seenText.map(t => t.slice(0, 60)).join(' | '));
  check('nothing sent to the projector holds a student name', sentStates.length >= 5 && shownNames.every(nm => !sentAll.includes(nm)) && !/Student \d\d/.test(sentAll) && shownNames.every(nm => !drawn.includes(nm)), shownNames.find(nm => sentAll.includes(nm)) || '');
  check('or a student\'s words', !leak(sentAll) && !leak(drawn));
  check('the model answer is sent only while its own part is showing', sentStates.filter(x => x.model).length > 0 && sentStates.every(x => !x.model || x.scene === 'model') && sentStates.filter(x => x.scene !== 'model').every(x => !JSON.stringify(x).includes('File one.')) && /File one\./.test(seenText[4]), sentStates.map(x => x.scene + ':' + !!x.model).join(','));
  const own = [['File one.', 'File two.', 'File three.'], [4, 5, 6]];
  const onlyOwn = own[1].every((at, k) => own[0].every((para, j) => seenText[at].includes(para) === (j === k)));
  const modelSent = sentStates.filter(x => x.model && x.model.length);
  check('each model answer slide shows only its own paragraph, under its own criterion', onlyOwn && /Criterion 1/.test(seenText[4]) && /Criterion 3 of 3/.test(seenText[6]) && /8 of 8 · Model answer, criterion 3/.test(seenText[6]), own[1].map(at => seenText[at].slice(0, 200)).join(' | '));
  check('and is sent only its own paragraph', modelSent.length >= 3 && modelSent.every(x => own[0].filter(para => JSON.stringify(x).includes(para)).length === 1), modelSent.map(x => x.label + ':' + x.model[0].text).join(' | '));
  await pj.keyboard.press('ArrowRight');
  await pj.waitForTimeout(300);
  check('Next on the last model slide stays there', /8 of 8/.test(await pj.$eval('#pj-step', e => e.textContent)), await pj.$eval('#pj-step', e => e.textContent));
  await pj.keyboard.press('ArrowLeft');
  await s.p.waitForFunction(() => document.querySelector('#proj-scenes [data-scene="6"]').getAttribute('aria-pressed') === 'true', null, { timeout: 4000 }).catch(() => {});
  check('an arrow key on the projector window steps it from the teacher\'s page', (await s.p.$eval('#proj-scenes [data-scene="6"]', b => b.getAttribute('aria-pressed'))) === 'true' && /7 of 8 · Model answer, criterion 2/.test(await pj.$eval('#pj-step', e => e.textContent)));
  await s.p.click('#proj-scenes [data-scene="5"]');
  await pj.keyboard.press('ArrowLeft');
  await s.p.waitForFunction(() => document.querySelector('#proj-scenes [data-scene="4"]').getAttribute('aria-pressed') === 'true', null, { timeout: 4000 }).catch(() => {});
  check('Back from the first model slide is one slide back, to Wrong ideas', /5 of 8 · Wrong ideas/.test(await pj.$eval('#pj-step', e => e.textContent)), await pj.$eval('#pj-step', e => e.textContent));
  const pjCsp = await pj.$eval('meta[http-equiv="Content-Security-Policy"]', m => m.content);
  check('the projector screen cannot reach the network at all', /connect-src 'none'/.test(pjCsp) && await pj.evaluate(() => fetch('https://example.com/').then(() => false, () => true)));
  check('the projector screen raises no script error', pjErrors.length === 0, pjErrors.join(' | '));
  // A checkpoint with five criteria gets five model slides, and moving to one with
  // fewer brings the screen back onto a slide that exists.
  await choose(s.p, '5.3');
  await s.p.click('#cv-cp [data-v="cp2"]');
  const five = await s.p.$$eval('#proj-scenes button', bs => bs.map(b => b.textContent));
  check('a checkpoint with five criteria has five model answer slides', five.length === 10 && five[9] === '10. Model answer, criterion 5', five.join(' | '));
  await s.p.click('#proj-scenes [data-scene="9"]');
  await s.p.click('#cv-cp [data-v="cp1"]');
  await pj.waitForFunction(() => /^8 of 8/.test(document.getElementById('pj-step').textContent), null, { timeout: 4000 }).catch(() => {});
  check('switching to a checkpoint with fewer criteria lands on its last slide', /^8 of 8 · Model answer, criterion 3/.test(await pj.$eval('#pj-step', e => e.textContent)) && (await s.p.$eval('#proj-scenes [data-scene="7"]', b => b.getAttribute('aria-pressed'))) === 'true', await pj.$eval('#pj-step', e => e.textContent));
  await pj.close();
  // The iPad numbers each part checkpoint * stride + part, so both pages must agree on
  // the stride. Read through the test server, so a negative control can change one.
  const served = f => new Promise((ok, no) => http.get(`http://127.0.0.1:${server.address().port}/${f}`, r => { let b = ''; r.on('data', d => { b += d; }); r.on('end', () => ok(b)); }).on('error', no));
  const appStride = (/const REMOTE_STRIDE = (\d+);/.exec(await served('teacher/class-pulse-app.js')) || [])[1];
  const remoteStride = (/STRIDE=(\d+);/.exec(await served('teacher/class-pulse-remote.html')) || [])[1];
  check('the iPad remote and the page use the same numbering', !!appStride && appStride === remoteStride && Number(appStride) >= 5 + 8, appStride + ' vs ' + remoteStride);
  check('Class view raises no script error', s.errors.length === 0, s.errors.join(' | '));
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
  await toBatches(c.p);
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
  await toBatches(c.p);
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
  await toBatches(k.p);
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
  // This run is the approval switched OFF, so the lock is proved even though the
  // shipped approval (2026-11-05) is on. The run after it uses an approval.
  const kept1 = patches;
  patches = kept1.concat([{ file: 'teacher/class-pulse-handoff.js', from: "const APPROVAL = { realWork: true, reference: 'Dan Layton, email of 2026-11-05', services: ['claude-for-teachers'] };", to: "const APPROVAL = { realWork: false, reference: '', services: [] };" }]);
  const L = await open(browser, 1280, ctx => fakeGoogle(ctx, store));
  patches = kept1;
  await L.p.waitForTimeout(300);
  check('nothing is asked of Google until My class is chosen', !store.googleLoaded && store.requests.length === 0);
  await choose(L.p, LIVE_TOPIC);
  await L.p.click('#source [data-v="live"]');
  await L.p.waitForSelector('#live-signin:not([hidden])', { timeout: 8000 }).catch(() => {});
  await L.p.click('#live-signin');
  await L.p.waitForFunction(() => /G4 \(3 students\)/.test(document.getElementById('section').textContent), null, { timeout: 8000 }).catch(() => {});
  await L.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 3, null, { timeout: 8000 }).catch(() => {});
  const liveNames = await L.p.$$eval('#heat td.name', tds => tds.map(t => t.childNodes[0].textContent));
  check('signing in shows the teacher\'s own class list', JSON.stringify(liveNames) === JSON.stringify(['Ana Ruiz', 'Ben Cole', 'Cal Ito']), liveNames.join(','));
  const cells = await L.p.$$eval('#heat tbody tr', trs => trs.map(tr => [...tr.querySelectorAll('td .cell')].slice(0, 3).map(c => c.className.replace('cell ', '')).join(' ')));
  check('a submitted answer with no saved rating shows as not read yet', /^b-wait b-wait b-wait$/.test(cells[0] || ''), cells.join(' | '));
  check('an answer changed after Submit shows as changed, never as a level', /^b-changed b-changed b-changed$/.test(cells[1] || ''), cells[1]);
  check('on 4.7, a draft never submitted shows as saved, never submitted', /^b-draft b-draft b-draft$/.test(cells[2] || ''), cells[2]);
  // Where everyone is (2026-11-16): one box per student per checkpoint, adding up to the class.
  const ledger = await L.p.$$eval('#ledger .ledger-row', rows => rows.map(r => ({ cp: r.dataset.cp, boxes: [...r.querySelectorAll('.ledger-box')].map(b => b.querySelector('span').textContent + '=' + b.querySelector('b').textContent), sum: [...r.querySelectorAll('.ledger-box b')].reduce((a, b) => a + Number(b.textContent), 0), of: r.querySelector('.ledger-sum').textContent })));
  check('the count puts every student in exactly one box for each checkpoint', ledger.length === 2 && ledger.every(r => r.sum === 3 && r.of === 'of 3'), JSON.stringify(ledger));
  check('and says why: waiting, changed after submitting, saved but never submitted', ledger[0] && ['Submitted, waiting for a reading=1', 'Changed after submitting=1', 'Writing saved, never submitted=1'].every(x => ledger[0].boxes.includes(x)), JSON.stringify(ledger[0]));
  check('a student with no writing is counted as nothing in the backup', ledger[1] && ledger[1].boxes.includes('Nothing in the backup=1') && ledger[1].boxes.includes('Submitted, waiting for a reading=2'), JSON.stringify(ledger[1]));
  await L.p.click('#ledger [data-ledger="cp1|changed"]');
  const who = await L.p.$eval('#dbody', e => e.textContent);
  check('pressing a box names who is in it and what to do', /Ben Cole/.test(who) && !/Ana Ruiz|Cal Ito/.test(who) && /Submit again/.test(who), who.slice(0, 160));
  await L.p.keyboard.press('Escape');
  check('nothing in My class is shown as "Reading it now"', !/Reading it now/.test(await L.p.$eval('#legend-live', e => e.textContent)));
  check('the database is read one document at a time, never queried for student work',
    store.requests.length > 0 && !store.requests.some(r => /responses:runQuery|POST .*responses/.test(r)), store.requests.slice(0, 4).join(' ; '));
  check('Across the course and One student are not offered in My class', await L.p.$eval('#tab-course', b => b.hidden) && await L.p.$eval('#tab-student', b => b.hidden));
  await L.p.click('#tab-pulse');
  const coachedText = await L.p.$eval('#coached', e => e.textContent).catch(() => '');
  check('the coaching note splits Checkpoint 2 into coached and not coached', /1 of 2 Checkpoint 2 submissions came after the student copied the AI Coach prompt/.test(coachedText), coachedText.slice(0, 140));
  check('and says copying the prompt is not proof of coaching', /not proof they used the coaching/.test(coachedText));
  // The feedback session marker: Ana's Checkpoint 2 was saved after "now", Ben's before.
  await L.p.click('#tab-class');
  await L.p.click('#cv-cp [data-v="cp2"]');
  await L.p.click('#cv-session-mark').catch(() => {});
  const sessNote = await L.p.$eval('#cv-teacher-note', e => e.textContent).catch(() => '');
  check('marking the feedback session counts the answer submitted after it', /^1 answer came in after the feedback session/.test(sessNote), sessNote.slice(0, 120));
  check('and says when it was marked', /Feedback session for Checkpoint 2 marked/.test(await L.p.$eval('#cv-session', e => e.textContent).catch(() => '')));
  await L.p.click('#tab-pulse');
  const lateList = await L.p.$eval('#after-session', e => e.textContent).catch(() => '');
  check('After class names who submitted after the session', /Checkpoint 2:\s*1 \(Ana Ruiz\)/.test(lateList) && !/Ben Cole/.test(lateList), lateList.slice(0, 120));
  await L.p.click('#tab-class');
  await L.p.click('#cv-session-clear').catch(() => {});
  check('clearing the mark clears the count', !/came in after the feedback session/.test(await L.p.$eval('#cv-teacher-note', e => e.textContent).catch(() => '')));
  await toBatches(L.p);
  check('with the approval off, the one copy is locked too', await L.p.$eval('#bundle-copy', b => b.disabled) && /Locked/.test(await L.p.$eval('#bundle-copied', e => e.textContent)) && (await L.p.$eval('#bundle-text', t => t.value)) === '');
  check('with the approval off, copying real answers stays locked', /Locked/.test(await L.p.$eval('#paste-batches', e => e.textContent)) && (await L.p.$$('#paste-batches [data-copy]')).length === 0);
  check('My class raises no script error', L.errors.length === 0, L.errors.join(' | '));
  await L.context.close();

  // The same class once the approval is recorded in the code.
  const store2 = liveStore();
  const kept2 = patches;
  patches = kept2.concat([{ file: 'teacher/class-pulse-handoff.js', from: "const APPROVAL = { realWork: true, reference: 'Dan Layton, email of 2026-11-05', services: ['claude-for-teachers'] };", to: "const APPROVAL = { realWork: true, reference: 'Test approval, not real', services: ['claude-for-teachers', 'chatgpt-for-teachers'] };" }]);
  const A = await open(browser, 1280, ctx => fakeGoogle(ctx, store2));
  patches = kept2;
  await choose(A.p, LIVE_TOPIC);
  await A.p.click('#source [data-v="live"]');
  await A.p.waitForSelector('#live-signin:not([hidden])', { timeout: 8000 }).catch(() => {});
  await A.p.click('#live-signin');
  await A.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 3, null, { timeout: 8000 }).catch(() => {});
  await toBatches(A.p);
  const text = await A.p.$eval('#paste-batches textarea[data-text]', t => t.value).catch(() => '');
  check('once approved, only submitted answers are offered to copy', text.includes(ANA) && !text.includes('I changed this after submitting') && !text.includes('Half an') && !/Ana Ruiz|Ruiz|Ben Cole|Cal Ito/.test(text));
  if (text) {
    const id = JSON.parse(text.slice(text.lastIndexOf('{"batch"'))).batch;
    const n = (text.match(/"id":"criterion-\d+"/g) || []).length;
    const reply = JSON.stringify({ batch: id, answers: [{ key: 'A01', criteria: Array.from({ length: n }, (_, j) => ({ criterionId: 'criterion-' + (j + 1), category: 'D', evidence: [ANA.slice(0, 20)], reason: 'SAVED-REASON', misconceptions: j === 0 ? ['Claims "' + ANA.slice(0, 30) + '" which QUOTED-MISCONCEPTION.'] : [], uncertainty: [], reviewRequired: false })) }] });
    await A.p.selectOption('#paste-service', 'chatgpt-for-teachers');
    await A.p.click('#paste-batches details >> nth=0');
    await A.p.fill('#paste-batches textarea[data-paste] >> nth=0', reply);
    await A.p.click('#paste-batches [data-read] >> nth=0');
    await A.p.waitForFunction(() => /every submitted answer is read|0 submitted answers/i.test(document.getElementById('h-kind').textContent) || document.querySelectorAll('#heat .cell.b-D').length > 0, null, { timeout: 8000 }).catch(() => {});
  }
  const cardSaid = await A.p.$eval('#paste-batches [data-said]', x => x.textContent).catch(() => '');
  const cardState = await A.p.$eval('#paste-batches .batch-top .small', x => x.textContent).catch(() => '');
  check('after a paste in My class, the batch card shows what was saved', /Saved 1 rating/.test(cardSaid) && /1 of 1 read and saved/.test(cardState), cardSaid + ' | ' + cardState);
  const saved = JSON.stringify(store2.commits);
  check('a pasted reply is saved to the database for that student', store2.commits.length === 1 && /ana1__4-7__checkpoint-one-response/.test(saved) && /"codes":\{"stringValue":"D+"\}/.test(saved), saved.slice(0, 160));
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
  await A.p.keyboard.press('Escape');
  await A.p.click('#tab-class');
  const liveCv = await A.p.$eval('#cv', e => e.textContent).catch(() => '');
  check('Class view shows a wrong idea without the student\'s quoted words', /QUOTED-MISCONCEPTION/.test(liveCv) && !liveCv.includes(ANA.slice(0, 30)) && !/Ana|Ruiz|Ben Cole|Cal Ito/.test(liveCv), liveCv.slice(0, 200));
  const liveSent = await A.p.evaluate(() => new Promise(done => { const c = new BroadcastChannel('class-pulse-projector'); c.onmessage = e => { if (e.data && e.data.type === 'state') done(JSON.stringify(e.data.state)); }; document.querySelector('#proj-scenes [data-scene="4"]').click(); setTimeout(() => done(''), 3000); }));
  check('and so does what is sent to the projector', /QUOTED-MISCONCEPTION/.test(liveSent) && !liveSent.includes(ANA.slice(0, 30)) && !/Ana|Ruiz|Ben Cole|Cal Ito|ana1/.test(liveSent), liveSent.slice(0, 200));
  // One copy, one paste (2026-11-16). Ana's Checkpoint 1 is read by now, so what waits
  // is the two Checkpoint 2 answers.
  await A.p.click('#tab-read');
  await A.p.waitForFunction(() => document.getElementById('bundle-text').value.length > 0, null, { timeout: 8000 }).catch(() => {});
  const bundleText = await A.p.$eval('#bundle-text', t => t.value);
  const bundle = (() => { try { return JSON.parse(bundleText.slice(bundleText.indexOf('{'))); } catch (_) { return { items: [] }; } })();
  const sent = bundle.items.flatMap(x => x.answers.map(a => a.text));
  check('the one copy carries only the answers still waiting', JSON.stringify(sent.slice().sort()) === JSON.stringify([ANA2, BEN2].sort()) && !bundleText.includes(ANA), sent.join(' | '));
  check('with no name, class or account in it', !/Ana Ruiz|Ruiz|Ben Cole|Cal Ito|ana1|ben1|teach1|"G4"|"S1"|confidence/.test(bundleText));
  check('and the badge on the tab says how many wait', (await A.p.$eval('#read-badge', b => b.textContent)) === '2');
  const crit3 = (a, bad) => bundle.items[0].contract.criteria.map((c, j) => ({ criterionId: c.id, category: 'D', evidence: [bad && j === 0 ? 'words nobody wrote' : a.text.slice(0, 16).toUpperCase()], reason: 'READER-REASON', misconceptions: [], uncertainty: [], reviewRequired: false }));
  const result = JSON.stringify({ format: 'class-pulse-bundle-reply/1', bundle: bundle.id, batches: bundle.items.map(x => ({ batch: x.batch, answers: x.answers.map(a => ({ key: a.key, criteria: crit3(a, a.text === BEN2) })) })) });
  const before = store2.commits.length;
  await A.p.fill('#bundle-paste', bundleText);
  await A.p.click('#bundle-read');
  check('pasting the bundle back in place of the result is caught', /not the Reader's result/.test(await A.p.$eval('#bundle-said', e => e.textContent)) && store2.commits.length === before);
  await A.p.fill('#bundle-paste', result);
  await A.p.click('#bundle-read');
  await A.p.waitForFunction(() => /^Saved/.test(document.getElementById('bundle-said').textContent), null, { timeout: 8000 }).catch(() => {});
  const bundleSaid = await A.p.$eval('#bundle-said', e => e.textContent);
  const bundleSaved = JSON.stringify(store2.commits.slice(before));
  check('the Reader\'s result is saved for each student it read', /Saved 2 readings/.test(bundleSaid) && /ana1__4-7__checkpoint-two-response/.test(bundleSaved) && /ben1__4-7__checkpoint-two-response/.test(bundleSaved), bundleSaid);
  check('and records that it came through the Reader', /"reader":\{"stringValue":"claude-for-teachers-reader"\}/.test(bundleSaved));
  check('a quote in capitals is matched to the student\'s own words', bundleSaved.includes(ANA2.slice(0, 16)) && !bundleSaved.includes(ANA2.slice(0, 16).toUpperCase()));
  const led2 = await A.p.$$eval('#ledger .ledger-row[data-cp="cp2"] .ledger-box', bs => bs.map(b => b.querySelector('span').textContent + '=' + b.querySelector('b').textContent));
  check('one criterion with an invented quote costs that criterion, not the answer', led2.includes('Read=1') && led2.includes('Read, part needs a second look=1'), led2.join(' | '));
  const benCells = await A.p.$$eval('#heat tbody tr', trs => [...trs[1].querySelectorAll('td .cell')].slice(3, 6).map(c => c.className.replace('cell ', '')).join(' '));
  check('it shows as Can\'t tell on that criterion and a level on the others', /^b-U b-D b-D$/.test(benCells), benCells);
  await A.p.waitForFunction(() => /1 answer is waiting/.test(document.getElementById('bundle-count').textContent), null, { timeout: 8000 }).catch(() => {});
  check('and that answer goes out again with the next copy', /1 answer is waiting/.test(await A.p.$eval('#bundle-count', e => e.textContent)), await A.p.$eval('#bundle-count', e => e.textContent));
  check('saving and pulling raise no script error', A.errors.length === 0, A.errors.join(' | '));
  await A.context.close();

  // Auto-pull's quick check (2026-11-16): receipts every time, an answer only when its
  // receipt changed, and the saved readings reused. A fake clock fires the timer.
  section('Auto-pull reads as little as it can');
  {
    const store4 = liveStore();
    const Q = await open(browser, 1280, async ctx => { await ctx.clock.install(); await fakeGoogle(ctx, store4); });
    const wait = ms => new Promise(r => setTimeout(r, ms));
    await choose(Q.p, LIVE_TOPIC);
    await Q.p.click('#source [data-v="live"]');
    await Q.p.waitForSelector('#live-signin:not([hidden])', { timeout: 8000 }).catch(() => {});
    await Q.p.click('#live-signin');
    await Q.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 3, null, { timeout: 8000 }).catch(() => {});
    await wait(300);
    check('auto-pull is offered once one class is showing', !(await Q.p.$eval('#auto-pull-wrap', e => e.hidden)));
    await Q.p.check('#auto-pull');
    const tick = async () => { const n = store4.requests.length; await Q.p.clock.fastForward(181000); for (let i = 0; i < 40 && store4.requests.length === n; i++) await wait(50); await wait(400); return store4.requests.slice(n); };
    let reqs = await tick();
    const receipts = reqs.filter(r => /^GET responses\/.*-submitted$/.test(r)).length;
    const answers = reqs.filter(r => /^GET responses\/.*-response$/.test(r)).length;
    check('a check with nothing new reads each receipt once and no answer', receipts === 6 && answers === 0, reqs.join(' ; '));
    check('and does not read the saved readings again', !reqs.some(r => /runQuery/.test(r)), reqs.join(' ; '));
    check('the page says it checked, not pulled', /checked for new submissions .* \(0 new to read\)/.test(await Q.p.$eval('#live-status', e => e.textContent)), await Q.p.$eval('#live-status', e => e.textContent));
    // Ben submits again with his new words: his receipt changes, so his answer is read.
    const P = store4.P, NEW = 'The devshirme took boys, and I changed this after submitting.';
    store4.docs.set(P + 'responses/ben1__4-7__checkpoint-one-response-submitted', { name: P + 'responses/ben1__4-7__checkpoint-one-response-submitted', fields: { text: { stringValue: 'Submitted Oct 31, 9:40 AM · fingerprint ' + Sync.valueHash(NEW, '3') } }, updateTime: new Date().toISOString() });
    reqs = await tick();
    const read = reqs.filter(r => /^GET responses\/.*-response$/.test(r));
    check('a changed receipt gets its answer read, and only that one', read.length === 1 && /ben1__4-7__checkpoint-one-response$/.test(read[0]), read.join(' ; '));
    const benRow = await Q.p.$$eval('#heat tbody tr', trs => [...trs[1].querySelectorAll('td .cell')].slice(0, 3).map(c => c.className.replace('cell ', '')).join(' '));
    check('and the student shows as submitted on the grid', /^b-wait b-wait b-wait$/.test(benRow), benRow);
    const before = store4.requests.length;
    await Q.p.click('#live-refresh');
    for (let i = 0; i < 60; i++) { const n = store4.requests.length; await wait(100); if (n > before && store4.requests.length === n) break; }
    const full = store4.requests.slice(before);
    check('the Pull button still makes a full pull, saved readings included', full.some(r => /runQuery/.test(r)) && full.filter(r => /^GET responses\/.*-response$/.test(r)).length === 6, full.join(' ; '));
    check('auto-pull raises no script error', Q.errors.length === 0, Q.errors.join(' | '));
    await Q.context.close();
  }

  // The one-time recovery (2026-11-17): through Topic 4.6, saved writing with no
  // Submit receipt counts as submitted and looks it; 4.7 on is the section above.
  section('Old work through 4.6 is recovered');
  {
    const Live = require(path.join(ROOT, 'teacher', 'class-pulse-live.js'));
    const cut = ['1.1', '3.2', '4.6', 'Topic 4.6', '4.7', '4.8', '5.1', '10.1', 'f3'].map(t => t + '=' + Live.recovered(t)).join(' ');
    check('recovery covers every topic through 4.6 and nothing after', cut === '1.1=true 3.2=true 4.6=true Topic 4.6=true 4.7=false 4.8=false 5.1=false 10.1=false f3=false', cut);
    const store5 = liveStore(false, '4.6');
    const O = await open(browser, 1280, ctx => fakeGoogle(ctx, store5));
    await choose(O.p, '4.6');
    await O.p.click('#source [data-v="live"]');
    await O.p.waitForSelector('#live-signin:not([hidden])', { timeout: 8000 }).catch(() => {});
    await O.p.click('#live-signin');
    await O.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 3, null, { timeout: 8000 }).catch(() => {});
    await O.p.waitForTimeout(300);
    const rows = await O.p.$$eval('#heat tbody tr', trs => trs.map(tr => [...tr.querySelectorAll('td .cell')].slice(0, 3).map(c => c.className.replace('cell ', '')).join(' ')));
    check('on 4.6, writing never submitted is recovered and waits for a reading like any other', /^b-wait b-wait b-wait$/.test(rows[2] || ''), rows.join(' | '));
    check('on 4.6, an answer changed after Submit stays changed', /^b-changed b-changed b-changed$/.test(rows[1] || ''), rows[1]);
    check('on 4.6, a submitted answer is unaffected', /^b-wait b-wait b-wait$/.test(rows[0] || ''), rows[0]);
    const led = await O.p.$$eval('#ledger .ledger-row[data-cp="cp1"] .ledger-box', bs => bs.map(b => b.querySelector('span').textContent + '=' + b.querySelector('b').textContent));
    check('on 4.6, the count puts the recovered student with the submitted ones', led.includes('Submitted, waiting for a reading=2') && led.includes('Changed after submitting=1') && !led.some(x => /^Writing saved, never submitted=[1-9]/.test(x)), led.join(' | '));
    const cp2 = await O.p.$$eval('#ledger .ledger-row[data-cp="cp2"] .ledger-box', bs => bs.map(b => b.querySelector('span').textContent + '=' + b.querySelector('b').textContent));
    check('on 4.6, a student with nothing in the backup is still counted as nothing', cp2.includes('Nothing in the backup=1'), cp2.join(' | '));
    const title = await O.p.$eval('#heat tbody tr:nth-child(3) .cell', c => c.getAttribute('title')).catch(() => '');
    check('the recovered answer looks exactly like a submitted one', title === 'Submitted, waiting for a reading', title);
    await O.p.click('#tab-read');
    await O.p.waitForFunction(() => document.getElementById('bundle-text').value.length > 0, null, { timeout: 8000 }).catch(() => {});
    const sent = await O.p.$eval('#bundle-text', t => t.value).catch(() => '');
    check('and goes out to the Reader with the one copy', sent.includes('Half an') && !sent.includes('I changed this after submitting'), sent.slice(0, 120));
    check('the badge counts it among the answers waiting', (await O.p.$eval('#read-badge', b => b.textContent).catch(() => '')) === '4');
    check('recovery raises no script error', O.errors.length === 0, O.errors.join(' | '));
    await O.context.close();
  }

  section('All of the teacher\'s classes');
  {
    const store3 = liveStore(true);
    const M = await open(browser, 1280, ctx => fakeGoogle(ctx, store3));
    await choose(M.p, LIVE_TOPIC);
    await M.p.click('#source [data-v="live"]');
    await M.p.waitForSelector('#live-signin:not([hidden])', { timeout: 8000 }).catch(() => {});
    await M.p.click('#live-signin');
    await M.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 3, null, { timeout: 8000 }).catch(() => {});
    const opts = await M.p.$$eval('#section option', os => os.map(o => o.textContent));
    check('the class menu offers all classes and each one', JSON.stringify(opts) === JSON.stringify(['All my classes (3 students)', 'G4 (1 students)', 'S1 (2 students)']) && !(await M.p.$eval('#section', e => e.disabled)), opts.join(' | '));
    const names = () => M.p.$$eval('#heat td.name', tds => tds.map(t => t.childNodes[0].textContent).join(','));
    check('all classes shows every student', (await names()) === 'Ana Ruiz,Ben Cole,Cal Ito', await names());
    await M.p.selectOption('#section', 'S1');
    await M.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 2, null, { timeout: 8000 }).catch(() => {});
    check('choosing a class shows only that class', (await names()) === 'Ben Cole,Cal Ito' && /Students in S1/.test(await M.p.$eval('#h-n-label', e => e.textContent)), await names());
    await M.p.selectOption('#section', 'G4');
    await M.p.waitForFunction(() => document.querySelectorAll('#heat td.name').length === 1, null, { timeout: 8000 }).catch(() => {});
    check('and another class shows only its own', (await names()) === 'Ana Ruiz', await names());
    check('switching classes raises no script error', M.errors.length === 0, M.errors.join(' | '));
    await M.context.close();
  }

  section('A phone');
  for (const t of ['live', 'read', 'pulse', 'class', 'course', 'student']) {
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
    { name: 'saved ratings are ignored', file: 'teacher/class-pulse-app.js', from: "if (g && r.completionState === 'verified-submission' && (r.fingerprints || [r.fingerprint]).includes(g.fingerprint)) {", to: "if (false) {", expect: /next pull shows the saved levels/ },
    { name: 'an answer changed after Submit is counted', file: 'teacher/class-pulse-live.js', from: "const sameWriting = !!print && prints.indexOf(print) !== -1;", to: "const sameWriting = !!print;", expect: /changed after Submit/ },
    { name: 'a changed confidence rating unsubmits the answer', file: 'teacher/class-pulse-live.js', from: "const sameWriting = !!print && prints.indexOf(print) !== -1;", to: "const sameWriting = !!print && print === o.valueHash(text, confidence);", expect: /coaching note splits|nothing in the backup/ },
    { name: 'the count leaves out students with nothing', file: 'teacher/class-pulse-app.js', from: "return s === 'changed' || s === 'draft' ? s : 'none';", to: "return s === 'changed' || s === 'draft' ? s : 'gone';", expect: /exactly one box/ },
    { name: 'the one copy sends answers already read', file: 'teacher/class-pulse-app.js', from: "const answers = b.answers.filter(a => answerPending(cp, a.text));", to: "const answers = b.answers;", expect: /only the answers still waiting/ },
    { name: 'the one copy ignores the approval', file: 'teacher/class-pulse-app.js', from: "const can = gate.ok && n > 0 && !left;", to: "const can = n > 0 && !left;", expect: /one copy is locked too/ },
    { name: 'a partly failed reading is thrown away', file: 'teacher/class-pulse-app.js', from: "reads.forEach(r => r.read.results.filter(x => x.status === 'passed' || x.status === 'partial')", to: "reads.forEach(r => r.read.results.filter(x => x.status === 'passed')", expect: /costs that criterion, not the answer/ },
    { name: 'auto-pull reads every answer', file: 'teacher/class-pulse-live.js', from: "if (before && before.receiptText === str(receipt && receipt.fields && receipt.fields.text)) return { kept: before };", to: '', expect: /reads each receipt once and no answer/ },
    { name: 'auto-pull never notices a new submission', file: 'teacher/class-pulse-live.js', from: "if (before && before.receiptText === str(receipt && receipt.fields && receipt.fields.text)) return { kept: before };", to: 'if (before) return { kept: before };', expect: /changed receipt gets its answer read/ },
    { name: 'auto-pull reads the saved readings again', file: 'teacher/class-pulse-app.js', from: "const ratings = base ? base.ratings : await L.api.ratings(S.topic);", to: 'const ratings = await L.api.ratings(S.topic);', expect: /saved readings again/ },
    { name: 'the Pull button makes a quick check too', file: 'teacher/class-pulse-app.js', from: "const base = quick && S.liveCache && S.liveCache.key === cacheKey ? S.liveCache : null;", to: "const base = S.liveCache && S.liveCache.key === cacheKey ? S.liveCache : null;", expect: /Pull button still makes a full pull|next pull shows the saved levels/ },
    { name: 'the projector is sent the class list', file: 'teacher/class-pulse-app.js', from: "inCount: d.inCount, n: D.students.length, read: d.read,", to: "inCount: d.inCount, n: D.students.length, read: d.read, who: D.students.map(st => st.name),", expect: /sent to the projector holds a student name/ },
    { name: 'every model slide is sent the whole answer', file: 'teacher/class-pulse-app.js', from: "const text = match ? paras[i] :", to: "const text = match ? paras.join('\\n\\n') :", expect: /only its own paragraph/ },
    { name: 'the model answer is one slide again', file: 'teacher/class-pulse-app.js', from: "Array.from({ length: criteriaCount(cp) }, (_, i) =>", to: "Array.from({ length: 1 }, (_, i) =>", expect: /one slide per criterion/ },
    { name: 'the iPad numbers the parts differently', file: 'teacher/class-pulse-remote.html', from: "STRIDE=13;", to: "STRIDE=6;", expect: /same numbering/ },
    { name: 'the projector is sent the model answer early', file: 'teacher/class-pulse-app.js', from: "if (scene === 'model' && S.cvModel === 'show') {", to: "if (S.cvModel === 'show') {", expect: /only while its own part is showing/ },
    { name: 'the projector keeps quoted words', file: 'teacher/class-pulse-app.js', from: "const word = unquoted(m);", to: "const word = m;", expect: /what is sent to the projector/ },
    { name: 'copying real answers is open without approval', file: 'teacher/class-pulse-handoff.js', from: "if (rows.every(r => r.completionState === 'synthetic-complete'))", to: "if (true)", expect: /stays locked/ },
    { name: 'projector mode keeps names', file: 'teacher/class-pulse-app.js', from: "S.names === 'anon' ?", to: 'false ?', expect: /hides every name/ },
    { name: 'the reader menu changes nothing', file: 'teacher/class-pulse-app.js', from: "provider = S.reader === 'invented' ? src.provider\n        :", to: 'provider = true ? src.provider\n        :', expect: /recorded reader's levels/ },
    { name: 'pasted replies are ignored', file: 'teacher/class-pulse-app.js', from: ": H && S.reader === H.READER.id ? H.provider([...pastedHere().values()]) : recordedProvider(S.reader, src)", to: ": H && S.reader === H.READER.id ? src.provider : recordedProvider(S.reader, src)", expect: /pasted reader's reasons/ },
    { name: 'the outcome of a paste in My class goes only to the screen reader', file: 'teacher/class-pulse-app.js', from: "S.saved.set(id, { state: (read.passed + (read.partial || 0)) + ' of ' + b.answers.length + ' read and saved', said });", to: 'void said;', expect: /batch card shows what was saved/ },
    { name: 'the service is not recorded', file: 'teacher/class-pulse-app.js', from: "reader: S.service + '-pasted' });", to: "});", expect: /service it was pasted into/ },
    { name: 'Copy ignores the check', file: 'teacher/class-pulse-app.js', from: "<button class=\"btn primary\" type=\"button\" data-copy=\"${b.id}\"${left ? ' disabled' : ''}>", to: "<button class=\"btn primary\" type=\"button\" data-copy=\"${b.id}\">", expect: /Copy waits/ },
    { name: 'removed words are copied anyway', file: 'teacher/class-pulse-app.js', from: "${esc(H.promptFor(D.contracts[cp], asCopied(b)))}", to: "${esc(H.promptFor(D.contracts[cp], b))}", expect: /never reaches the copied text/ },
    { name: 'the copy button copies something else', file: 'teacher/class-pulse-app.js', from: 'await navigator.clipboard.writeText(text);', to: "await navigator.clipboard.writeText(text + ' ');", expect: /exactly that text/ },
    { name: 'the class menu is ignored', file: 'teacher/class-pulse-app.js', from: 'return S.liveSection ? R.students.filter(st => st.section === S.liveSection) : R.students;', to: 'return R.students;', expect: /only that class|only its own/ },
    { name: 'Class view shows names', file: 'teacher/class-pulse-app.js', from: '<p class="cv-count">${inCount} of ${n} answers in', to: '<p class="cv-count">${D.students.map(st => esc(st.name)).join(\', \')} ${inCount} of ${n} answers in', expect: /Class view shows no student name/ },
    { name: 'Class view keeps quoted words', file: 'teacher/class-pulse-app.js', from: 'const k = unquoted(m);', to: 'const k = m;', expect: /without the student's quoted words/ },
    { name: 'Class view ignores Hide on the model answer', file: 'teacher/class-pulse-app.js', from: "    if (S.cvModel === 'show') {\n      const paras", to: "    if (true) {\n      const paras", expect: /Hide takes it off/ },
    { name: 'the model answers file is read but not kept', file: 'teacher/class-pulse-app.js', from: "setModel('class-pulse-model-' + a.topic + '-' + a.cp, a.text);", to: '', expect: /fills this checkpoint in|already filled in too/ },
    { name: 'the box keeps old text after a load', file: 'teacher/class-pulse-app.js', from: "$('#cv-model-text').value = modelText(); // even while the cursor is in the box", to: '', expect: /box under the dropdown/ },
    { name: 'the model answers file keeps only the open checkpoint', file: 'teacher/class-pulse-app.js', from: "setModel('class-pulse-model-' + a.topic + '-' + a.cp, a.text);", to: "if (a.topic === S.topic && a.cp === S.cvCp) setModel(modelKey(), a.text);", expect: /already filled in too/ },
    { name: 'the session time is ignored', file: 'teacher/class-pulse-app.js', from: 'return !!(at && Date.parse(t) > Date.parse(at));', to: 'return false;', expect: /counts the answer submitted after it/ },
    { name: 'every answer counts as after the session', file: 'teacher/class-pulse-app.js', from: 'return !!(at && Date.parse(t) > Date.parse(at));', to: 'return !!at;', expect: /names who submitted after the session/ },
    { name: 'the coaching note is never read', file: 'teacher/class-pulse-live.js', from: "coached: state === 'verified-submission' && receiptCoached(receiptText),", to: 'coached: false,', expect: /coaching note splits/ },
    { name: 'the recovery is switched off', file: 'teacher/class-pulse-live.js', from: "const fromBackup = recover && !!text && !print;", to: 'const fromBackup = false;', expect: /writing never submitted is recovered/ },
    { name: 'the recovery reaches 4.7', file: 'teacher/class-pulse-live.js', from: "const RECOVER_THROUGH = '4.6';", to: "const RECOVER_THROUGH = '4.7';", expect: /on 4\.7, a draft never submitted/ },
    { name: 'an answer changed after Submit is recovered', file: 'teacher/class-pulse-live.js', from: "const fromBackup = recover && !!text && !print;", to: 'const fromBackup = recover && !!text;', expect: /changed after Submit stays changed/ },
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
