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
 * Exit codes: 1 if a picture is genuinely gone, 2 if nothing could be checked
 * at all. Every failure prints the file and the exact file name to replace.
 *
 * BROKEN AND UNVERIFIED ARE NOT THE SAME ANSWER
 *
 * Commons rate-limits. When it does it answers 429, which means "ask me later",
 * and for two nights this script printed those alongside the real 404s under
 * one heading that said the pictures did not resolve. Most of the red was the
 * throttle. That is the worst kind of failing check: it is red for a reason
 * nobody can fix in this repo, so people stop reading it, and the four genuine
 * dead images underneath get ignored with everything else.
 *
 * So a 429 or a 5xx that survives every retry is reported as **not verified**
 * and does not gate. Only a real answer from the host, a 404 or a page served
 * where an image should be, counts as broken.
 *
 * The honest cost, written down rather than hidden: a picture that is genuinely
 * dead behind a persistent throttle is not detected on that run. It is named in
 * the not-verified list, and the next night checks it again. Reporting it as
 * broken without evidence would be a guess, and a guess in the same list as the
 * real failures is what made the list worthless.
 *
 * WHY THE THROTTLE HAPPENED
 *
 * Six workers against one host with about 400 URLs, and a 429 backed off only
 * the request that received it while the other five kept going. Rate limiting is
 * a property of the host, not of one request, so the backoff has to be too: a
 * 429 now pauses every worker on that host, and Retry-After is obeyed when the
 * host sends it rather than guessed at.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ROOT = path.resolve(__dirname, '..');
// Tunable so a slower or more forgiving network can be dialled in without a
// code change, and so the throttle test can drive this quickly.
const CONCURRENCY = Number(process.env.IMAGE_CHECK_CONCURRENCY || 4);
const TIMEOUT_MS = Number(process.env.IMAGE_CHECK_TIMEOUT_MS || 20000);
const RETRIES = Number(process.env.IMAGE_CHECK_RETRIES || 4);
// A floor on the gap between two requests to the same host, which is what keeps
// a burst from becoming a 429 in the first place.
const MIN_GAP_MS = Number(process.env.IMAGE_CHECK_MIN_GAP_MS || 120);
// Two different ceilings, because they bound two different things. The first
// caps a backoff this script guessed at. The second caps a wait the host
// explicitly asked for, and it is far higher on purpose: clamping Retry-After
// down to our own guess means retrying before the host said to, which earns
// another 429 and is precisely the cascade this is meant to end. The ceiling
// exists only so an absurd Retry-After cannot hang the run; past it the URL
// goes unverified, which is the honest answer.
const MAX_BACKOFF_MS = Number(process.env.IMAGE_CHECK_MAX_BACKOFF_MS || 30000);
const MAX_RETRY_AFTER_MS = Number(process.env.IMAGE_CHECK_MAX_RETRY_AFTER_MS || 120000);
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

// ── pacing ────────────────────────────────────────────────────────────────────
//
// One gate per host, shared by every worker. `nextSlot` spaces requests out;
// `until` is the hard stop a 429 imposes on all of them at once.
const hostGates = new Map();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function gateFor(host) {
  if (!hostGates.has(host)) hostGates.set(host, { until: 0, nextSlot: 0 });
  return hostGates.get(host);
}

async function waitForSlot(host) {
  for (;;) {
    const gate = gateFor(host);
    const now = Date.now();
    const ready = Math.max(gate.until, gate.nextSlot);
    if (ready > now) { await sleep(ready - now); continue; }
    gate.nextSlot = now + MIN_GAP_MS;
    return;
  }
}

// A 429 is the host talking to the whole run, so it stops the whole run.
function coolDownHost(host, ms) {
  const gate = gateFor(host);
  gate.until = Math.max(gate.until, Date.now() + Math.min(ms, MAX_RETRY_AFTER_MS));
}

// Retry-After is either delta-seconds or an HTTP date. Obeying it beats
// guessing, and it is the only number the host actually agreed to.
function retryAfterMs(value) {
  if (!value) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const at = Date.parse(value);
  return Number.isFinite(at) ? Math.max(0, at - Date.now()) : null;
}

function backoffMs(attempt) {
  // Exponential with jitter, so retries from several workers do not resynchronise
  // into a second burst the moment the cooldown lifts.
  const base = Math.min(1000 * 2 ** attempt, MAX_BACKOFF_MS);
  return Math.round(base * (0.5 + Math.random() / 2));
}

