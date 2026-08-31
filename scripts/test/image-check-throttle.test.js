#!/usr/bin/env node
'use strict';

/**
 * image-check-throttle.test.js
 *
 * Proves the image checker tells "gone" apart from "ask me later".
 *
 * WHY THIS EXISTS
 *
 * Nightly went red two nights running with a list headed "pictures did not
 * resolve", and most of that list was HTTP 429: Commons rate limiting a run that
 * fired six workers at one host across about 400 URLs. Four entries were real
 * dead files. A check that mixes those two teaches everyone to skim past it,
 * which costs more than the red does.
 *
 * The real host cannot be used to test this. It rate-limits when it feels like
 * it, which is the definition of a flaky test, and CLAUDE.md already says a
 * third party's behaviour must never decide whether a check passes. So this
 * drives the real `checkWithRetries` against a local server that rate-limits on
 * demand: deterministic, offline, and in the push gate.
 *
 * The honest limit, written down: this proves this code obeys Retry-After,
 * paces itself, and classifies correctly. It does not prove Commons behaves the
 * way the fixture does.
 */

const http = require('http');
const path = require('path');

const CHECKER = path.join(__dirname, '..', 'check-image-urls.js');

// Fast knobs, set before the checker is required so its constants pick them up.
process.env.IMAGE_CHECK_RETRIES = '3';
process.env.IMAGE_CHECK_MIN_GAP_MS = '10';
process.env.IMAGE_CHECK_MAX_BACKOFF_MS = '500';
process.env.IMAGE_CHECK_TIMEOUT_MS = '2000';

const { checkWithRetries, isDecline, isRetryable, retryAfterMs } = require(CHECKER);

const G = '\x1b[32m', R = '\x1b[31m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';
let failures = 0;
let checks = 0;

function ok(condition, label, detail) {
  checks++;
  if (condition) {
    console.log(`  ${G}PASS${X}  ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  } else {
    failures++;
    console.log(`  ${R}FAIL${X}  ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  }
}

const PNG = Buffer.from('89504e470d0a1a0a', 'hex');

/**
 * A server that behaves like a rate limiter: the first `throttleFor` requests to
 * /flaky are refused with 429 and a Retry-After, and everything after that is
 * served. /gone is a real 404 and /always-limited never relents.
 */
function makeServer(state) {
  return http.createServer((req, res) => {
    state.hits.push({ url: req.url, at: Date.now() });
    const path_ = req.url.split('?')[0];

    if (path_ === '/gone') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('no such file');
    }
    if (path_ === '/always-limited') {
      res.writeHead(429, { 'Content-Type': 'text/plain', 'Retry-After': '0' });
      return res.end('slow down');
    }
    // Asks for a wait far longer than the run budget, which is what a real host
    // under load does and what killed the first version of this fix.
    if (path_ === '/always-limited-slow') {
      res.writeHead(429, { 'Content-Type': 'text/plain', 'Retry-After': '30' });
      return res.end('slow down');
    }
    if (path_ === '/flaky') {
      state.flakyHits++;
      if (state.flakyHits <= state.throttleFor) {
        res.writeHead(429, { 'Content-Type': 'text/plain', 'Retry-After': '1' });
        return res.end('slow down');
      }
      res.writeHead(200, { 'Content-Type': 'image/png' });
      return res.end(PNG);
    }
    if (path_ === '/html-not-image') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end('<html>a page, not a picture</html>');
    }
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(PNG);
  });
}

