#!/usr/bin/env node
'use strict';
// The iPad remote's default connection, Firebase, with the real host and iPad
// pages in two isolated browser contexts.
//
// Google's SDK is replaced by a small stand-in served at the exact gstatic
// addresses teacher/remote-firebase.js imports, backed by one in-memory
// document per session in this process. The stand-in delivers the document by
// polling, so two quick writes can arrive as one, the same merging a real
// Firestore listener is allowed to do; that is what the absolute-slide
// assertion and its negative control are about.
//
// What this proves: sign-in gating, staff-only start, the QR session, both
// directions of slide control, merged writes, reload, a late-starting session,
// the quota message, and that nothing goes to ntfy.sh. What it does not prove:
// the security rules (scripts/test/firestore-rules.test.js runs those against
// Google's own engine) or that a school network reaches Firestore.
const fs = require('fs'), path = require('path'), http = require('http'), assert = require('assert/strict');
let chromium; try { ({ chromium } = require('playwright-core')); } catch (e) { console.error('Needs playwright-core'); process.exit(2); }

const ROOT = path.resolve(__dirname, '../..');
const docs = new Map(), connections = new Set();
const knobs = { denyGets: false, limited: false };
let origin;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const STALE = 16 * 3600 * 1000;

function resolve(value, old) {
  if (value && value.__ts) return Date.now();
  if (value && value.__inc) return (Number(old) || 0) + value.__inc;
  return value;
}
const send = (res, code, body) => { res.writeHead(code, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(body)); };

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://local');
  if (u.pathname.startsWith('/fakefs/')) {
    let body = ''; for await (const chunk of req) body += chunk;
    const input = body ? JSON.parse(body) : {};
    const key = u.searchParams.get('path') || input.path;
    const current = docs.get(key);
    const alive = current && Date.now() - current.createdAt < STALE;
    if (u.pathname === '/fakefs/get') {
      // Like the real rules: a missing or expired session reads as refused.
      if (knobs.denyGets || !alive) return send(res, 403, { code: 'permission-denied' });
      return send(res, 200, { data: current });
    }
    if (knobs.limited) return send(res, 429, { code: 'resource-exhausted' });
    if (u.pathname === '/fakefs/set') {
      if (current) return send(res, 403, { code: 'permission-denied' });
      const data = {}; for (const [k, v] of Object.entries(input.data)) data[k] = resolve(v);
      docs.set(key, data); return send(res, 200, {});
    }
    if (u.pathname === '/fakefs/update') {
      if (!alive) return send(res, 403, { code: 'permission-denied' });
      for (const [k, v] of Object.entries(input.change)) current[k] = resolve(v, current[k]);
      current.version = (current.version || 0) + 1;
      return send(res, 200, {});
    }
  }
  const file = path.resolve(ROOT, '.' + u.pathname);
  if (!file.startsWith(ROOT + path.sep) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream'); res.end(fs.readFileSync(file));
});
server.on('connection', s => { connections.add(s); s.on('close', () => connections.delete(s)); });

// The stand-in SDK. Only what remote-firebase.js calls.
const FAKE = {
  'firebase-app.js': `const apps=[];export function getApps(){return apps;}export function getApp(){return apps[0];}export function initializeApp(c){const a={options:c};apps.push(a);return a;}`,
  'firebase-firestore.js': o => `
const O=${JSON.stringify(o)};
async function call(p,body){const r=await fetch(O+p,{method:body?'POST':'GET',headers:{'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const j=await r.json();if(!r.ok){const e=new Error(j.code);e.code=j.code;throw e;}return j;}
function snap(d){const data=d?Object.assign({},d):null;if(data)for(const k of Object.keys(data))if(/At$/.test(k)&&typeof data[k]==='number'){const v=data[k];data[k]={toMillis:()=>v};}return{exists:()=>!!d,data:()=>data};}
export function getFirestore(){return{};}
export function doc(db,p){return{path:p};}
export function serverTimestamp(){return{__ts:true};}
export function increment(n){return{__inc:n};}
export async function getDoc(r){return snap((await call('/fakefs/get?path='+encodeURIComponent(r.path))).data);}
export async function setDoc(r,data){await call('/fakefs/set',{path:r.path,data});}
export async function updateDoc(r,change){await call('/fakefs/update',{path:r.path,change});}
export function onSnapshot(r,next,error){let live=true,last=-1;const tick=async()=>{if(!live)return;try{const j=await call('/fakefs/get?path='+encodeURIComponent(r.path));const v=j.data.version||0;if(v!==last){last=v;next(snap(j.data));}setTimeout(tick,150);}catch(e){if(live){live=false;error(e);}}};tick();return()=>{live=false;};}`,
  'firebase-auth.js': `
function read(){try{return JSON.parse(localStorage.getItem('fake-auth-user')||'null');}catch(e){return null;}}
export function getAuth(){return{currentUser:read(),authStateReady(){this.currentUser=read();return Promise.resolve();}};}
export class GoogleAuthProvider{setCustomParameters(p){this.params=p;}}
export async function signInWithPopup(auth){const email=localStorage.getItem('fake-popup-email');const user={uid:'uid-'+email.split('@')[0],email};localStorage.setItem('fake-auth-user',JSON.stringify(user));auth.currentUser=user;return{user};}
export async function signOut(auth){localStorage.removeItem('fake-auth-user');auth.currentUser=null;}`
};

