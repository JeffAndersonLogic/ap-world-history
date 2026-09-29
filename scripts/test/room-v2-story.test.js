#!/usr/bin/env node
/**
 * room-v2-story.test.js
 *
 * Drives the v2 BeInTheRoom renderer's story mode in Chromium on Topic 2.6,
 * The Plague Ships, and then drives one ordinary v2 scenario, The Munich
 * Table, to prove the path the other v2 scenarios take did not move.
 *
 * WHY THIS NEEDS A BROWSER
 *
 * Story mode is a sequence: a choice is tentative until it is locked, its costs
 * appear only after the lock, the next decision appears only after that, and
 * the historical record opens only after the student has argued a case. Every
 * one of those is a property of the page after a click, which nothing offline
 * can see. So is the capture rule that matters most: a stored reflection must
 * never be overwritten by an empty one because a student clicked a role card.
 *
 * It also holds the one byte-level promise story mode makes to Socrates: its
 * paste ends on exactly the line the standard v2 paste ends on, which is the
 * line a checkpoint sends.
 *
 *   npm i playwright-core        # once, not committed
 *   node scripts/test/room-v2-story.test.js
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

const STORY = '/beintheroom/unit-2/the-plague-ships.html';
const STANDARD = '/beintheroom/unit-7/the-munich-table.html';
const LESSON = '/unit-2/lesson-2-6-environmental-consequences.html';
const CAPTURE_KEY = 'behistorical-beintheroom-2.6';
const PAGE_KEY = 'behistorical-room-v2-2.6';

function scenarioFrom(rel) {
  const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  return JSON.parse(src.match(/window\.BH_ROOM_SCENARIO\s*=\s*([\s\S]*?);<\/script>/)[1]);
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ executablePath: EXE });
  const plague = scenarioFrom(STORY);

  // Nothing leaves the fixture server. What is under test is behaviour and
  // storage, not the webfonts.
  async function newContext(width) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    await ctx.route('**', route =>
      route.request().url().startsWith(origin) ? route.continue() : route.abort());
    return ctx;
  }

  const visible = (page, selector) => page.evaluate(sel => {
    const el = document.querySelector(sel);
    if (!el) return false;
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length) && !el.closest('[hidden]');
  }, selector);
  const noSideScroll = page => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

  // ── The link reaches the new page ──────────────────────────────────────────
  console.log('\nTopic 2.6 Module 09 points at the story-mode scenario');
  {
    const src = fs.readFileSync(path.join(ROOT, 'assets/data/lesson-2-6-renderer-config.js'), 'utf8');
    check('the renderer config links the-plague-ships.html',
      /beInTheRoom\s*=\s*\{\s*url:\s*'\.\.\/beintheroom\/unit-2\/the-plague-ships\.html'/.test(src));
    check('the scenario opts in with "mode": "story"', plague.mode === 'story');
  }

  // ── Story mode, played through, at both widths ─────────────────────────────
  for (const width of [380, 1280]) {
    console.log(`\nThe Plague Ships at ${width}px`);
    const ctx = await newContext(width);
    const room = await ctx.newPage();
    const errors = [];
    room.on('pageerror', e => errors.push(e.message));
    // Count every call into the capture bridge. Story mode may write the
    // capture key from exactly one place, the reflection box's input event, so
    // this counter must stay at zero until the reflection is typed. Checking
    // the stored value alone is not enough: the page restores the stored
    // reflection into its own state at load, so a stray save() elsewhere would
    // write the same text back and look harmless while breaking the rule.
    await room.addInitScript(() => {
      window.__captureSaves = 0;
      let bridge;
      Object.defineProperty(window, 'BHBeInTheRoomCapture', {
        configurable: true,
        get() { return bridge; },
        set(value) {
          const save = value.save;
          value.save = function () { window.__captureSaves++; return save.apply(this, arguments); };
          bridge = value;
        }
      });
    });

    // A reflection already stored from an earlier visit. Nothing but a real
    // edit of the reflection box may change it.
    const earlier = 'An earlier reflection this student already wrote.';
    await room.goto(origin + STORY);
    await room.evaluate(([key, value]) => localStorage.setItem(key, JSON.stringify({ q: 'x', a: value })), [CAPTURE_KEY, earlier]);
    await room.reload();

    check('the hero asks the question in the room',
      (await room.textContent('.room-dilemma')).startsWith('The question in the room:'));
    check('the AP alignment is not at the top of the page',
      await room.evaluate(() => {
        const standard = document.querySelector('.room-standard');
        const details = standard && standard.closest('details');
        return !!details && !details.open && details === document.querySelector('.room-main').lastElementChild;
      }));
    check('the alignment is labelled for the teacher',
      (await room.textContent('.room-story-alignment summary')).trim() === 'For your teacher: AP alignment');
    check('the progress label names where work saves and carries no percent',
      (await room.textContent('#room-progress-label')) === 'Your work saves on this device');

    await room.click('[data-role="official"]');
    const detail = await room.textContent('#room-role-detail');
    check('role detail shows the blind spot or tension', detail.includes('Blind spot or tension:'));
    check('role detail does not show the likely preference', !detail.includes('Likely preference') && !detail.includes(plague.roles[0].preference));

    await room.click('[data-evidence="fleas"]');
    await room.click('[data-evidence="crops"]');
    check('two evidence cards count as ready', (await room.textContent('#room-evidence-count')).startsWith('2 selected'));

    for (let i = 0; i < plague.decisions.length; i++) {
      const decision = plague.decisions[i];
      const option = decision.options[i % decision.options.length];
      const card = `[data-story-decision="${decision.id}"][data-story-option="${option.id}"]`;
      const lock = `[data-story-lock="${decision.id}"]`;

      check(`decision ${i + 1} is on the page`, await visible(room, `#story-decision-${decision.id}`));
      const later = plague.decisions.slice(i + 1);
      check(`decisions after ${i + 1} stay hidden until it is locked`,
        await room.evaluate(ids => ids.every(id => !document.getElementById(`story-decision-${id}`)), later.map(d => d.id)));
      if (decision.scene) {
        check(`decision ${i + 1} opens on its scene`,
          (await room.textContent(`#story-decision-${decision.id}`, { timeout: 1000 }).catch(() => '')) !== ''
          && (await room.evaluate(id => {
            const article = document.getElementById(`story-decision-${id}`);
            const scene = article.previousElementSibling;
            return scene && scene.classList.contains('room-story-scene') ? scene.textContent : '';
          }, decision.id)).includes(decision.scene.kicker));
      }
      const before = await room.textContent(`#story-decision-${decision.id}`);
      check(`decision ${i + 1} hides every cost before the lock`,
        !/Who benefits|Who worries|Tradeoff/.test(before)
        && decision.options.every(o => !before.includes(o.tradeoff) && !before.includes(o.consequence)));
      check(`decision ${i + 1}'s lock is disabled until a choice is tapped`, await room.isDisabled(lock));

      await room.click(card);
      check(`tapping a choice selects it and enables the lock`,
        (await room.getAttribute(card, 'aria-pressed')) === 'true' && !(await room.isDisabled(lock)));
      await room.click(lock);
      await room.waitForTimeout(60);

      const result = `#story-result-${decision.id}`;
      check(`locking decision ${i + 1} shows its result`, await visible(room, result));
      const shown = await room.textContent(result);
      check(`the result carries benefits, worries, tradeoff, then what happens next`,
        shown.includes(option.benefits) && shown.includes(option.worries) && shown.includes(option.tradeoff)
        && shown.indexOf('What happens next') > shown.indexOf(option.tradeoff) && shown.includes(option.consequence));
      check(`every option on decision ${i + 1} is disabled after the lock, the chosen one still pressed`,
        await room.evaluate(([id, chosen]) => [...document.querySelectorAll(`[data-story-decision="${id}"]`)]
          .every(b => b.disabled && (b.getAttribute('aria-pressed') === 'true') === (b.dataset.storyOption === chosen)),
          [decision.id, option.id]));
      check(`the result panel is scrolled into view`, await room.evaluate(sel => {
        const r = document.querySelector(sel).getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      }, result));
      if (i < plague.decisions.length - 1) {
        check('Make your case stays hidden until every decision is locked', !(await visible(room, '#story-case-section')));
      }
    }

    check('Make your case appears after the third lock', await visible(room, '#story-case-section'));
    check('Make your case has one box and no tradeoff or opposition box',
      await room.evaluate(() => document.querySelectorAll('#story-case-section textarea').length === 1
        && !document.getElementById('room-tradeoff') && !document.getElementById('room-opposition')));
    check('the record is sealed and its button disabled with no argument',
      !(await visible(room, '#story-record-body')) && await room.isDisabled('#story-open-record'));
    check('the reflection waits for the record', !(await visible(room, '#reflection-section')));

    const argument = 'As a city official I would keep grain moving, because a city fed by sea starves slowly when its harbor closes.';
    await room.fill('#room-argument', argument);
    check('an argument unseals the record button', !(await room.isDisabled('#story-open-record')));

    const stillEarlier = await room.evaluate(key => JSON.parse(localStorage.getItem(key) || '{}').a, CAPTURE_KEY);
    check('no click or keystroke before the reflection touched the stored reflection', stillEarlier === earlier, `got ${stillEarlier}`);
    const savesBefore = await room.evaluate(() => window.__captureSaves);
    check('nothing before the reflection box called the capture bridge', savesBefore === 0, `${savesBefore} call(s)`);

    await room.click('#room-build-prompt');
    const prompt = await room.textContent('#room-prompt');
    const closing = prompt.split('\n').pop();
    check('the story paste omits the tradeoff and opposition sections',
      !prompt.includes('Tradeoff or risk:') && !prompt.includes('Strongest opposing perspective:'));
    check('the story paste tells Socrates where to push, just before "Coach me on one thing"',
      prompt.includes('I did not write out a tradeoff or an opposing view separately. If the weakest part of my argument is a cost I ignored or a role that would fight me, push me there.\n\nCoach me on one thing:'));
    check('the story paste lists every locked decision',
      plague.decisions.every((d, i) => prompt.includes(`- ${d.title}: ${d.options[i % d.options.length].title}`)));

    await room.click('#story-open-record');
    await room.waitForTimeout(60);
    const record = await room.textContent('#story-record-body');
    check('the record opens with its intro, then your decisions, then every item',
      record.includes(plague.record.intro) && record.includes('Your decisions')
      && plague.record.items.every(item => record.includes(item.label) && record.includes(item.text))
      && record.indexOf('Your decisions') < record.indexOf(plague.record.items[0].label));
    check('the reflection appears after the record opens', await visible(room, '#reflection-section'));
    check('the reflection box restored the stored reflection', (await room.inputValue('#room-reflection')) === earlier);

    const reflection = 'Stepping out of character, the same routes that carried plague also carried citrus and rice.';
    await room.fill('#room-reflection', reflection);
    await room.waitForTimeout(60);
    const stored = await room.evaluate(key => JSON.parse(localStorage.getItem(key) || '{}'), CAPTURE_KEY);
    check('typing the reflection writes the topic-keyed record', stored.a === reflection && stored.q === plague.reflectionPrompt);
    check('the reflection box is what called the capture bridge', (await room.evaluate(() => window.__captureSaves)) > 0);
    check('the progress bar is full', (await room.evaluate(() => document.getElementById('room-progress-fill').style.width)) === '100%');
    check(`no sideways scroll at ${width}px`, await noSideScroll(room));

    await room.reload();
    const state = await room.evaluate(key => JSON.parse(localStorage.getItem(key)), PAGE_KEY);
    check('locks persist through a reload', plague.decisions.every(d => state.locked && state.locked[d.id]));
    check('a reload keeps every lock disabled and every result showing',
      await room.evaluate(ids => ids.every(id => document.getElementById(`story-result-${id}`)
        && [...document.querySelectorAll(`[data-story-decision="${id}"]`)].every(b => b.disabled)), plague.decisions.map(d => d.id)));
    check('a reload keeps the record open and the reflection in the box',
      await visible(room, '#story-record-body') && (await room.inputValue('#room-reflection')) === reflection);
    check('a reload does not rewrite the stored reflection',
      (await room.evaluate(key => JSON.parse(localStorage.getItem(key)).a, CAPTURE_KEY)) === reflection);
    check('a reload does not call the capture bridge', (await room.evaluate(() => window.__captureSaves)) === 0);

    if (width === 1280) {
      const lesson = await ctx.newPage();
      await lesson.goto(origin + LESSON);
      const gathered = await lesson.evaluate(() => collectLessonWork().map(item => ({ id: item.id, label: item.label, text: item.text })));
      const bitr = gathered.find(item => item.id === 'beintheroom-response');
      check('Gather All My Work on the 2.6 lesson collects the reflection',
        !!bitr && bitr.text === reflection, `collected: ${gathered.map(g => g.id).join(', ') || 'nothing'}`);
    }

    // Kept for the comparison below.
    if (width === 1280) global.STORY_CLOSING = closing;
    check('no script errors', errors.length === 0, errors.join(' | '));
    await ctx.close();
  }

  // ── An ordinary v2 scenario is untouched ───────────────────────────────────
  console.log('\nThe Munich Table, a v2 scenario without story mode');
  {
    const munich = scenarioFrom(STANDARD);
    const ctx = await newContext(1280);
    const room = await ctx.newPage();
    const errors = [];
    room.on('pageerror', e => errors.push(e.message));
    await room.goto(origin + STANDARD);

    check('it does not opt in', munich.mode === undefined);
    check('it renders no story-mode markup', await room.evaluate(() => !document.querySelector('.room-story, [data-story-option], details')));
    check('its alignment still sits at the top, before the progress bar',
      await room.evaluate(() => document.querySelector('.room-main').firstElementChild.classList.contains('room-standard')));
    check('its hero still says Central dilemma', (await room.textContent('.room-dilemma')).startsWith('Central dilemma:'));
    check('its option cards still show benefits, worries, and tradeoff up front',
      (await room.textContent(`#decision-${munich.decisions[0].id}`)).includes('Who benefits:'));
    check('every decision is on the page at once',
      await room.evaluate(ids => ids.every(id => document.getElementById(`decision-${id}`)), munich.decisions.map(d => d.id)));
    check('the tradeoff and opposition boxes are still there',
      await room.evaluate(() => !!document.getElementById('room-tradeoff') && !!document.getElementById('room-opposition')));
    await room.click(`[data-role="${munich.roles[0].id}"]`);
    check('its progress label still reads as a percent', /% complete · saved locally on this device$/.test(await room.textContent('#room-progress-label')));
    check('its role detail still shows the likely preference', (await room.textContent('#room-role-detail')).includes('Likely preference:'));

    await room.click(`[data-evidence="${munich.evidence[0].id}"]`);
    await room.click(`[data-evidence="${munich.evidence[1].id}"]`);
    for (const d of munich.decisions) await room.click(`[data-decision="${d.id}"][data-option="${d.options[0].id}"]`);
    await room.fill('#room-argument', 'A draft.');
    await room.fill('#room-tradeoff', 'A cost.');
    await room.fill('#room-opposition', 'An opponent.');
    await room.click('#room-build-prompt');
    const prompt = await room.textContent('#room-prompt');
    check('its paste still carries the tradeoff and opposition sections',
      prompt.includes('Tradeoff or risk:\nA cost.') && prompt.includes('Strongest opposing perspective:\nAn opponent.'));
    check('the story paste ends on the same line as the standard paste',
      prompt.split('\n').pop() === global.STORY_CLOSING, `${JSON.stringify(prompt.split('\n').pop())} vs ${JSON.stringify(global.STORY_CLOSING)}`);
    check('no script errors', errors.length === 0, errors.join(' | '));
    await ctx.close();
  }

  await browser.close();
  server.close();

  console.log('');
  if (failures) { console.error(`\x1b[31m${failures} check(s) failed.\x1b[0m`); process.exit(1); }
  console.log('\x1b[32mStory mode plays in order, and the standard v2 path is unchanged.\x1b[0m');
})().catch(error => { console.error(error); server.close(); process.exit(1); });
