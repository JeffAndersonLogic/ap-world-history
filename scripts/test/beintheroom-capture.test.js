#!/usr/bin/env node
/**
 * beintheroom-capture.test.js
 *
 * Drives a real hand-authored BeInTheRoom scenario in Chromium, types an AP
 * reflection, reopens the scenario the way a student does, and asserts the
 * reflection is still there, still in storage, and still collected by the real
 * lesson page's Gather All My Work panel.
 *
 * WHY THIS NEEDS A BROWSER
 *
 * This is the failure a teacher reported on 2026-09-11: on Topic 1.6 a
 * student's BeInTheRoom work was missing from the Canvas paste while every
 * other module was present. Each of the 23 hand-authored v1 scenarios carried
 * its own copy of the capture wiring, and that copy wrote the reflection box's
 * value to storage at page load. A v1 scenario only saves its own draft when a
 * student clicks Save Draft, so on a second visit the box was empty and the
 * load-time write erased the real answer.
 *
 * Nothing offline could see it. The wiring snippet was present, byte-identical
 * across all 23 files, and every structural check was green: the bug was a page
 * clearing a storage key on load, which only a browser knows. validate.js now
 * holds the offline half, that each scenario calls the shared bridge's wire()
 * and carries none of the old snippet. This is the half that proves the
 * behaviour: work survives a reopen and reaches the lesson page.
 *
 * Topic 1.6 in depth, because that is the reported case, then every other
 * linked hand-authored scenario for the reopen itself, read from disk rather
 * than a typed list so a scenario added later is covered by existing.
 *
 *   npm i playwright-core        # once, not committed
 *   node scripts/test/beintheroom-capture.test.js
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
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png',
  '.gif': 'image/gif', '.json': 'application/json' };

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('nope'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

let failures = 0;
function check(label, condition, detail) {
  if (condition) { console.log(`  \x1b[32m✓\x1b[0m ${label}`); return; }
  failures++;
  console.log(`  \x1b[31m✗\x1b[0m ${label}${detail ? `\n      ${detail}` : ''}`);
}

// The same map validate.js and the sweep build: scenario file -> topic key,
// read from the lesson data files rather than typed here, so this covers the
// scenarios the course actually links.
function linkedScenarios() {
  const dataDir = path.join(ROOT, 'assets', 'data');
  const out = [];
  for (const f of fs.readdirSync(dataDir)) {
    const nameMatch = f.match(/^lesson-(\d+)-(\d+)-/);
    if (!nameMatch || f.includes('renderer-config')) continue;
    const [, unit, topic] = nameMatch;
    const rendererPath = path.join(dataDir, `lesson-${unit}-${topic}-renderer-config.js`);
    const combined = fs.readFileSync(path.join(dataDir, f), 'utf8')
      + (fs.existsSync(rendererPath) ? fs.readFileSync(rendererPath, 'utf8') : '');
    const urls = [...combined.matchAll(/beInTheRoom\s*[:=]\s*\{\s*url:\s*(['"])(.*?)\1/g)]
      .map(m => m[2]).filter(Boolean);
    if (!urls.length) continue;
    const target = path.resolve(ROOT, `unit-${unit}`, urls[urls.length - 1]);
    if (!fs.existsSync(target)) continue;
    const src = fs.readFileSync(target, 'utf8');
    // Only the hand-authored scenarios that use the shared bridge's wire().
    // v2 and the unit-6/unit-9 generated pages keep their own state and are
    // covered by their own generators.
    if (!src.includes('BHBeInTheRoomCapture.wire(')) continue;
    const url = '/' + path.relative(ROOT, target).split(path.sep).join('/');
    if (out.some(item => item.url === url)) continue;  // an add-on data file can name the same scenario
    out.push({ file: target, url: url, topicKey: `${unit}.${topic}` });
  }
  return out.sort((a, b) => a.url.localeCompare(b.url));
}

// Each scenario's own reflection textarea ids, in the order the page has them.
function reflectionIds(src) {
  const shapes = [
    ['reflection-response'],
    ['reflection1-response', 'reflection2-response', 'reflection3-response'],
    ['reflect1', 'reflect2', 'reflect3']
  ];
  return shapes.find(shape => shape.every(id => src.includes(`id="${id}"`))) || null;
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ executablePath: EXE });

  const scenarios = linkedScenarios();

  // Every scenario page links the brand webfonts and hero imagery off a CDN.
  // What is under test is storage, not typography, so nothing leaves the
  // fixture server: a test that waits on a third party is a test that hangs on
  // the day the third party is slow.
  async function newRoom() {
    const ctx = await browser.newContext();
    await ctx.route('**', route =>
      route.request().url().startsWith(origin) ? route.continue() : route.abort());
    return ctx;
  }

  // ── Topic 1.6, the reported case, end to end ───────────────────────────────
  console.log('\nTopic 1.6, a student who reopens the scenario');
  {
    const ctx = await newRoom();
    const room = await ctx.newPage();
    const reflection = 'Stepping out of character, the Black Death made serf labor scarce, so lords had to bargain where they used to command.';

    await room.goto(origin + '/beintheroom/unit-1/feudal-manor.html');
    await room.fill('#reflection-response', reflection);
    await room.waitForTimeout(120);

    const afterTyping = await room.evaluate(() => localStorage.getItem('behistorical-beintheroom-1.6'));
    check('typing the reflection writes it to the topic-keyed record',
      !!afterTyping && JSON.parse(afterTyping).a === reflection, `got ${afterTyping}`);

    // The student closes the tab and comes back, without ever clicking Save
    // Draft. This is the step that used to erase the answer.
    await room.reload();
    await room.waitForTimeout(120);

    const afterReopen = await room.evaluate(() => localStorage.getItem('behistorical-beintheroom-1.6'));
    check('reopening the scenario keeps the stored reflection',
      !!afterReopen && JSON.parse(afterReopen).a === reflection, `got ${afterReopen}`);
    check('reopening the scenario puts the reflection back in the box',
      (await room.inputValue('#reflection-response')) === reflection);

    // A real edit still moves the record, including one that empties it.
    await room.fill('#reflection-response', reflection + ' Wage labor spread as a result.');
    await room.waitForTimeout(120);
    check('editing the reflection updates the record',
      JSON.parse(await room.evaluate(() => localStorage.getItem('behistorical-beintheroom-1.6'))).a.endsWith('Wage labor spread as a result.'));

    await room.fill('#reflection-response', reflection);
    await room.waitForTimeout(120);

    const lesson = await ctx.newPage();
    await lesson.goto(origin + '/unit-1/lesson-1-6-europe.html');
    const gathered = await lesson.evaluate(() => collectLessonWork()
      .map(item => ({ id: item.id, label: item.label, text: item.text })));
    const beInTheRoom = gathered.find(item => item.id === 'beintheroom-response');
    check('Gather All My Work collects the BeInTheRoom reflection after a reopen',
      !!beInTheRoom && beInTheRoom.text === reflection, `collected: ${gathered.map(g => g.id).join(', ') || 'nothing'}`);
    check('it is labelled as Module 09 in the Canvas paste',
      !!beInTheRoom && /Module 09/.test(beInTheRoom.label), beInTheRoom && beInTheRoom.label);

    await ctx.close();
  }

  // ── Every other linked hand-authored scenario survives a reopen ────────────
  console.log(`\nThe reopen, across all ${scenarios.length} linked hand-authored scenarios`);
  for (const scenario of scenarios) {
    const ids = reflectionIds(fs.readFileSync(scenario.file, 'utf8'));
    const rel = path.relative(ROOT, scenario.file);
    if (!ids) { check(`${rel} has a known reflection shape`, false); continue; }

    const ctx = await newRoom();
    const room = await ctx.newPage();
    await room.goto(origin + scenario.url);

    // Every box, so a multi-box scenario proves each one comes back where the
    // student left it rather than merged into the first.
    //
    // Typed through a dispatched input event rather than page.fill(), because
    // some scenarios keep their reflection behind a step reveal and fill()
    // waits for a visible element. What is under test is the capture contract,
    // which is that same input event, not each page's own stepping UI.
    const written = ids.map((id, i) => `Reflection part ${i + 1} for topic ${scenario.topicKey}.`);
    await room.evaluate(pairs => {
      pairs.forEach(([id, value]) => {
        const box = document.getElementById(id);
        if (!box) return;
        box.value = value;
        box.dispatchEvent(new Event('input', { bubbles: true }));
      });
    }, ids.map((id, i) => [id, written[i]]));
    await room.waitForTimeout(80);

    await room.reload();
    await room.waitForTimeout(120);

    const back = await room.evaluate(list => list.map(id => {
      const box = document.getElementById(id);
      return box ? box.value : null;
    }), ids);
    const stored = await room.evaluate(key => localStorage.getItem(key), 'behistorical-beintheroom-' + scenario.topicKey);
    const answer = stored ? JSON.parse(stored).a : '';

    check(`${rel} (topic ${scenario.topicKey}) keeps every box through a reopen`,
      back.join('|') === written.join('|'), `got ${JSON.stringify(back)}`);
    check(`${rel} still holds the reflection the lesson page reads`,
      written.every(part => answer.includes(part)), `stored: ${answer}`);

    await ctx.close();
  }

  await browser.close();
  server.close();

  console.log('');
  if (failures) { console.error(`\x1b[31m${failures} check(s) failed.\x1b[0m`); process.exit(1); }
  console.log('\x1b[32mBeInTheRoom capture survives a reopen and reaches Gather All My Work.\x1b[0m');
})().catch(error => { console.error(error); server.close(); process.exit(1); });
