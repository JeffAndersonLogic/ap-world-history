#!/usr/bin/env node
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const EXE = process.env.PW_CHROME || (() => {
  try {
    const p = chromium.executablePath();
    if (p && fs.existsSync(p)) return p;
  } catch (_) {}
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const builds = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d))
    .sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]));
  for (const build of builds) {
    for (const layout of ['chrome-linux64', 'chrome-linux']) {
      const exe = path.join(base, build, layout, 'chrome');
      if (fs.existsSync(exe)) return exe;
    }
  }
  return 'chromium';
})();

const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif'
};

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('nope'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

const results = [];
function check(name, pass, detail) {
  results.push({ name, pass: !!pass });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`);
}

function readDeck(rel) {
  const box = { window: {} };
  vm.createContext(box);
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), box, { filename: rel });
  return box.window.BEHISTORICAL_STUDENT_DECK;
}

async function localPage(browser, origin, pathname, viewport = { width: 1440, height: 950 }) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route('**/*', route => route.request().url().startsWith(origin.origin) ? route.continue() : route.abort());
  await page.goto(`${origin}${pathname}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#stage .slide');
  return { page, errors };
}

async function teachingData(page) {
  return page.evaluate(() => ({
    titles: (window.BEHISTORICAL_TEACHING?.slides || []).map(s => s.title || ''),
    slides: window.BEHISTORICAL_TEACHING?.slides || [],
    flow: window.BEHISTORICAL_TEACHING?.flow || []
  }));
}

async function goToTitle(page, needle) {
  const index = await page.evaluate(n => {
    const slides = window.BEHISTORICAL_TEACHING?.slides || [];
    return slides.findIndex(s => String(s.title || '').toLowerCase().includes(String(n).toLowerCase()));
  }, needle);
  if (index < 0) throw new Error(`Could not find slide containing title: ${needle}`);
  await page.locator(`#rail button[data-i="${index}"]`).click();
  await page.waitForTimeout(60);
  return index;
}

async function verifyLocalVisual(page, titleNeedle, srcNeedle, label) {
  await goToTitle(page, titleNeedle);
  const img = page.locator(`#stage .slide img[src*="${srcNeedle}"]`).first();
  const count = await img.count();
  check(`${label} renders its curated local visual`, count === 1, `matches=${count}`);
  if (count) {
    const state = await img.evaluate(el => ({ complete: el.complete, w: el.naturalWidth, h: el.naturalHeight, fit: getComputedStyle(el).objectFit }));
    check(`${label} visual decodes`, state.complete && state.w > 0 && state.h > 0, `${state.w}x${state.h}`);
    check(`${label} visual does not crop`, state.fit === 'contain', `object-fit=${state.fit}`);
  }
}

(async () => {
  const student21 = readDeck('assets/data/presentations/topic-2-1-student.js');
  const student22 = readDeck('assets/data/presentations/topic-2-2-student.js');

  console.log('\n  Generated student-deck contracts');
  check('2.1 student deck remains The Silk Roads', student21?.meta?.title === 'The Silk Roads', student21?.meta?.title);
  check('2.1 teacher preflight does not leak into student projection', !(student21?.slides || []).some(s => /teacher preflight/i.test(`${s.eyebrow || ''} ${s.title || ''}`)));
  check('2.1 student deck preserves the rebuilt economic spine', (student21?.slides || []).some(s => /demand \+ systems/i.test(s.title || '')) && (student21?.slides || []).some(s => /trade networks create powerful nodes/i.test(s.title || '')));
  check('2.2 student deck remains The Mongol Empire', student22?.meta?.title === 'The Mongol Empire', student22?.meta?.title);
  check('2.2 teacher preflight does not leak into student projection', !(student22?.slides || []).some(s => /teacher preflight/i.test(`${s.eyebrow || ''} ${s.title || ''}`)));
  const bigRocksStudent = (student22?.slides || []).find(s => /three big rocks/i.test(s.title || ''));
  check('2.2 student deck exposes exactly the three Big Rocks',
    Array.isArray(bigRocksStudent?.cards) &&
    bigRocksStudent.cards.length === 3 &&
    /STATE CHANGE/i.test(JSON.stringify(bigRocksStudent.cards)) &&
    /CONNECTION/i.test(JSON.stringify(bigRocksStudent.cards)) &&
    /TRANSFER/i.test(JSON.stringify(bigRocksStudent.cards)) &&
    !/Topic 2\.2/i.test(bigRocksStudent?.subtitle || ''));
  const student22Text = JSON.stringify(student22?.slides || []);
  check('2.2 student deck is the lean 15-slide sequence', (student22?.slides || []).length === 15, `slides=${(student22?.slides || []).length}`);
  check('2.2 student deck keeps all three KC-3.2.II.A.ii examples without separate medicine/math chain slides',
    /Greco-Islamic medical knowledge/i.test(student22Text) &&
    /Numbering systems/i.test(student22Text) &&
    /The Mongols borrow a writing system/i.test(student22Text) &&
    !/Medical knowledge moves west/i.test(student22Text) &&
    !/Number systems move across cultures/i.test(student22Text));
  check('2.2 student deck does not expose teacher notes', !JSON.stringify(student22 || {}).includes('listenFor') && !JSON.stringify(student22 || {}).includes('avoid'));

  await new Promise(resolve => server.listen(0, resolve));
  const port = server.address().port;
  const origin = new URL(`http://127.0.0.1:${port}/`);
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });

  {
    const { page, errors } = await localPage(browser, origin, 'teacher/topic-2-2-os.html');
    console.log('\n  Topic 2.2 teacher Teaching OS');
    const data = await teachingData(page);
    check('2.2 renders the lean 15-slide CED sequence', data.slides.length === 15, `slides=${data.slides.length}`);
    check('2.2 run of show matches the lean narrative', data.flow.length === 8, `flow=${data.flow.length}`);
    for (const title of [
      'The Mongol Empire',
      'Three Big Rocks',
      'Who were the Mongols?',
      'Steppe life shaped Mongol strengths.',
      'Read for three CED dimensions.',
      'Chinggis Khan turns steppe warriors into a system.',
      'Why Mongol conquest worked.',
      'Conquest creates a new problem.',
      'One empire becomes four Mongol states.',
      'Information moves at horse speed.',
      'The routes were older. The political conditions changed.',
      'Connection moves knowledge.',
      'The Mongols borrow a writing system.',
      'State Change -> Connection -> Transfer -> Significance',
      'Mongol significance was bigger than conquest.'
    ]) check(`2.2 includes “${title}”`, data.titles.some(t => t.includes(title)));

    check('2.2 removes the repetitive medicine/math/mechanism chain slides',
      !data.titles.some(t => /Medical knowledge moves west/i.test(t)) &&
      !data.titles.some(t => /Number systems move across cultures/i.test(t)) &&
      !data.titles.some(t => /Contact -> Borrowing -> Adaptation -> Wider Reach/i.test(t)) &&
      !data.titles.some(t => /Answer Topic 2\.2 in three moves/i.test(t)));

    const transferText = JSON.stringify(data.slides.filter(s => s.phase === 'transfer'));
    check('2.2 explicitly teaches Greco-Islamic medical transfer', /Greco-Islamic medical knowledge/i.test(transferText) && /western Europe/i.test(transferText));
    check('2.2 explicitly teaches numbering-system transfer', /Numbering systems/i.test(transferText) && /Europe/i.test(transferText));
    check('2.2 explicitly teaches adoption of Uyghur script', /Uyghur script/i.test(transferText) && /adopt/i.test(transferText));

    await goToTitle(page, 'Three Big Rocks');
    const bigRocksText = await page.locator('#stage').innerText();
    check('2.2 slide 2 visibly lists the three Big Rocks',
      await page.locator('#stage .grid-card').count() === 3 &&
      /STATE CHANGE/i.test(bigRocksText) &&
      /CONNECTION/i.test(bigRocksText) &&
      /TRANSFER/i.test(bigRocksText) &&
      !/Every example in Topic 2\.2/i.test(bigRocksText));

    await verifyLocalVisual(page, 'The Mongol Empire', 'Steppes%20of%20Asia', '2.2 opening');
    await verifyLocalVisual(page, 'Who were the Mongols', 'Who%20were%20the%20mongols', '2.2 Mongol context');
    await verifyLocalVisual(page, 'Steppe life shaped Mongol strengths', 'Mongol%20Camp%20Life', '2.2 steppe context');
    await verifyLocalVisual(page, 'One empire becomes four Mongol states', 'Map%20of%20the%20Khanates', '2.2 khanates map');
    await verifyLocalVisual(page, 'Why Mongol conquest worked', 'Cinematic%20Mongol%20Archers', '2.2 conquest synthesis');
    await verifyLocalVisual(page, 'The Mongols borrow a writing system', 'Cinematic%20Mongol%20city%20gate', '2.2 Uyghur transfer');
    await verifyLocalVisual(page, 'Information moves at horse speed', 'Mongol%20Yam%20Relay', '2.2 Yam');
    await verifyLocalVisual(page, 'Connection moves knowledge', 'Knowledge%20Shared', '2.2 knowledge transfer');

    for (const title of ['Steppe life shaped Mongol strengths', 'Information moves at horse speed']) {
      await goToTitle(page, title);
      const geometry = await page.locator('#stage .hero-slide').evaluate(el => {
        const slide = el.getBoundingClientRect();
        const copy = el.querySelector('.copy').getBoundingClientRect();
        return { left: copy.left - slide.left, right: slide.right - copy.right, bottom: slide.bottom - copy.bottom };
      });
      check(`2.2 “${title}” uses the full-width bottom caption treatment`, geometry.left < 2 && geometry.right < 2 && geometry.bottom < 2, JSON.stringify(geometry));
    }

    await page.locator('#briefingBtn').click();
    check('2.2 briefing drawer opens', await page.locator('#drawer').evaluate(el => el.classList.contains('open')));
    await page.locator('#closeBriefing').click();
    check('2.2 teacher surface has no JavaScript errors', errors.length === 0, errors.join('; ') || 'none');
    await page.close();
  }

  {
    const { page, errors } = await localPage(browser, origin, 'teacher/topic-2-1-story-os.html');
    console.log('\n  Topic 2.1 teacher Teaching OS');
    const data = await teachingData(page);
    check('2.1 keeps teacher preflight in teacher mode', data.titles.some(t => /Do not teach the road. Teach the system./i.test(t)));
    check('2.1 keeps the whole-lesson causal chain', data.titles.some(t => /Demand \+ Systems -> Trade Growth/i.test(t)));
    check('2.1 keeps demand as a Big Rock', data.titles.some(t => /Luxury goods made distance worth it/i.test(t)));
    check('2.1 keeps commercial systems as a Big Rock', data.titles.some(t => /Merchants also needed financial systems/i.test(t)));
    check('2.1 keeps cities as the major effect', data.titles.some(t => /Trade networks create powerful nodes/i.test(t)));
    const causal = data.slides.find(s => /Demand alone is not enough/i.test(s.title || ''));
    check('2.1 teacher sequence includes political stability as a supporting condition', /political stability/i.test(JSON.stringify(causal || {})));

    await verifyLocalVisual(page, 'The Silk Roads', 'Silk%20Road%20Map%202', '2.1 launch');
    await verifyLocalVisual(page, 'Luxury goods made distance worth it', 'Porcelain%20silk%20luxury%20goods', '2.1 luxury demand');
    await verifyLocalVisual(page, 'Caravanserai made distance manageable', 'Caravanserai%20Reconstruction', '2.1 caravanserai');
    await verifyLocalVisual(page, 'Trade networks create powerful nodes', 'Samarkand', '2.1 Samarkand');
    check('2.1 teacher surface has no JavaScript errors', errors.length === 0, errors.join('; ') || 'none');
    await page.close();
  }

  for (const [label, pathname] of [['2.1', 'teacher/topic-2-1-story-os.html?mode=project'], ['2.2', 'teacher/topic-2-2-os.html?mode=project']]) {
    const { page, errors } = await localPage(browser, origin, pathname, { width: 1920, height: 1080 });
    console.log(`\n  Topic ${label} projection contract`);
    const appbarHidden = await page.locator('.appbar').evaluate(el => getComputedStyle(el).display === 'none');
    const intelHidden = await page.locator('.intel').evaluate(el => getComputedStyle(el).display === 'none');
    check(`${label} projection hides teacher chrome`, appbarHidden && intelHidden);
    const box = await page.locator('#stage').boundingBox();
    check(`${label} projection fills 1920x1080`, !!box && Math.abs(box.width - 1920) < 2 && Math.abs(box.height - 1080) < 2, box ? `${box.width}x${box.height}` : 'no box');
    check(`${label} projection has no JavaScript errors`, errors.length === 0, errors.join('; ') || 'none');
    await page.close();
  }

  await browser.close();
  server.close();

  const failed = results.filter(r => !r.pass);
  console.log(`\n  ${failed.length ? 'FAIL' : 'PASS'}  ${failed.length ? `${failed.length} Topic 2 Teaching OS contract(s) failed` : 'Topic 2.1 and 2.2 Teaching OS contracts passed'}`);
  if (failed.length) process.exit(1);
})().catch(err => {
  console.error(err);
  try { server.close(); } catch (_) {}
  process.exit(1);
});
