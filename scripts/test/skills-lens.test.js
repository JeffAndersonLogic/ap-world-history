#!/usr/bin/env node
/**
 * skills-lens.test.js
 *
 * Loads teacher/skills-lens.html in Chromium, feeds it real parser output, and
 * renders all ten panels, asserting each produces content and throws nothing.
 *
 * The Lens replaced a dashboard that showed frozen numbers from a dead
 * spreadsheet for weeks without anyone noticing, so "it loads" is not the bar.
 * Every panel has to actually draw from the CSV it was handed.
 *
 * Panels render one at a time into their own container, so clicking the tab bar
 * is not enough to prove the others work: the body text is identical whichever
 * tab is active. This drives the panel switch directly instead.
 *
 * Fixtures come from scripts/test/fixtures/ if present, otherwise from a
 * scratch run of scripts/parse-canvas-submissions.js. Point SUBS at any folder
 * holding a responses.csv and an exceptions.csv.
 *
 *   npm i playwright-core
 *   node scripts/test/skills-lens.test.js
 */

'use strict';

const http=require('http'), fs=require('fs'), path=require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}
const ROOT=path.resolve(__dirname,'..','..');
const SUBS = process.env.SUBS || path.join(__dirname, 'fixtures');
if (!fs.existsSync(path.join(SUBS, 'responses.csv'))) {
  console.error(`No responses.csv in ${SUBS}.\nRun scripts/parse-canvas-submissions.js on a submissions folder, then:\n  SUBS=<that folder> node scripts/test/skills-lens.test.js`);
  process.exit(2);
}
const T={'.html':'text/html','.js':'text/javascript','.css':'text/css','.csv':'text/csv'};
const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();
const srv=http.createServer((q,r)=>{const rel=decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/,'');const f=path.join(ROOT,rel);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);r.end();return;}
  r.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});r.end(fs.readFileSync(f));});
