#!/usr/bin/env node
'use strict';

/**
 * Checks that every remote image URL in the course actually resolves.
 *
 * `node scripts/validate.js` cannot do this: it is deliberately offline so it
 * stays deterministic in CI, and a Wikimedia file name that does not exist
 * throws no error, it just renders nothing. This script is the other half of
 * the contract, and it needs network access to commons.wikimedia.org.
 *
 *   node scripts/check-image-urls.js              check every remote image
 *   node scripts/check-image-urls.js --fix-list   print only the failures
 *
 * Exit code is 1 if any image is unreachable, so it can gate a deploy.
 * Every failure prints the file and the exact file name to replace.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const CONCURRENCY = 6;
const TIMEOUT_MS = 20000;
const RETRIES = 2;
const FIX_LIST_ONLY = process.argv.includes('--fix-list');

const R = '\x1b[31m';
const G = '\x1b[32m';
const Y = '\x1b[33m';
const C = '\x1b[36m';
const W = '\x1b[1m';
const X = '\x1b[0m';

// ── collect ───────────────────────────────────────────────────────────────────
function walk(dir, predicate) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...walk(full, predicate));
    else if (predicate(full)) found.push(full);
  }
  return found;
}

const IMAGE_EXT = /\.(svg|jpe?g|png|gif|webp|PNG|JPG|JPEG|SVG)$/;

// A Commons /wiki/File: link is the human-readable credit page, not the picture.
// Both need to resolve, but only one is expected to be an image.
function classify(url) {
  if (!/^https?:/i.test(url)) return null;
  if (/fonts\.(googleapis|gstatic)\.com/i.test(url)) return null;
  if (/docs\.google\.com|magicschool\.ai|(?:^|\.)youtube\.com|youtu\.be/i.test(url)) {
    return /^https:\/\/img\.youtube\.com\//i.test(url) ? 'image' : null;
  }
  if (/\/wiki\/File:/i.test(url)) return 'source';
  const clean = url.split(/[?#]/)[0];
  if (IMAGE_EXT.test(clean) || /Special:(FilePath|Redirect)/i.test(url)) return 'image';
  return null;
}

function collect() {
  const found = new Map();   // url -> { kind, files: Set }
  const add = (url, file) => {
    const kind = classify(url);
    if (!kind) return;
    const rel = path.relative(ROOT, file);
    if (!found.has(url)) found.set(url, { kind, files: new Set() });
    found.get(url).files.add(rel);
  };

  const files = walk(ROOT, (file) => /\.(html|js)$/i.test(file) && !file.includes(`${path.sep}scripts${path.sep}`));
  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    // <img src>, CSS url(), and every url:/sourceUrl:/src: string in lesson data
    for (const m of src.matchAll(/<img[^>]*?\ssrc=["']([^"']+)["']/gi)) add(m[1], file);
    for (const m of src.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) add(m[1], file);
    for (const m of src.matchAll(/\b(?:url|sourceUrl|src|heroImage|previewImage)\s*:\s*(['"])((?:\\.|(?!\1).)*)\1/g)) add(m[2], file);
  }
  return found;
}

// ── check ─────────────────────────────────────────────────────────────────────
function head(url, expectImage, redirects = 0) {
  return new Promise((resolve) => {
    if (redirects > 6) return resolve({ ok: false, status: 'too many redirects' });
    let settled = false;
    const done = (value) => { if (!settled) { settled = true; resolve(value); } };
    const request = https.request(url, { method: 'GET', headers: {
      // Commons rejects requests without a descriptive agent.
      'User-Agent': 'BeHistorical-image-check/1.0 (AP World History course validator)',
      Range: 'bytes=0-0'
    } }, (response) => {
      const status = response.statusCode;
      if (status >= 300 && status < 400 && response.headers.location) {
        response.resume();
        const next = new URL(response.headers.location, url).toString();
        return head(next, expectImage, redirects + 1).then(done);
      }
      response.resume();
      const type = String(response.headers['content-type'] || '');
      if (status === 200 || status === 206) {
        if (!expectImage) return done({ ok: true, status, type });
        if (/^image\//i.test(type) || /svg/i.test(type)) return done({ ok: true, status, type });
        return done({ ok: false, status, type, reason: `served ${type || 'no content-type'}, not an image` });
      }
      done({ ok: false, status, type, reason: `HTTP ${status}` });
    });
    request.setTimeout(TIMEOUT_MS, () => { request.destroy(); done({ ok: false, status: 'timeout', reason: 'timed out' }); });
    request.on('error', (error) => done({ ok: false, status: 'error', reason: error.message }));
    request.end();
  });
}

async function checkWithRetries(url, expectImage) {
  let last;
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    last = await head(url, expectImage);
    if (last.ok) return last;
    // A 404 is a real answer; only retry transport-level trouble.
    if (typeof last.status === 'number' && last.status !== 429 && last.status < 500) return last;
    await new Promise((r) => setTimeout(r, 800 * (attempt + 1)));
  }
  return last;
}

async function main() {
  const found = collect();
  const urls = [...found.keys()].sort();
  if (!urls.length) {
    console.log('No remote image URLs found.');
    return;
  }
  const images = urls.filter((url) => found.get(url).kind === 'image');
  const sources = urls.filter((url) => found.get(url).kind === 'source');
  const allFiles = new Set(urls.flatMap((url) => [...found.get(url).files]));

  console.log(`${C}${W}BeHistorical remote image check${X}`);
  console.log(`${images.length} pictures and ${sources.length} Commons credit pages, referenced by ${allFiles.size} files\n`);

  const results = new Map();
  let cursor = 0;
  let done = 0;
  const workers = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, async () => {
    for (;;) {
      const mine = cursor++;
      if (mine >= urls.length) return;
      const url = urls[mine];
      results.set(url, await checkWithRetries(url, found.get(url).kind === 'image'));
      done++;
      if (process.stdout.isTTY && !FIX_LIST_ONLY) process.stdout.write(`  checked ${done}/${urls.length}\r`);
    }
  });
  await Promise.all(workers);
  if (process.stdout.isTTY && !FIX_LIST_ONLY) process.stdout.write(`${' '.repeat(40)}\r`);

  const broken = urls.filter((url) => !results.get(url).ok);

  // If every single request failed the same way, the network is the problem, not
  // the course. Saying "393 images are broken" in that situation is worse than
  // saying nothing, because it sends someone hunting for 393 imaginary bugs.
  if (broken.length === urls.length) {
    const statuses = new Set(broken.map((url) => String(results.get(url).status)));
    if (statuses.size === 1) {
      const status = [...statuses][0];
      console.log(`${Y}${W}Nothing was verified.${X} Every request failed identically (${status}),`);
      console.log('which means this machine cannot reach the image hosts, not that the images are wrong.');
      console.log('A filtering proxy answers 403 or 407; no route at all shows as a timeout or error.');
      console.log('Re-run from a network that allows commons.wikimedia.org.\n');
      process.exit(2);
    }
  }

  if (!broken.length) {
    console.log(`${G}${W}All ${urls.length} remote references resolve.${X} ${images.length} are real image files.\n`);
    return;
  }

  const brokenImages = broken.filter((url) => found.get(url).kind === 'image');
  const brokenSources = broken.filter((url) => found.get(url).kind === 'source');
  console.log(`${R}${W}${brokenImages.length} pictures and ${brokenSources.length} credit pages did not resolve${X}\n`);

  for (const group of [
    { label: 'Pictures students would see as blank', urls: brokenImages },
    { label: 'Credit links that would 404 when clicked', urls: brokenSources }
  ]) {
    if (!group.urls.length) continue;
    console.log(`${W}${group.label}${X}`);
    for (const url of group.urls) {
      const result = results.get(url);
      const name = decodeURIComponent(url.replace(/^.*\/(?:Special:(?:FilePath|Redirect)\/(?:file\/)?|File:)?/, ''));
      console.log(`  ${R}✗${X} ${W}${name}${X}  (${result.reason || result.status})`);
      for (const file of [...found.get(url).files].sort()) console.log(`      used in ${file}`);
    }
    console.log('');
  }

  console.log(`${W}How to fix each one${X}
  1. Search commons.wikimedia.org for the subject and open its file page.
  2. Copy the exact title after "File:" into
     https://commons.wikimedia.org/wiki/Special:FilePath/<EXACT_FILE_NAME>
     and set sourceUrl to https://commons.wikimedia.org/wiki/File:<EXACT_FILE_NAME>
  3. Re-run this script.

  Or set url and sourceUrl to empty strings. Both renderers then draw the
  generated local artwork built for that exact slot, which is always on-topic
  and can never fail to load.
`);
  process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
