#!/usr/bin/env node
'use strict';
// Exercise the real pop-outs, including both renderers, every topic, and the
// short autosave race exposed by Next -> Previous. No external services needed.
const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const http = require('http');
let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (_) { console.error('This test needs playwright-core'); process.exit(2); }
const ROOT = path.resolve(__dirname, '../..');
const EXE = process.env.PW_CHROME || undefined;
const sample = ['unit-4/lesson-4-4-maritime-empires-established.html', 'unit-4/lesson-4-8-continuity-and-change.html', 'unit-9/lesson-9-9-continuity-change-globalized-world.html', 'foundations/foundations-1-geography.html'];
const all = [];
for (const dir of ['foundations', ...Array.from({ length: 9 }, (_, i) => `unit-${i + 1}`)]) {
  for (const name of fs.readdirSync(path.join(ROOT, dir))) {
    if (/^(?:lesson-\d+-\d+-|foundations-\d+-).*\.html$/.test(name)) all.push(`${dir}/${name}`);
  }
}
const pages = process.argv.includes('--sample') ? sample : all;
let mutation = '';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.resolve(ROOT, rel);
  if (!file.startsWith(ROOT + path.sep) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
  let body = fs.readFileSync(file);
  if (mutation && /(?:behistorical-topic-renderer-v1|foundations-topic-renderer)\.js$/.test(rel)) {
    let text = body.toString('utf8');
    if (mutation === 'controls') text = text.replace('  updateModuleNav();', '  /* negative control: no navigation */');
    if (mutation === 'draft') text = text.replace(/    BHDraftStore\.set\((?:draftKey\(t\.id\)|`foundations-topic-\$\{t.id\}`), t.value \|\| ''\);/, '    /* negative control: discard pending draft */');
    if (mutation === 'reading') text = text.replace('  flushModuleReading();', '  /* negative control: discard pending reading answers */');
    assert.notEqual(text, body.toString('utf8'), 'negative control must alter its subject');
    body = Buffer.from(text);
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(body);
});
async function current(page, expected, first, last) {
  const actual = await page.evaluate(() => ({
    label: document.getElementById('pop-eyebrow').textContent,
    title: document.getElementById('pop-title').textContent,
    nav: document.querySelectorAll('#module-nav').length,
    prev: document.getElementById('module-prev')?.disabled,
    next: document.getElementById('module-next')?.disabled,
    stack: BHModalStack.length,
    visible: document.getElementById('pop-modal').classList.contains('show'),
    scroll: document.querySelector('#pop-modal .pop-panel').scrollTop
  }));
  assert.equal(actual.nav, 1, 'navigation controls must exist exactly once');
  assert.equal(actual.label, expected.label);
  assert.equal(actual.title, expected.title);
  assert.equal(actual.prev, first);
  assert.equal(actual.next, last);
  assert.equal(actual.stack, 1, 'module navigation must reuse the modal stack entry');
  assert.ok(actual.visible);
  assert.equal(actual.scroll, 0, 'each module starts at its top');
}
async function pendingDraft(page) {
  return page.evaluate(() => {
    const card = [...document.querySelectorAll('#module-grid .module-card')].find(c => /openModule\('map'\)/.test(c.getAttribute('onclick')));
    card.click();
    const t = document.querySelector('#pop-body textarea.response-area');
    if (!t) throw new Error('map must have a draft to exercise autosave');
    t.value = 'Geography shapes trade routes and access to resources.';
    t.dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('module-next').click();
    document.getElementById('module-prev').click();
    return document.getElementById(t.id).value;
  });
}
function saved(value) { assert.equal(value, 'Geography shapes trade routes and access to resources.', 'immediate navigation must preserve the newest draft'); }
async function pendingReading(page, origin, file) {
  await page.goto(`${origin}/${file}`, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    // Each run starts with a clean reading answer, including the negative run.
    for (const key of Object.keys(localStorage)) if (key.startsWith('behistorical-first10-')) localStorage.removeItem(key);
    openModule('first10');
  });
  await page.waitForFunction(() => {
    function find(doc) {
      // The textarea appears before the end-of-page capture script runs.
      // Its confidence row proves that script has initialized, not just parsed.
      if (doc.querySelector('#bh-conf-row-0')) return true;
      return [...doc.querySelectorAll('iframe')].some(f => { try { return f.contentDocument && find(f.contentDocument); } catch (_) { return false; } });
    }
    return find(document.getElementById('pop-body'));
  });
  return page.evaluate(() => {
    function find(doc) {
      const box = doc.querySelector('.q-textarea,.qta');
      if (box) return box;
      for (const f of doc.querySelectorAll('iframe')) { try { const t = f.contentDocument && find(f.contentDocument); if (t) return t; } catch (_) {} }
    }
    const t = find(document.getElementById('pop-body'));
    t.value = 'Trade connected coastal cities and brought new sources of wealth.';
    t.dispatchEvent(new Event('input', { bubbles: true }));
    moduleStep(1);
    return Object.keys(localStorage).filter(k => k.startsWith('behistorical-first10-')).some(k => (localStorage.getItem(k) || '').includes('Trade connected coastal cities'));
  });
}
async function layout(page) {
  const result = await page.evaluate(() => {
    const panel = document.querySelector('#pop-modal .pop-panel');
    const controls = ['module-prev', 'module-next'].map(id => {
      const el = document.getElementById(id), r = el.getBoundingClientRect();
      return { x: r.x, right: r.right, y: r.y, bottom: r.bottom, height: r.height, width: r.width, visible: getComputedStyle(el).display !== 'none' };
    });
    return { controls, width: innerWidth, height: innerHeight, overflow: panel.scrollWidth - panel.clientWidth };
  });
  assert.ok(result.overflow <= 2, 'module panel must not scroll horizontally');
  for (const r of result.controls) {
    assert.ok(r.visible && r.height >= 44 && r.width >= 44, 'arrows must have a visible touch target');
    assert.ok(r.x >= 0 && r.right <= result.width && r.y >= 0 && r.bottom <= result.height, 'arrows must stay in the viewport');
  }
  assert.ok(result.controls[0].right <= result.controls[1].x, 'arrows must not overlap');
}
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ ...(EXE ? { executablePath: EXE } : {}), args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.route('**/*', route => route.request().url().startsWith(origin + '/') ? route.continue() : route.abort());
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    // Prove the assertions reject missing controls and the autosave regression
    // in each actual renderer before accepting the positive run.
    for (const file of [sample[0], sample[3]]) {
      mutation = 'controls';
      await page.goto(`${origin}/${file}`, { waitUntil: 'domcontentloaded' });
      await page.locator('#module-grid .module-card').first().click();
      await assert.rejects(() => current(page, { label: 'Module 01' }, true, false), /navigation controls/);
      mutation = 'draft';
      await page.goto(`${origin}/${file}`, { waitUntil: 'domcontentloaded' });
      assert.throws(() => saved(null), /newest draft/);
      assert.notEqual(await pendingDraft(page), 'Geography shapes trade routes and access to resources.', 'draft negative control must expose data loss');
      mutation = 'reading';
      assert.equal(await pendingReading(page, origin, file), false, 'reading negative control must expose data loss');
    }
    mutation = '';
    for (const file of [sample[0], sample[3]]) {
      assert.equal(await pendingReading(page, origin, file), true, `${file}: immediate navigation must preserve embedded reading answers`);
    }
    for (const file of pages) {
      await page.goto(`${origin}/${file}`, { waitUntil: 'domcontentloaded' });
      const sequence = await page.locator('#module-grid .module-card').evaluateAll(cards => cards.filter(c => /openModule\('/.test(c.getAttribute('onclick'))).map(c => ({ label: c.querySelector('.module-label').textContent, title: c.querySelector('h3').textContent })));
      assert.ok(sequence.length >= 8, `${file}: expected the full pop-out sequence`);
      const launcher = page.locator('#module-grid .module-card').first();
      await launcher.focus();
      await page.keyboard.press('Enter');
      for (let i = 0; i < sequence.length; i++) {
        await current(page, sequence[i], i === 0, i === sequence.length - 1);
        if (i < sequence.length - 1) await page.locator('#module-next').click();
      }
      for (let i = sequence.length - 2; i >= 0; i--) {
        await page.locator('#module-prev').click();
        await current(page, sequence[i], i === 0, false);
      }
      saved(await pendingDraft(page));
      await page.keyboard.press('Escape');
      assert.ok(await launcher.evaluate(el => document.activeElement === el), 'Close must return focus to the original launcher');
      assert.equal(await page.evaluate(() => document.body.style.overflow), '', 'Close must release scroll lock');
      console.log(`PASS ${file}`);
    }
    for (const file of [sample[0], sample[3]]) {
      for (const width of [1440, 768, 375, 320]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`${origin}/${file}`, { waitUntil: 'domcontentloaded' });
        await page.locator('#module-grid .module-card').first().click();
        await page.waitForTimeout(10);
        await layout(page);
        await page.locator('#pop-modal .pop-panel').evaluate(el => { el.scrollTop = el.scrollHeight; });
        await layout(page);
        // Both arrows participate in the existing keyboard focus trap.
        await page.locator('#module-next').focus();
        await page.keyboard.press('Enter');
        await page.waitForTimeout(10);
        assert.ok(await page.evaluate(() => document.getElementById('pop-modal').contains(document.activeElement)));
        await page.keyboard.press('Shift+Tab');
        assert.ok(await page.evaluate(() => document.getElementById('pop-modal').contains(document.activeElement)));
      }
    }
    assert.deepEqual(errors, [], 'module navigation must not throw page errors');
    console.log(`PASS module navigation: ${pages.length} topics, both negative controls, draft persistence, focus, endpoints, sticky controls and responsive layout`);
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; }).finally(() => server.close());