async function main() {
  console.log(`${W}Image checker: rate limiting is not a broken image${X}\n`);

  // ── Retry-After parsing, both forms the spec allows ────────────────────────
  ok(retryAfterMs('2') === 2000, 'Retry-After in seconds is honoured', '2 -> 2000ms');
  const future = new Date(Date.now() + 5000).toUTCString();
  const fromDate = retryAfterMs(future);
  ok(fromDate > 3000 && fromDate <= 5000, 'Retry-After as an HTTP date is honoured', `${fromDate}ms`);
  ok(retryAfterMs(undefined) === null, 'a missing Retry-After falls through to backoff');
  ok(retryAfterMs('not a date') === null, 'an unparseable Retry-After falls through to backoff');

  // ── classification ────────────────────────────────────────────────────────
  ok(isDecline({ ok: false, status: 429 }) === true, 'a 429 is a decline, not an answer');
  ok(isDecline({ ok: false, status: 503 }) === true, 'a 5xx is a decline, not an answer');
  ok(isDecline({ ok: false, status: 'timeout' }) === true, 'a timeout is a decline');
  ok(isDecline({ ok: false, status: 404 }) === false, 'a 404 is a real answer');
  ok(isDecline({ ok: false, status: 200, reason: 'served text/html, not an image' }) === false,
    'a page served where an image should be is a real answer');
  ok(isDecline({ ok: true, status: 200 }) === false, 'a success is not a decline');

  // A filtering proxy answers 403 for everything. Calling that a dead picture is
  // how a blocked network becomes a report that 400 images are missing.
  ok(isDecline({ ok: false, status: 403 }) === true, 'a proxy 403 is a decline, not a dead picture');
  ok(isDecline({ ok: false, status: 407 }) === true, 'a proxy 407 is a decline, not a dead picture');
  ok(isRetryable({ ok: false, status: 429 }) === true, 'a rate limit is worth asking again');
  ok(isRetryable({ ok: false, status: 503 }) === true, 'a server error is worth asking again');
  ok(isRetryable({ ok: false, status: 403 }) === false,
    'an access refusal is not retried, it will refuse identically next time');
  ok(isRetryable({ ok: false, status: 404 }) === false, 'a 404 is not retried');

  const state = { hits: [], flakyHits: 0, throttleFor: 2 };
  const server = makeServer(state);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;

  try {
    // ── a throttled URL that eventually answers is a success, not a failure ──
    const flaky = await checkWithRetries(`${base}/flaky`, true);
    ok(flaky.ok === true, 'a URL that 429s twice and then answers is reported as fine',
      `${state.flakyHits} requests`);
    ok(state.flakyHits === 3, 'it retried exactly as many times as it needed to', `${state.flakyHits}`);

    // Retry-After said 1 second, twice. Obeying it means at least 2s elapsed,
    // which is the difference between honouring the header and ignoring it.
    const flakyHits = state.hits.filter((h) => h.url === '/flaky');
    const spread = flakyHits[flakyHits.length - 1].at - flakyHits[0].at;
    ok(spread >= 1800, 'it waited the Retry-After the host asked for', `${spread}ms across 3 tries`);

    // ── a host that never relents is unverified, never broken ───────────────
    const limited = await checkWithRetries(`${base}/always-limited`, true);
    ok(limited.ok === false, 'a permanently rate-limited URL is not a success');
    ok(isDecline(limited) === true, 'and it is classified as a decline, so it cannot be reported as broken',
      `status ${limited.status}`);
    ok(limited.declined === true, 'and it is marked as having exhausted its retries');

    // ── real failures still fail ────────────────────────────────────────────
    const gone = await checkWithRetries(`${base}/gone`, true);
    ok(gone.ok === false && isDecline(gone) === false, 'a genuine 404 is still reported as broken',
      `status ${gone.status}`);
    const goneHits = state.hits.filter((h) => h.url === '/gone').length;
    ok(goneHits === 1, 'and a 404 is not retried, because it is already a real answer', `${goneHits} request`);

    const notImage = await checkWithRetries(`${base}/html-not-image`, true);
    ok(notImage.ok === false && isDecline(notImage) === false,
      'a page served where an image should be is still reported as broken');

    // ── the budget bounds the run, whatever the host does ───────────────────
    //
    // This is the regression gate for the run that was killed by the runner's
    // own 25 minute timeout. Obeying Retry-After honestly makes a throttled
    // sweep slow, and slow without a ceiling is a job that gets cancelled and
    // reports nothing at all, which is worse than the red it replaced.
    //
    // A separate process, because BUDGET_MS is read once at require time. The
    // child runs its own server: spawnSync blocks the parent's event loop, so a
    // probe pointed at the parent's server times out instead of ever seeing the
    // 429, and the assertions then pass for entirely the wrong reason.
    const budgetProbe = `
      process.env.IMAGE_CHECK_BUDGET_MS = '1200';
      process.env.IMAGE_CHECK_RETRIES = '8';
      process.env.IMAGE_CHECK_TIMEOUT_MS = '5000';
      process.env.IMAGE_CHECK_MAX_RETRY_AFTER_MS = '60000';
      const http = require('http');
      const { checkWithRetries, isDecline } = require(${JSON.stringify(CHECKER)});
      let hits = 0;
      const server = http.createServer((req, res) => {
        hits++;
        res.writeHead(429, { 'Content-Type': 'text/plain', 'Retry-After': '30' });
        res.end('slow down');
      });
      server.listen(0, '127.0.0.1', () => {
        const url = 'http://127.0.0.1:' + server.address().port + '/always-limited-slow';
        const started = Date.now();
        checkWithRetries(url, true).then((r) => {
          console.log(JSON.stringify({
            ms: Date.now() - started, decline: isDecline(r), status: String(r.status), hits
          }));
          server.close();
        });
      });
    `;
    const probe = require('child_process').spawnSync(process.execPath, ['-e', budgetProbe],
      { encoding: 'utf8', timeout: 30000 });
    const probeOut = JSON.parse((probe.stdout || '{}').trim() || '{}');
    ok(probe.status === 0 && probeOut.ms !== undefined, 'the budget probe ran', probe.stderr.slice(0, 160));
    ok(probeOut.hits >= 1, 'the probe really reached its server and got the 429',
      `${probeOut.hits} request(s), status ${probeOut.status}`);
    ok(String(probeOut.status) === '429',
      'it gave up on the rate limit itself, not on a timeout', `status ${probeOut.status}`);
    ok(probeOut.ms !== undefined && probeOut.ms < 8000,
      'a host asking for a 30s wait does not blow the run budget',
      `returned after ${probeOut.ms}ms`);
    ok(probeOut.decline === true, 'and the URL it gave up on is unverified, never broken');

    // ── the per-host gate applies across concurrent workers ─────────────────
    // Six requests fired at once against one host must not arrive at once.
    // Asserted on total elapsed rather than per-request gaps. The gate spaces
    // out when each request is *issued*; arrival times at the server carry
    // scheduler jitter, so a gap assertion at millisecond resolution measures
    // the event loop rather than the pacing, and fails at random.
    state.hits.length = 0;
    const before = Date.now();
    await Promise.all(Array.from({ length: 6 }, (_, i) => checkWithRetries(`${base}/fine-${i}`, true)));
    const elapsed = Date.now() - before;
    const gapFloor = 5 * Number(process.env.IMAGE_CHECK_MIN_GAP_MS);
    ok(elapsed >= gapFloor, 'six concurrent requests to one host are spaced by the minimum gap',
      `${elapsed}ms for 6, floor ${gapFloor}ms`);
    ok(state.hits.length === 6, 'and all six still got through', `${state.hits.length} arrived`);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }

  console.log(`\n${failures ? R : G}${W}${checks - failures}/${checks} checks passed.${X}\n`);
  process.exit(failures ? 1 : 0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