// ── check ─────────────────────────────────────────────────────────────────────
function head(url, expectImage, redirects = 0) {
  return new Promise((resolve) => {
    if (redirects > 6) return resolve({ ok: false, status: 'too many redirects' });
    let settled = false;
    const done = (value) => { if (!settled) { settled = true; resolve(value); } };
    // Protocol-driven, so the throttle test can drive this against a local
    // http server instead of reaching for the real Commons.
    const agent = url.startsWith('http://') ? http : https;
    const request = agent.request(url, { method: 'GET', headers: {
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
      const retryAfter = retryAfterMs(response.headers['retry-after']);
      if (status === 200 || status === 206) {
        if (!expectImage) return done({ ok: true, status, type });
        if (/^image\//i.test(type) || /svg/i.test(type)) return done({ ok: true, status, type });
        return done({ ok: false, status, type, reason: `served ${type || 'no content-type'}, not an image` });
      }
      done({ ok: false, status, type, retryAfter, reason: `HTTP ${status}` });
    });
    request.setTimeout(TIMEOUT_MS, () => { request.destroy(); done({ ok: false, status: 'timeout', reason: 'timed out' }); });
    request.on('error', (error) => done({ ok: false, status: 'error', reason: error.message }));
    request.end();
  });
}

// Did the host actually answer the question, or did it decline to answer?
//
// A 404 is an answer: that file is gone. A page served where an image should be
// is an answer too. Everything else here is the request never getting a verdict
// on the picture, and must not be reported as a dead image.
//
// The access refusals matter as much as the rate limit. A filtering proxy
// answers 403 or 407 for every request, and classifying those as broken is how
// a blocked network turns into a report that 400 pictures are missing.
const ACCESS_REFUSED = new Set([401, 403, 407, 451]);

function isDecline(result) {
  if (result.ok) return false;
  if (typeof result.status !== 'number') return true;          // timeout, socket error
  return result.status === 429 || result.status >= 500 || ACCESS_REFUSED.has(result.status);
}

// Worth asking again? A rate limit and a server error change with time. An
// access refusal does not: retrying 403 on every URL behind a filtering proxy
// buys nothing and spends the whole nightly budget doing it.
function isRetryable(result) {
  if (result.ok) return false;
  if (typeof result.status !== 'number') return true;
  return result.status === 429 || result.status >= 500;
}

async function checkWithRetries(url, expectImage) {
  let host;
  try { host = new URL(url).host; } catch { host = url; }
  let last;
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    await waitForSlot(host);
    last = await head(url, expectImage);
    if (last.ok) return last;
    // A 404 is a real answer, and a 403 will be a 403 next time too.
    if (!isRetryable(last)) return last;
    if (attempt === RETRIES) break;

    const wait = last.retryAfter != null
      ? Math.min(last.retryAfter, MAX_RETRY_AFTER_MS)
      : backoffMs(attempt);
    // Every worker waits, not just this one. Backing off a single request while
    // the other workers keep going is what turned one 429 into a cascade of them.
    if (last.status === 429 || (typeof last.status === 'number' && last.status >= 500)) {
      coolDownHost(host, wait);
    }
    await sleep(wait);
  }
  return { ...last, declined: true };
}

function prettyName(url) {
  return decodeURIComponent(url.replace(/^.*\/(?:Special:(?:FilePath|Redirect)\/(?:file\/)?|File:)?/, ''));
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

  const verified = urls.filter((url) => results.get(url).ok);
  // The host declined to answer: rate limit, server error, timeout, no route.
  const unverified = urls.filter((url) => !results.get(url).ok && isDecline(results.get(url)));
  // The host answered, and the answer was that the picture is not there.
  const broken = urls.filter((url) => !results.get(url).ok && !isDecline(results.get(url)));

  // Nothing got through at all, so this machine cannot reach the image hosts and
  // the course is not what is wrong. Saying "393 images are broken" here is worse
  // than saying nothing, because it sends someone hunting for 393 imaginary bugs.
  // Exit 2, the same "skipped, not passed" this repo uses for the browser suite.
  if (!verified.length && !broken.length) {
    const statuses = [...new Set(unverified.map((url) => String(results.get(url).status)))];
    console.log(`${Y}${W}Nothing was verified.${X} All ${urls.length} requests were declined `
      + `(${statuses.slice(0, 3).join(', ')}${statuses.length > 3 ? ', ...' : ''}),`);
    console.log('which means this machine cannot reach the image hosts, not that the images are wrong.');
    console.log('A filtering proxy answers 403 or 407; no route at all shows as a timeout or error.');
    console.log('Re-run from a network that allows commons.wikimedia.org.\n');
    process.exit(2);
  }

  // Printed whether or not anything is broken, because an unverified picture is
  // a thing you did not learn, and it should not be silent just because the run
  // is otherwise green.
  const reportUnverified = () => {
    if (!unverified.length) return;
    console.log(`${Y}${W}${unverified.length} not verified on this run${X}`);
    console.log(`${Y}The host declined to answer, usually rate limiting. These are not known to be`);
    console.log(`broken, and they are checked again on the next run.${X}`);
    for (const url of unverified) {
      const result = results.get(url);
      console.log(`  ${Y}?${X} ${W}${prettyName(url)}${X}  (${result.reason || result.status})`);
    }
    console.log('');
  };

  if (!broken.length) {
    console.log(`${G}${W}All ${verified.length} verified remote references resolve.${X}`
      + ` ${images.length} of the ${urls.length} checked are pictures.\n`);
    reportUnverified();
    return;
  }

  const brokenImages = broken.filter((url) => found.get(url).kind === 'image');
  const brokenSources = broken.filter((url) => found.get(url).kind === 'source');
  console.log(`${R}${W}${brokenImages.length} pictures and ${brokenSources.length} credit pages are gone${X}\n`);

  for (const group of [
    { label: 'Pictures students would see as blank', urls: brokenImages },
    { label: 'Credit links that would 404 when clicked', urls: brokenSources }
  ]) {
    if (!group.urls.length) continue;
    console.log(`${W}${group.label}${X}`);
    for (const url of group.urls) {
      const result = results.get(url);
      console.log(`  ${R}✗${X} ${W}${prettyName(url)}${X}  (${result.reason || result.status})`);
      for (const file of [...found.get(url).files].sort()) console.log(`      used in ${file}`);
    }
    console.log('');
  }

  reportUnverified();

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

// Exported so scripts/test/image-check-throttle.test.js can drive the real
// pacing and classification against a local server, rather than a copy of them.
// The guard matters for the same reason build-ebook.js has one: without it, a
// require of this file would run a full network sweep as a side effect.
module.exports = { checkWithRetries, isDecline, isRetryable, retryAfterMs, head };

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