(async()=>{
  await new Promise(r=>srv.listen(0,r)); const port=srv.address().port;
  const b=await chromium.launch({executablePath:EXE,args:['--no-sandbox']});
  const pg=await b.newPage(); const errs=[]; pg.on('pageerror',e=>errs.push(e.message));
  await pg.goto(`http://127.0.0.1:${port}/teacher/skills-lens.html`,{waitUntil:'domcontentloaded'});
  await (await pg.$('input[type="file"]')).setInputFiles([path.join(SUBS,'responses.csv'), path.join(SUBS,'exceptions.csv')]);
  await pg.waitForTimeout(900);

  const panels=['coverage','grid','module','skill','terms','confidence','read','target','export','trend'];
  let bad=0;
  for (const p of panels) {
    const before = errs.length;
    await pg.evaluate(name => { S.active = name; renderActive(); }, p);
    await pg.waitForTimeout(250);
    const info = await pg.evaluate(name => {
      const el = document.getElementById('panel-' + name);
      return { chars: el ? el.innerText.trim().length : -1,
               head: el ? (el.innerText.trim().split('\n')[0]||'').slice(0,54) : 'MISSING',
               svg: el ? el.querySelectorAll('svg').length : 0 };
    }, p);
    const err = errs.length > before;
    const ok = info.chars > 120 && !err;
    if (!ok) bad++;
    console.log(`  ${ok?'PASS':'FAIL'}  ${p.padEnd(11)} ${String(info.chars).padStart(6)} chars, ${info.svg} charts  "${info.head}"${err?'  ERR '+errs[errs.length-1].slice(0,50):''}`);
  }
  console.log(`\n  ${panels.length-bad}/${panels.length} panels render, ${errs.length} page errors`);

  /* Panel 10 in detail. "It rendered 400 characters" is the bar the loop above
     sets, and it is not enough for a chart: a trend panel that drew its frame,
     its lede and an empty plot would clear it. These assertions are about the
     numbers actually reaching the screen, and about the two claims the panel is
     forbidden from making. */
  console.log('\n  Panel 10, Over time, in detail\n');
  let extraBad = 0;
  const ok = (name, pass, detail) => {
    if (!pass) extraBad++;
    console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
  };

  // Clicked rather than driven through renderActive, because these assertions
  // touch real controls and the loop above leaves every panel hidden.
  await pg.click('#tab-trend');
  await pg.waitForTimeout(250);

  const t = await pg.evaluate(() => {
    const el = document.getElementById('panel-trend');
    const opts = (id) => Array.from(document.querySelectorAll('#' + id + ' option')).map(o => o.value);
    const rows = Array.from(el.querySelectorAll('table.data tbody tr')).map(tr =>
      Array.from(tr.children).map(td => td.textContent.trim()));
    return {
      text: el.innerText,
      chars: el.innerText.trim().length,
      svgs: el.querySelectorAll('svg').length,
      points: el.querySelectorAll('circle.pt').length,
      segments: el.querySelectorAll('path.seg').length,
      hits: el.querySelectorAll('rect.bar-hit[tabindex="0"]').length,
      ariaOnSvg: (el.querySelector('svg') || {}).getAttribute ? el.querySelector('svg').getAttribute('aria-label') : '',
      axisText: Array.from(el.querySelectorAll('svg text')).map(n => n.textContent),
      skills: opts('t-skill'),
      measures: opts('t-measure'),
      rows: rows,
      title: (el.querySelector('.chart-title') || {}).textContent || ''
    };
  });

  ok('the panel renders real bulk, not a frame', t.chars > 900, t.chars + ' characters');
  ok('an AP skill selector is offered, populated from the skills map',
    t.skills.length > 0 && t.skills.includes('Causation'), t.skills.join(' | ') || 'none');
  ok('the four observable measures are the measures offered',
    t.measures.join(',') === 'completion,words,terms,confidence', t.measures.join(','));
  ok('there is exactly one chart, so it is one question and one series',
    t.svgs === 1, t.svgs + ' svg');
  ok('at least one point is actually plotted', t.points >= 1, t.points + ' points');
  ok('every point has a focusable hit band, so the values are keyboard reachable',
    t.hits >= t.points && t.hits > 0, t.hits + ' hit bands for ' + t.points + ' points');
  ok('the chart carries an accessible label that points at the table',
    /table below the chart/i.test(t.ariaOnSvg || ''), (t.ariaOnSvg || '').slice(0, 60));
  ok('sample size is printed on the axis, not hidden in a tooltip',
    t.axisText.some(x => /^n=\d+/.test(x)), t.axisText.filter(x => /^n=/.test(x)).join(' '));
  ok('the topic sits on the axis in curriculum form',
    t.axisText.includes('1.1'), t.axisText.slice(0, 12).join(' '));
  ok('the table under the chart carries the numbers',
    t.rows.length >= 1 && t.rows[0][0] === '1.1' && /\d/.test(t.rows[0][2]),
    t.rows.length ? t.rows[0].slice(0, 4).join(' | ') : 'no rows');
  ok('the panel says in words that this is not mastery',
    /does not score mastery/i.test(t.text));
  ok('and it claims no score, proficiency or growth figure',
    !/(skill growth score|proficiency|historical thinking score|mastery of the selected ap skill is)/i.test(
      t.text.replace(/does not score mastery[^.]*\./ig, '')),
    'scanned the rendered text');
  ok('the chart title names the measure rather than the construct',
    /Completion rate/.test(t.title) && !/mastery|proficien/i.test(t.title), t.title);

  // Switching the measure has to change what is plotted, not just the heading.
  const switched = [];
  for (const m of ['words', 'terms', 'confidence']) {
    await pg.selectOption('#t-measure', m);
    await pg.waitForTimeout(150);
    switched.push(await pg.evaluate(() => ({
      title: (document.querySelector('#panel-trend .chart-title') || {}).textContent || '',
      chars: document.getElementById('panel-trend').innerText.trim().length,
      cells: Array.from(document.querySelectorAll('#panel-trend table.data tbody tr td')).length
    })));
  }
  ok('choosing Median response length repaints the chart for that measure',
    /Median response length/.test(switched[0].title) && switched[0].cells > 0, switched[0].title);
  ok('Median evidence-term hits repaints too, and says so honestly when it cannot compute',
    /Median evidence-term hits/.test(switched[1].title) && switched[1].chars > 600, switched[1].title);
  ok('Median student confidence repaints',
    /Median student confidence/.test(switched[2].title), switched[2].title);

  // The student scope is the filter bar's, and this is the assertion that keeps
  // it that way: no second student control may appear inside the panel.
  ok('Panel 10 adds no second student selector',
    await pg.evaluate(() => document.querySelectorAll('#panel-trend input[type="search"], #panel-trend select').length === 2),
    'only the skill and measure selects');

  await pg.fill('#f-student', 'anderson');
  await pg.waitForTimeout(400);
  const scoped = await pg.evaluate(() => {
    const el = document.getElementById('panel-trend');
    return { text: el.innerText, n: Array.from(el.querySelectorAll('svg text')).filter(x => /^n=/.test(x.textContent)).map(x => x.textContent) };
  });
  ok('the filter bar student search scopes Panel 10 to that student',
    /Scope:\s*andersonjeff/i.test(scoped.text.replace(/\s+/g, ' ')), scoped.text.split('\n').find(l => /^Scope/.test(l)) || '');
  await pg.fill('#f-student', '');
  await pg.waitForTimeout(400);
  ok('clearing the search returns the class view',
    await pg.evaluate(() => /Scope:\s*7 students/.test(document.getElementById('panel-trend').innerText.replace(/\s+/g, ' '))));

  console.log(`\n  ${panels.length-bad}/${panels.length} panels render, ${extraBad} Over time assertion(s) failed, ${errs.length} page errors`);
  await b.close(); srv.close();
  process.exit(bad||extraBad||errs.length?1:0);
})().catch(e=>{console.error('THREW:',e.message);process.exit(1);});