async function makeContext(browser, override) {
  const c = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  c.ntfy = 0;
  await c.route('**/*', r => {
    const url = r.request().url();
    if (url.includes('ntfy.sh')) { c.ntfy++; return r.abort(); }
    const m = url.match(/^https:\/\/www\.gstatic\.com\/firebasejs\/12\.19\.0\/(firebase-[a-z]+\.js)$/);
    if (m && FAKE[m[1]]) {
      const body = typeof FAKE[m[1]] === 'function' ? FAKE[m[1]](origin) : FAKE[m[1]];
      return r.fulfill({ contentType: 'text/javascript', headers: { 'Access-Control-Allow-Origin': '*' }, body });
    }
    if (!url.startsWith(origin + '/')) return r.abort();
    if (override && new URL(url).pathname === '/teacher/ipad-remote.html') return r.fulfill({ contentType: 'text/html', body: override });
    return r.continue();
  });
  return c;
}

const count = p => p.frameLocator('#command').locator('#count');
const index = p => count(p).textContent().then(t => Number(t.match(/\d+/)[0]) - 1);
async function waitIndex(p, n, timeout = 10000) {
  await p.waitForFunction(n => { const d = document.querySelector('#command').contentDocument, c = d && d.querySelector('#count'); const m = c && c.textContent.match(/\d+/); return m && Number(m[0]) - 1 === n; }, n, { timeout });
}
const sessionOf = h => h.evaluate(() => sessionStorage.getItem('behistorical-remote-session-3-2-firebase'));

// Sign the laptop in as `email` and wait for the outcome on screen.
async function signIn(h, email) {
  await h.evaluate(e => localStorage.setItem('fake-popup-email', e), email);
  await h.locator('#qrSignIn').click();
}

async function pairSignedIn(browser, override) {
  const hc = await makeContext(browser), ic = await makeContext(browser, override);
  const h = await hc.newPage(), i = await ic.newPage(), errors = [];
  for (const p of [h, i]) p.on('pageerror', e => errors.push(e.message));
  await h.goto(origin + '/teacher/remote-host.html?topic=3-2');
  await count(h).waitFor();
  await signIn(h, 'teacher@zcs.k12.in.us');
  await h.waitForFunction(() => document.querySelector('#connection').textContent === 'Waiting for iPad');
  const session = await sessionOf(h);
  await h.locator('#closeQr').click();
  await i.goto(origin + '/teacher/ipad-remote.html?topic=3-2&session=' + session);
  await i.waitForFunction(() => document.querySelector('#status').classList.contains('ok'), null, { timeout: 20000 });
  return { h, i, hc, ic, session, errors, close: async () => { await hc.close(); await ic.close(); } };
}

// Two presses inside one listener interval, so the stand-in delivers only the
// second write. Returns how far the laptop moved.
async function doubleTap(p) {
  const before = await index(p.h);
  await p.i.evaluate(() => { const b = document.getElementById('next'); b.click(); b.click(); });
  await p.i.waitForTimeout(1500);
  return (await index(p.h)) - before;
}

