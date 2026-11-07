#!/usr/bin/env node
'use strict';

/**
 * Read every narratable eBook section exactly as the Listen button would, and
 * write what the recorded narrator should say, as JSON.
 *
 *   node scripts/audio/extract-narration.js --volume unit-3 [--section t3-1-] > sections.json
 *
 * The text comes from the real extractor in assets/js/behistorical-listen.js,
 * run in Chromium against the built page (window.BHListen.chunks), not from a
 * second implementation of the rules about what is narrated. A second
 * implementation would agree today and drift the first time the renderer gained
 * a component, and the recording would then say something the page does not.
 *
 * Each chunk is then passed through scripts/lib/narration-text.js, which turns
 * decades, regnal numerals and BCE dates into what a historian says. That is
 * the only change: no rewording, no summarizing.
 *
 * Output, one object per section:
 *   { volume, section, hash, label, chunks: [ "spoken text", ... ] }
 *
 * The hash is copied from the page's data-listen-hash, never recomputed, so the
 * recording is filed under exactly the fingerprint the player will look for.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { forSpeech } = require('../lib/narration-text');

const ROOT = path.resolve(__dirname, '..', '..');

function arg(name) {
  const i = process.argv.indexOf(name);
  return i === -1 ? null : process.argv[i + 1];
}

function chromePath() {
  if (process.env.PW_CHROME) return process.env.PW_CHROME;
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : []).filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  if (!dir) return undefined;
  for (const sub of ['chrome-linux64', 'chrome-linux']) {
    const p = path.join(base, dir, sub, 'chrome');
    if (fs.existsSync(p)) return p;
  }
  return undefined;
}

async function main() {
  const volume = arg('--volume');
  const prefix = arg('--section') || '';
  if (!volume || !/^[a-z0-9-]+$/.test(volume)) {
    console.error('usage: node scripts/audio/extract-narration.js --volume unit-3 [--section t3-1-]');
    process.exit(2);
  }
  const page = path.join(ROOT, 'ebook', `${volume}.html`);
  if (!fs.existsSync(page)) { console.error(`no such volume: ebook/${volume}.html`); process.exit(2); }

  let chromium;
  try { ({ chromium } = require('playwright-core')); }
  catch (e) { console.error('needs playwright-core: npm i playwright-core'); process.exit(2); }

  const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
  const server = http.createServer((req, res) => {
    const file = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, ''));
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(fs.readFileSync(file));
  });
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;

  const browser = await chromium.launch({ executablePath: chromePath(), args: ['--no-sandbox'] });
  const tab = await browser.newPage();
  // Fonts and anything off this machine are irrelevant to the words, and in a
  // sandbox they hang rather than fail.
  await tab.route('**/*', r => r.request().url().startsWith(`http://localhost:${port}/`) ? r.continue() : r.abort());
  await tab.goto(`http://localhost:${port}/ebook/${volume}.html`, { waitUntil: 'load' });
  await tab.waitForFunction(() => window.BHListen && typeof window.BHListen.chunks === 'function');

  const sections = await tab.evaluate(prefix => {
    return Array.from(document.querySelectorAll('[data-listenable][data-listen-hash]'))
      .filter(s => s.id.indexOf(prefix) === 0)
      .map(s => ({
        section: s.id,
        hash: s.getAttribute('data-listen-hash'),
        label: s.getAttribute('data-listen-label') || '',
        chunks: window.BHListen.chunks(s)
      }));
  }, prefix);

  await browser.close();
  server.close();

  const out = sections.map(s => ({ volume, ...s, chunks: s.chunks.map(forSpeech) }));
  process.stdout.write(JSON.stringify(out, null, 2) + '\n');
  const words = out.reduce((n, s) => n + s.chunks.join(' ').split(/\s+/).length, 0);
  console.error(`${out.length} sections, ${words} words, about ${Math.round(words / 160)} minutes of narration`);
}

main().catch(e => { console.error(e); process.exit(1); });
