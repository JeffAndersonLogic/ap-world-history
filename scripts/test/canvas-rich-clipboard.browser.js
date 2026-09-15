#!/usr/bin/env node
'use strict';

/**
 * Real-browser proof for BeHistorical browser -> clipboard -> Canvas capture.
 *
 * Topic 1.1 is loaded in Chromium, every capture slot is filled through the same
 * storage APIs students use, Gather All My Work builds the document, and Copy to
 * Clipboard is exercised three ways:
 *   1. ClipboardItem with text/html + text/plain,
 *   2. blocked ClipboardItem -> temporary rich DOM selection + execCommand,
 *   3. blocked rich copy -> parser-safe plain text.
 *
 * Both the rich HTML converted back to text and the plain fallback are run
 * through the production Canvas parser. A clean run must produce every expected
 * response with no EDITED/INCOMPLETE/etc. exceptions.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { parseSubmission, htmlToText } = require('../parse-canvas-submissions');

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
  if (!dir) return 'chromium';
  for (const layout of ['chrome-linux64', 'chrome-linux']) {
    const p = path.join(base, dir, layout, 'chrome');
    if (fs.existsSync(p)) return p;
  }
  return 'chromium';
})();

const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg',
  '.png': 'image/png', '.webp': 'image/webp', '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('not found'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

const results = [];
function check(name, pass, detail) {
  results.push({ name, pass, detail });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

function parserCheck(name, text, expected) {
  const parsed = parseSubmission(text, 'studenttest_123_456_topic-1-1.html');
  const flags = parsed.responses.flatMap(r => r.flags || []);
  check(`${name}: parser returns every response`, parsed.responses.length === expected,
    `${parsed.responses.length}/${expected}`);
  check(`${name}: no response is falsely flagged edited/incomplete`, flags.length === 0,
    flags.join(', ') || 'no flags');
  check(`${name}: parser raises no exceptions`, parsed.exceptions.length === 0,
    parsed.exceptions.map(e => e.reason).join(', ') || 'none');
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', e => pageErrors.push(e.message));

  await page.route('**/*', route =>
    route.request().url().startsWith(`http://127.0.0.1:${port}/`) ? route.continue() : route.abort());

  await page.goto(`http://127.0.0.1:${port}/unit-1/lesson-1-1-song-china.html`,
    { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#all-work-output');

  // Fill every slot the lesson declares. First & 10 is an iframe bridge, so seed
  // its topic-keyed payload exactly where injectFirst10Answers() reads it.
  const seeded = await page.evaluate(() => {
    const topic = workTopicId();
    const firstCount = first10QuestionCount();
    const first = [];
    for (let i = 0; i < firstCount; i++) {
      first.push({
        q: `Browser test First & 10 question ${i + 1}`,
        a: `Browser test response for first10-q${i + 1}.`,
        c: '4'
      });
    }
    BHDraftStore.set(`behistorical-first10-${topic}`, JSON.stringify(first));

    WORK_ITEMS.forEach(item => {
      if (/^first10-q\d+$/.test(item.id)) return;
      if (!promptForId(item.id)) return;
      BHDraftStore.set(draftKey(item.id), `Browser test response for ${item.id}.`);
    });

    const doc = gatherAllWork();
    return {
      expected: expectedCaptureCount(),
      count: doc ? doc.count : 0,
      html: doc ? doc.html : '',
      plain: doc ? doc.plain : ''
    };
  });

  check('representative Topic 1.1 gathers every expected slot',
    seeded.count === seeded.expected, `${seeded.count}/${seeded.expected}`);
  check('gathered HTML carries 24 pt topic title', /font-size:24pt/.test(seeded.html));
  check('gathered HTML carries 16 pt module headings', /font-size:16pt/.test(seeded.html));
  check('gathered HTML carries 11 pt prompt and response hierarchy',
    /font-size:11pt;line-height:1\.4/.test(seeded.html)
      && /font-size:11pt;line-height:1\.45/.test(seeded.html));
  check('gathered plain text keeps parser grammar',
    /Question:/.test(seeded.plain) && /My response:/.test(seeded.plain)
      && /#BHV\|v=1\|topic=1\.1\|/.test(seeded.plain)
      && /#BHR\|/.test(seeded.plain));

  // Primary path: capture the exact ClipboardItem object the renderer hands to
  // navigator.clipboard.write and inspect both Blob flavors.
  await page.evaluate(() => {
    window.__bhClip = null;
    window.__bhPlainWrite = '';
    Object.defineProperty(window, 'ClipboardItem', {
      configurable: true,
      value: function ClipboardItem(items) { this.items = items; this.types = Object.keys(items); }
    });
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        write: async items => { window.__bhClip = items[0]; },
        writeText: async text => { window.__bhPlainWrite = text; }
      }
    });
    copyAllWork();
  });
  await page.waitForTimeout(80);

  const clip = await page.evaluate(async () => ({
    types: window.__bhClip ? window.__bhClip.types : [],
    html: window.__bhClip ? await window.__bhClip.items['text/html'].text() : '',
    plain: window.__bhClip ? await window.__bhClip.items['text/plain'].text() : '',
    plainWrite: window.__bhPlainWrite || ''
  }));

  check('ClipboardItem writes both text/html and text/plain',
    clip.types.includes('text/html') && clip.types.includes('text/plain'), clip.types.join(', '));
  check('primary rich clipboard Blob contains inline hierarchy',
    /font-size:24pt/.test(clip.html) && /font-size:16pt/.test(clip.html)
      && /font-size:10\.5pt/.test(clip.html));
  check('primary path did not fall through to writeText', clip.plainWrite === '');

  // Rich-selection fallback: block ClipboardItem.write, then intercept
  // execCommand('copy'). The selected clone must be the temporary rich HTML node,
  // not a flattened text selection.
  await page.evaluate(() => {
    window.__bhFallbackRich = '';
    window.__bhFallbackPlain = '';
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        write: async () => { throw new Error('blocked rich clipboard'); },
        writeText: async text => { window.__bhFallbackPlain = text; }
      }
    });
    document.execCommand = function (cmd) {
      if (cmd !== 'copy') return false;
      const sel = window.getSelection();
      if (!sel || !sel.rangeCount) return false;
      const holder = document.createElement('div');
      holder.appendChild(sel.getRangeAt(0).cloneContents());
      window.__bhFallbackRich = holder.innerHTML;
      return true;
    };
    copyAllWork();
  });
  await page.waitForTimeout(100);

  const richFallback = await page.evaluate(() => ({
    html: window.__bhFallbackRich || '',
    plain: window.__bhFallbackPlain || ''
  }));
  check('blocked ClipboardItem falls back to selected rich HTML',
    /font-size:24pt/.test(richFallback.html) && /font-size:16pt/.test(richFallback.html));
  check('successful rich-selection fallback does not use plain writeText', richFallback.plain === '');

  // Last resort: block both rich paths. The plain fallback must be the exact
  // parser-safe document with its manifest and markers intact.
  await page.evaluate(() => {
    window.__bhPlainOnly = '';
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        write: async () => { throw new Error('blocked rich clipboard'); },
        writeText: async text => { window.__bhPlainOnly = text; }
      }
    });
    document.execCommand = () => false;
    copyAllWork();
  });
  await page.waitForTimeout(100);
  const plainOnly = await page.evaluate(() => window.__bhPlainOnly || '');
  check('last-resort plain clipboard keeps record footer',
    /#BHV\|v=1\|topic=1\.1\|/.test(plainOnly) && /#BHR\|/.test(plainOnly));

  parserCheck('text/plain ClipboardItem flavor', clip.plain, seeded.expected);
  parserCheck('text/html ClipboardItem flavor after HTML-to-text round trip',
    htmlToText(clip.html), seeded.expected);
  parserCheck('last-resort plain fallback', plainOnly, seeded.expected);

  check('browser run has no page errors', pageErrors.length === 0, pageErrors.join(' | ') || 'none');

  await browser.close();
  server.close();

  const failed = results.filter(r => !r.pass);
  console.log(`\n  ${results.length - failed.length}/${results.length} passed\n`);
  process.exit(failed.length ? 1 : 0);
})().catch(e => {
  console.error(e);
  try { server.close(); } catch (_) { }
  process.exit(1);
});