async function main() {
  await new Promise(r => server.listen(0, '127.0.0.1', r)); origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ executablePath: process.env.PW_CHROME || chromium.executablePath(), args: ['--no-sandbox'] });
  try {
    // ── Starting a session needs a staff sign-in ──────────────────────────
    {
      const hc = await makeContext(browser), h = await hc.newPage();
      await h.goto(origin + '/teacher/remote-host.html?topic=3-2');
      await count(h).waitFor();
      await h.waitForFunction(() => !document.querySelector('#qrSignIn').hidden);
      assert.equal(await sessionOf(h), null);
      assert.match(await h.locator('#qrCode').textContent(), /appears once the laptop is signed in/);
      assert.equal(docs.size, 0);
      console.log('PASS signed out, the laptop asks for sign-in and shows no QR and no session');
      await signIn(h, 'student@stumail.zcs.k12.in.us');
      await h.waitForFunction(() => /not a zcs\.k12\.in\.us staff account/.test(document.querySelector('#qrStatus').textContent));
      assert.equal(docs.size, 0);
      console.log('PASS a student account cannot start a session');
      await hc.close();
    }

    // ── The working pair ──────────────────────────────────────────────────
    const p = await pairSignedIn(browser);
    try {
      assert.match(p.session, /^[a-f0-9]{36}$/);
      assert.ok(docs.has('tenants/zcs/remoteSessions/' + p.session));
      console.log('PASS staff sign-in starts a session and the QR carries it');
      await waitIndex(p.i, await index(p.h));
      assert.equal(await p.i.locator('#offline').isVisible(), false);
      console.log('PASS the iPad joins and shows the laptop\'s slide');

      const before = await index(p.h);
      await p.i.locator('#next').click(); await waitIndex(p.h, before + 1); await waitIndex(p.i, before + 1);
      console.log('PASS the iPad moves the laptop');
      await p.h.frameLocator('#command').locator('#next').click(); await waitIndex(p.i, before + 2);
      console.log('PASS the laptop moves the iPad');
      // ipad-remote.html ignores the deck's own buttons for 120 ms after the
      // laptop moves it, so a person's tap, never that fast, is what is tested.
      await p.i.waitForTimeout(300);
      await p.i.frameLocator('#command').locator('#next').click();
      await waitIndex(p.h, before + 3);
      console.log('PASS the deck\'s own Next button on the iPad moves the laptop');

      assert.equal(await doubleTap(p), 2);
      console.log('PASS two quick presses that arrive as one write still move two slides');

      const writes = docs.get('tenants/zcs/remoteSessions/' + p.session).ipadWrites;
      assert.ok(writes > 0 && writes < 20, String(writes));
      console.log('PASS the iPad\'s writes are counted (' + writes + ' so far)');

      await p.h.reload(); await count(p.h).waitFor();
      await p.h.waitForFunction(() => /Waiting for iPad|iPad connected/.test(document.querySelector('#connection').textContent));
      assert.equal(await sessionOf(p.h), p.session);
      const atReload = await index(p.h);
      await p.i.locator('#next').click(); await waitIndex(p.h, atReload + 1);
      console.log('PASS a laptop reload keeps the same session and the iPad keeps control');

      knobs.limited = true;
      await p.i.locator('#next').click();
      await p.i.waitForFunction(() => /free daily allowance/.test(document.querySelector('#status').textContent));
      knobs.limited = false;
      await p.i.locator('#retryRelay').click();
      await p.i.waitForFunction(() => document.querySelector('#status').classList.contains('ok'), null, { timeout: 20000 });
      console.log('PASS a spent daily allowance says so, and Retry recovers');

      assert.equal(p.hc.ntfy + p.ic.ntfy, 0);
      console.log('PASS nothing was sent to ntfy.sh');
      assert.deepEqual(p.errors, []);
      console.log('PASS no script errors on either device');
    } finally { await p.close(); }

    // ── An iPad that scans before the session is readable waits, then joins ─
    {
      const q = await pairSignedIn(browser);
      try {
        knobs.denyGets = true;
        await q.i.reload();
        await q.i.waitForFunction(() => /Waiting for the laptop/.test(document.querySelector('#status').textContent), null, { timeout: 15000 });
        knobs.denyGets = false;
        await q.i.waitForFunction(() => document.querySelector('#status').classList.contains('ok'), null, { timeout: 20000 });
        console.log('PASS an iPad that arrives early waits and then joins by itself');
      } finally { knobs.denyGets = false; await q.close(); }
    }

    // ── Negative control: relative commands lose a press when writes merge ─
    const original = fs.readFileSync(path.join(ROOT, 'teacher/ipad-remote.html'), 'utf8');
    const broken = original.replace("const absolute=relayKind==='firebase';", 'const absolute=false;');
    assert.notEqual(broken, original);
    const n = await pairSignedIn(browser, broken);
    try {
      const moved = await doubleTap(n);
      assert.notEqual(moved, 2, 'the merged-write check must fail when the iPad sends "next" instead of a slide number');
      console.log('PASS negative control: sending "next" over Firebase loses a press (' + moved + ' of 2), and the check sees it');
    } finally { await n.close(); }
  } finally {
    await browser.close(); for (const s of connections) s.destroy(); await new Promise(r => server.close(r));
  }
}
main().catch(e => { console.error(e); process.exitCode = 1; for (const s of connections) s.destroy(); server.close(); });
