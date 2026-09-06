'use strict';
// The one place this repo talks to the Commons API.
//
// Two callers, asking two different questions:
//
//   check-image-urls.js   "do these 300 files still exist", in batches, so a
//                         nightly sweep is eight requests rather than 300.
//   source-evidence-images.js
//                         "does this one proposed filename exist, and if not,
//                         what files does Commons actually have for this
//                         subject", before anything reaches a lesson page.
//
// One implementation for the same reason canvas-parse-core.js is inlined into
// the Skills Lens rather than copied: two copies eventually give two different
// answers about whether a picture exists, and nothing tells you which one a
// student's browser agreed with.
//
// **The API answers "does this file exist on Commons", which is not "does the
// URL a student's browser hits return image bytes."** A thumbnail name handed to
// Special:FilePath earns HTTP 400 while the underlying file is perfectly fine.
// Both callers treat an API yes as a narrowing of the work, never as the final
// answer: check-image-urls.js still fetches a rotating sample, and
// source-evidence-images.js fetches every candidate it is about to apply.

const https = require('https');
const http = require('http');

const COMMONS_API = process.env.IMAGE_CHECK_API
  || 'https://commons.wikimedia.org/w/api.php';
const USER_AGENT = 'BeHistorical-image-check/2.0 (AP World History course validator)';
const DEFAULT_TIMEOUT_MS = 20000;

// The file title inside a Commons URL, or null when this is not one.
function commonsTitle(url) {
  const m = String(url).match(/\/(?:Special:(?:FilePath|Redirect)\/(?:file\/)?|wiki\/File:)([^?#]+)/i);
  if (!m) return null;
  try { return decodeURIComponent(m[1]).replace(/_/g, ' ').trim(); }
  catch { return m[1].replace(/_/g, ' ').trim(); }
}

function getJson(url, timeoutMs) {
  return new Promise((resolve) => {
    const agent = url.startsWith('http://') ? http : https;
    const request = agent.request(url, { method: 'GET', headers: {
      'User-Agent': USER_AGENT,
      Accept: 'application/json'
    } }, (response) => {
      if (response.statusCode !== 200) { response.resume(); return resolve(null); }
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (c) => { body += c; });
      response.on('end', () => { try { resolve(JSON.parse(body)); } catch { resolve(null); } });
    });
    request.setTimeout(timeoutMs || DEFAULT_TIMEOUT_MS, () => { request.destroy(); resolve(null); });
    request.on('error', () => resolve(null));
    request.end();
  });
}

/**
 * Asks Commons about a batch of titles. Returns a Map of title -> true/false
 * for the ones it answered about, and an empty Map when the call failed, which
 * leaves every URL to the direct path rather than guessing.
 */
async function askCommons(titles, endpoint, timeoutMs) {
  const known = new Map();
  const query = `${endpoint || COMMONS_API}?action=query&format=json&formatversion=2&prop=imageinfo`
    + `&iiprop=url|mime&titles=${encodeURIComponent(titles.map(t => `File:${t}`).join('|'))}`;
  const data = await getJson(query, timeoutMs);
  const pages = data && data.query && data.query.pages;
  if (!Array.isArray(pages)) return known;

  // Commons rewrites titles it normalized or followed a redirect for, so the
  // answer has to be mapped back to what was asked rather than matched by name.
  const back = new Map();
  for (const kind of ['normalized', 'redirects']) {
    for (const row of (data.query[kind] || [])) back.set(row.to, row.from);
  }
  const asked = new Set(titles.map(t => `File:${t}`));
  for (const page of pages) {
    let title = page.title;
    while (back.has(title) && !asked.has(title)) title = back.get(title);
    known.set(String(title).replace(/^File:/, ''), !page.missing);
  }
  return known;
}

/**
 * Searches the File namespace. Returns an array of `{ file, page }`, newest
 * relevance first, or an empty array when the call failed.
 *
 * This exists so that a filename written from memory is a starting point rather
 * than a commitment: a dead guess becomes a list of files Commons really has,
 * which a person then looks at. It deliberately returns candidates and never
 * picks one. A file that resolves is not the same thing as a file that shows
 * what the caption claims, and only a person can settle the second question.
 */
async function searchFiles(query, limit, endpoint, timeoutMs) {
  const url = `${endpoint || COMMONS_API}?action=query&format=json&formatversion=2`
    + `&list=search&srnamespace=6&srlimit=${Number(limit) || 8}`
    + `&srsearch=${encodeURIComponent(query)}`;
  const data = await getJson(url, timeoutMs);
  const hits = data && data.query && data.query.search;
  if (!Array.isArray(hits)) return [];
  return hits.map(hit => {
    const file = String(hit.title).replace(/^File:/, '');
    return { file, page: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}` };
  });
}

module.exports = { COMMONS_API, USER_AGENT, commonsTitle, getJson, askCommons, searchFiles };
