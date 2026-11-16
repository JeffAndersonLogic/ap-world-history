#!/usr/bin/env node
/**
 * The Class Pulse Reader, run in Chromium against a stand-in for Claude.
 *
 * The Reader is the page published in the teacher's Claude for Teachers account
 * (scripts/build-class-pulse-reader.js). Here its own code runs unchanged; only
 * window.claude is replaced, by a stand-in that answers as a model would and can be
 * told to answer badly. What is proved:
 *
 *   - each answer is sent by itself, with the contract, and nothing identifying
 *   - a reading that fails the checks is asked for once more, and only once
 *   - a reading that never passes is left out of the result, so it stays waiting
 *   - the result reads back through the handoff's own checks, as Class Pulse reads it
 *   - a usage limit stops the run, keeps what is read, and Continue picks it up
 *   - without Claude the page says so and reads nothing
 *
 * Needs playwright-core; exits 2 without it (skipped, not passed).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) { console.error('This test needs playwright-core. Install it first:\n  npm i --no-save playwright-core'); process.exit(2); }

const ROOT = path.resolve(__dirname, '..', '..');
const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : []).filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();
const E = require(path.join(ROOT, 'teacher', 'class-pulse-engine.js'));
const H = require(path.join(ROOT, 'teacher', 'class-pulse-handoff.js'));
const R = require(path.join(ROOT, 'teacher', 'data', 'class-pulse-rubrics.js'));
const U3 = require(path.join(ROOT, 'teacher', 'data', 'class-pulse-calibration-u3.js'));
const { build, OUT } = require(path.join(ROOT, 'scripts', 'build-class-pulse-reader.js'));
const box = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'assets', 'data', 'skills-map.js'), 'utf8'), box);
const contract = E.contractFor(box.window.BEHISTORICAL_SKILLS_MAP, '3.1', 'cp1', R);
const rows = U3.rows.filter(r => r.topic === '3.1' && r.checkpoint === 'cp1').slice(0, 6)
  .map((c, i) => ({ key: 'k' + i, text: c.text, completionState: 'synthetic-complete' }));

let failures = 0, quiet = false;
const failed = [];
function check(label, ok, detail) {
  if (!ok) { failures++; failed.push(label); }
  if (!quiet) console.log(ok ? `  \x1b[32m✓\x1b[0m ${label}` : `  \x1b[31m✗\x1b[0m ${label}${detail ? `\n      ${detail}` : ''}`);
}

// The stand-in. It finds the one answer in the prompt and replies as the mode says:
//   good      every criterion D with a real quote
//   retry     an invented quote the first time an answer is seen, good after that
//   never:A03 that answer always gets an invented quote
//   limit:3   the fourth call and every later one is refused as rate limited, until reset
const STUB = `
  window.__calls = []; window.__mode = 'good'; window.__limitAt = Infinity;
  const sample = async (input, options) => {
    window.__calls.push({ input, tier: options && options.modelTier });
    if (window.__calls.length > window.__limitAt) throw { code: 'rate_limited', message: 'slow down' };
    const m = /<<<(A\\d+)-(\\w+)\\n([\\s\\S]*?)\\n\\1-\\2>>>/.exec(input);
    const ids = [...new Set(input.match(/"id":"criterion-\\d+"/g) || [])].map(x => x.slice(6, -1));
    const batch = /"batch":"([^"]+)"/.exec(input.slice(input.lastIndexOf('{"batch"')))[1];
    const seen = window.__calls.filter(c => c.input.includes('<<<' + m[1] + '-')).length;
    const bad = (window.__mode === 'retry' && seen === 1) || window.__mode === 'never:' + m[1];
    return { text: JSON.stringify({ batch, answers: [{ key: m[1], criteria: ids.map((id, j) => ({ criterionId: id, category: 'D', evidence: [bad && j === 0 ? 'words nobody wrote' : m[3].slice(0, 14)], reason: 'STUB', misconceptions: [], uncertainty: [], reviewRequired: false })) }] }), truncated: false, modelTierApplied: 'complex' };
  };
  sample.limits = async () => ({ maxPromptBytes: 262144 });
  window.claude = { use: async name => (window.__noClaude ? null : name === 'sample' ? sample : null) };
`;

async function suite(browser, page) {
  const bs = await H.batches(contract, rows, { size: 4 });
  const bundle = await H.bundleFor(bs.map(b => ({ contract, batch: b })));
  const text = H.bundleText(bundle);
  const open = async (pre) => {
    const ctx = await browser.newContext();
    const p = await ctx.newPage();
    const errors = []; p.on('pageerror', e => errors.push(String(e)));
    await p.addInitScript(STUB + (pre || ''));
    // Served on an address of its own, as the artifact host serves it, so the
    // stand-in is in place before the page's scripts run.
    await ctx.route('http://reader.test/**', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<!doctype html><html><head><meta charset="utf-8"></head><body>' + page + '</body></html>' }));
    await ctx.route('https://fonts.googleapis.com/**', route => route.fulfill({ status: 200, contentType: 'text/css', body: '' }));
    await p.goto('http://reader.test/');
    await p.waitForFunction(() => /Nothing pasted yet/.test(document.getElementById('bundle-info').textContent));
    await p.waitForTimeout(50);
    return { ctx, p, errors };
  };
  const finished = p => p.waitForFunction(() => document.getElementById('stop').hidden && /Done\.|still to read/.test(document.getElementById('progress').textContent), null, { timeout: 15000 }).catch(() => {});
  const readBack = async p => {
    const raw = await p.$eval('#result', t => t.value);
    if (!raw) return { raw, passed: 0, partial: 0, keys: [] };
    const reply = H.parseBundleReply(raw);
    let passed = 0, partial = 0; const keys = [];
    reply.batches.forEach(entry => {
      const b = bs.find(x => x.id === entry.batch), want = new Set(entry.answers.map(a => a.key));
      const r = H.readReply(contract, Object.assign({}, b, { answers: b.answers.filter(a => want.has(a.key)) }), JSON.stringify(entry));
      passed += r.passed; partial += r.partial; entry.answers.forEach(a => keys.push(a.key));
    });
    return { raw, passed, partial, keys, bundle: reply.bundle };
  };

  // 1. A clean run.
  let s = await open();
  await s.p.fill('#bundle', text);
  check('a pasted bundle is recognized and counted', /6 answers from Topic 3\.1, Checkpoint 1/.test(await s.p.$eval('#bundle-info', e => e.textContent)));
  await s.p.click('#go'); await finished(s.p);
  let calls = await s.p.evaluate(() => window.__calls);
  check('each answer is read by itself', calls.length === 6 && calls.every(c => (c.input.match(/<<<A\d+-/g) || []).length === 1), calls.length + ' calls');
  check('with the instructions and the contract', calls.every(c => c.input.includes(E.INSTRUCTIONS) && c.input.includes(JSON.stringify(contract))));
  check('by the most careful reader unless the teacher chooses otherwise', calls.every(c => c.tier === 'complex'));
  let back = await readBack(s.p);
  check('the result reads back through Class Pulse\'s own checks, every answer', back.passed === 6 && back.partial === 0 && back.bundle === bundle.id, JSON.stringify({ passed: back.passed, partial: back.partial }));
  check('the page keeps nothing: no storage is written', await s.p.evaluate(() => { try { return localStorage.length === 0 && sessionStorage.length === 0; } catch (_) { return true; } }));
  await s.p.click('#clear');
  check('Clear empties the page', (await s.p.$eval('#bundle', t => t.value)) === '' && (await s.p.$eval('#result', t => t.value)) === '');
  check('a clean run raises no script error', s.errors.length === 0, s.errors.join(' | '));
  await s.ctx.close();

  // 2. A reading that fails the checks is asked for again, once.
  s = await open("window.__mode = 'retry';");
  await s.p.fill('#bundle', text); await s.p.click('#go'); await finished(s.p);
  calls = await s.p.evaluate(() => window.__calls);
  back = await readBack(s.p);
  check('a reading that fails the checks is asked for once more', calls.length === 12 && calls.filter(c => /did not pass an automatic check/.test(c.input)).length === 6, calls.length + ' calls');
  check('and the second reading is the one kept', back.passed === 6, JSON.stringify({ passed: back.passed, partial: back.partial }));
  await s.ctx.close();

  // 3. A reading that never passes is asked for twice and no more.
  s = await open("window.__mode = 'never:A03';");
  await s.p.fill('#bundle', text); await s.p.click('#go'); await finished(s.p);
  calls = await s.p.evaluate(() => window.__calls);
  back = await readBack(s.p);
  check('an answer whose reading never passes is tried twice, not forever', calls.length === 7, calls.length + ' calls');
  check('and goes back marked for a second look on that criterion only', back.passed === 5 && back.partial === 1 && /1/.test(await s.p.$eval('#t-part', e => e.textContent)), JSON.stringify({ passed: back.passed, partial: back.partial }));
  await s.ctx.close();

  // 4. A usage limit stops the run and keeps what was read.
  s = await open('window.__limitAt = 3;');
  await s.p.fill('#bundle', text); await s.p.click('#go'); await finished(s.p);
  back = await readBack(s.p);
  const told = await s.p.$eval('#trouble', e => e.hidden ? '' : e.textContent);
  check('a usage limit stops the reading and says what to do', /Wait a few minutes/.test(told) && /Continue reading/.test(await s.p.$eval('#go', b => b.textContent)), told);
  check('what was read before the limit is in the result', back.passed === 3, String(back.passed));
  const atStop = (await s.p.evaluate(() => window.__calls)).length;
  await s.p.waitForTimeout(300);
  check('the page does not keep asking by itself', (await s.p.evaluate(() => window.__calls)).length === atStop);
  await s.p.evaluate(() => { window.__limitAt = Infinity; });
  await s.p.click('#go'); await finished(s.p);
  back = await readBack(s.p);
  check('Continue reads only what is left', back.passed === 6 && new Set(back.keys).size === 6, String(back.passed));
  await s.ctx.close();

  // 5. Not a bundle, and no Claude.
  s = await open();
  await s.p.fill('#bundle', 'Here is my lesson plan for Tuesday.');
  check('anything that is not a bundle is refused, and Read stays off', /not a Class Pulse bundle/.test(await s.p.$eval('#bundle-info', e => e.textContent)) && await s.p.$eval('#go', b => b.disabled));
  await s.ctx.close();
  s = await open('window.__noClaude = true;');
  await s.p.fill('#bundle', text);
  check('outside Claude the page says so and cannot read', !(await s.p.$eval('#absent', e => e.hidden)) && await s.p.$eval('#go', b => b.disabled));
  await s.ctx.close();
}

(async () => {
  console.log('\x1b[1mClass Pulse Reader\x1b[0m');
  const built = build();
  check('the built Reader matches the engine and the handoff', fs.existsSync(OUT) && fs.readFileSync(OUT, 'utf8') === built);
  check('it is a page fragment the publisher can wrap', !/<!doctype|<html|<body/i.test(built) && /^<title>Class Pulse Reader<\/title>/.test(built));
  check('it loads nothing but Google Fonts and keeps no data store', !/<script[^>]+src=/.test(built) && !/claude\.use\('(db|artifact|room|files|mcp)'\)/.test(built));
  const browser = await chromium.launch({ executablePath: fs.existsSync(EXE) ? EXE : undefined });
  await suite(browser, built);

  console.log('\n\x1b[1mNegative controls\x1b[0m');
  const controls = [
    { name: 'answers are sent several at a time', from: 'const one = { id: j.item.batch, answers: [j.a] };', to: 'const one = { id: j.item.batch, answers: j.item.answers };', expect: /read by itself/ },
    { name: 'a failed reading is never asked for again', from: "const done = j => j.best && (j.best.status === 'passed' || j.tries >= 2 || j.final);", to: 'const done = j => !!j.best;', expect: /asked for once more/ },
    { name: 'a failed reading is asked for without end', from: "const done = j => j.best && (j.best.status === 'passed' || j.tries >= 2 || j.final);", to: "const done = j => j.best && (j.best.status === 'passed' || j.tries >= 9 || j.final);", expect: /tried twice, not forever/ },
    { name: 'a usage limit is ignored', from: "else if (STOPPERS[code]) { j.tries = Math.max(0, j.tries - 1); halt(STOPPERS[code]); }", to: 'else if (false) {}', expect: /usage limit stops|does not keep asking/ }
  ];
  for (const c of controls) {
    if (!built.includes(c.from)) { console.log(`  \x1b[31m✗\x1b[0m "${c.name}" no longer matches the Reader`); failures++; continue; }
    const before = failures; quiet = true; failed.length = 0;
    try { await suite(browser, built.replace(c.from, c.to)); } catch (e) { failed.push('crashed: ' + e.message); }
    quiet = false; failures = before;
    if (failed.some(l => c.expect.test(l))) console.log(`  \x1b[32m✓\x1b[0m "${c.name}" turns the checks red`);
    else { console.log(`  \x1b[31m✗\x1b[0m "${c.name}" went unnoticed`); failures++; }
  }
  await browser.close();
  console.log(failures ? `\n\x1b[31m${failures} failed\x1b[0m` : '\n\x1b[32mAll Class Pulse Reader checks passed.\x1b[0m');
  process.exit(failures ? 1 : 0);
})();
