#!/usr/bin/env node
'use strict';

/**
 * Serves every Wikimedia Commons picture from this site instead of hotlinking it.
 *
 *   node scripts/mirror-commons-images.js            list what would change
 *   node scripts/mirror-commons-images.js --fetch    download missing copies (needs Commons)
 *   node scripts/mirror-commons-images.js --rewrite  point every link at its copy (offline)
 *
 * WHY
 *
 * On 2026-10-21 the Evidence Labs of 3.1, 3.2 and 3.3 showed fallback art in
 * class on every card. Every file existed on Commons; the browsers in the room
 * were refused it. A school network is one address with thirty students behind
 * it, and Commons rate-limits by address, so a hotlinked picture can be fine at
 * home and gone in class. The Teaching OS decks had already moved to repo-local
 * pictures for the same reason. This does it for everything else.
 *
 * HOW
 *
 * Each Commons file gets one copy in assets/images/commons/, named from its
 * Commons title plus a short hash so two titles can never collide, saved at
 * 1280px wide at most (an SVG is kept as the original). manifest.json records,
 * for each copy, the Commons title, its file page, and the author and license
 * Commons reported, because several are CC BY or CC BY-SA and the copy has to
 * be creditable without a network.
 *
 * --fetch needs a network that can reach Commons, which the authoring sandbox
 * cannot (HTTP 429); .github/workflows/mirror-commons-images.yml runs it on a
 * GitHub runner and commits the copies. --rewrite is offline and deterministic,
 * and only rewrites a link whose copy is already on disk.
 *
 * /wiki/File: links are credit pages, not pictures, and are left alone: they are
 * where a student or teacher goes to see who made a picture.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const DIR = 'assets/images/commons';
const MANIFEST = path.join(ROOT, DIR, 'manifest.json');
const UA = 'BeHistorical/1.0 (https://jeffandersonlogic.github.io/ap-world-history/; classroom course site)';
const WIDTH = 1280;

// A picture link to Commons, in either of the forms the course uses.
const LINK = /https?:\/\/(?:commons\.wikimedia\.org\/wiki\/Special:(?:FilePath|Redirect\/file)\/|upload\.wikimedia\.org\/wikipedia\/(?:commons|en)\/)(?:[^'"\s<>\\`]|\\'|'(?=s[,_]))+/g;

// Titles often carry parentheses, and a link inside CSS url(...) is followed by
// one, so a trailing ")" belongs to the link only while it closes one opened in
// it. A link assembled from a template (`${name}`) is code, not a picture.
function findLinks(src) {
  const out = [];
  for (let url of src.match(LINK) || []) {
    url = url.replace(/[,;]+$/, '');
    while (url.endsWith(')') && (url.split('(').length < url.split(')').length)) url = url.slice(0, -1);
    if (!url.includes('${')) out.push(url);
  }
  return out;
}

// Generators whose output is checked for drift, so their links move with it.
const SCRIPT_SOURCES = new Set(['scripts/build-unit6.js', 'scripts/build-unit9.js']);
const SKIP_DIRS = new Set(['.git', 'node_modules', 'archive', 'docs', 'scripts']);

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name) && dir === ROOT) continue;
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (/\.(html|js|css)$/i.test(e.name)) out.push(full);
  }
  return out;
}

function sourceFiles() {
  return walk(ROOT).map((f) => path.relative(ROOT, f).split(path.sep).join('/'))
    .concat([...SCRIPT_SOURCES])
    .filter((f) => fs.existsSync(path.join(ROOT, f)))
    .sort();
}

// The Commons title a link names, with underscores, decoded.
function titleOf(url) {
  let name;
  const fp = url.match(/Special:(?:FilePath|Redirect\/file)\/([^?#]+)/);
  if (fp) name = fp[1];
  else {
    const parts = url.split(/[?#]/)[0].split('/');
    const thumb = parts.indexOf('thumb');
    name = thumb >= 0 ? parts[thumb + 3] : parts[parts.length - 1];
  }
  name = name.replace(/\\'/g, "'");
  let decoded = name;
  try { decoded = decodeURIComponent(name); } catch (_) { /* keep raw */ }
  decoded = decoded.replace(/ /g, '_');
  return decoded.charAt(0).toUpperCase() + decoded.slice(1);
}

function extFor(title) {
  const ext = (title.match(/\.([A-Za-z0-9]+)$/) || [, ''])[1].toLowerCase();
  if (ext === 'jpeg' || ext === 'jpg') return 'jpg';
  if (['png', 'gif', 'svg', 'webp'].includes(ext)) return ext;
  return 'jpg'; // tif, pdf, djvu: Commons serves a JPEG rendering
}

function localName(title) {
  const stem = title.replace(/\.[A-Za-z0-9]+$/, '')
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70).replace(/-+$/, '');
  const hash = crypto.createHash('sha1').update(title).digest('hex').slice(0, 6);
  return `${stem || 'image'}-${hash}.${extFor(title)}`;
}

// Where a link's page sits decides the relative path to assets/.
function prefixFor(file) {
  if (!file.includes('/')) return '';
  if (/^beintheroom\/[^/]+\/[^/]+$/.test(file)) return '../../';
  return '../';
}

function plan() {
  const titles = new Map();   // title -> Set(files)
  const edits = new Map();    // file -> [url]
  for (const file of sourceFiles()) {
    const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const found = findLinks(src);
    if (!found.length) continue;
    edits.set(file, [...new Set(found)]);
    for (const url of found) {
      const t = titleOf(url);
      if (!titles.has(t)) titles.set(t, new Set());
      titles.get(t).add(file);
    }
  }
  return { titles, edits };
}

// ── fetch ────────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function get(url, redirects = 0) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': UA } }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects < 6) {
        res.resume();
        resolve(get(new URL(res.headers.location, url).href, redirects + 1));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, type: res.headers['content-type'] || '', retryAfter: res.headers['retry-after'], body: Buffer.concat(chunks) }));
    });
    req.setTimeout(60000, () => req.destroy(new Error('timeout')));
    req.on('error', (e) => resolve({ status: 0, type: '', body: Buffer.alloc(0), error: e.message }));
  });
}

async function download(title) {
  const enc = encodeURIComponent(title);
  const url = extFor(title) === 'svg'
    ? `https://commons.wikimedia.org/wiki/Special:FilePath/${enc}`
    : `https://commons.wikimedia.org/wiki/Special:FilePath/${enc}?width=${WIDTH}`;
  for (let attempt = 1; attempt <= 6; attempt++) {
    const r = await get(url);
    if (r.status === 200 && /^image\//.test(r.type) && r.body.length > 0) return r.body;
    if (r.status === 404) return null;
    const wait = r.retryAfter ? Math.min(Number(r.retryAfter) * 1000 || 30000, 120000) : attempt * 10000;
    console.log(`  ${r.status || r.error} for ${title}, waiting ${wait / 1000}s`);
    await sleep(wait);
  }
  return null;
}

async function metadata(titles) {
  const out = {};
  for (let i = 0; i < titles.length; i += 50) {
    const batch = titles.slice(i, i + 50);
    const q = new URLSearchParams({
      action: 'query', format: 'json', prop: 'imageinfo', iiprop: 'extmetadata',
      iiextmetadatafilter: 'LicenseShortName|Artist', titles: batch.map((t) => `File:${t}`).join('|')
    });
    for (let attempt = 1; attempt <= 4; attempt++) {
      const r = await get(`https://commons.wikimedia.org/w/api.php?${q}`);
      if (r.status !== 200) { await sleep(attempt * 10000); continue; }
      const data = JSON.parse(r.body.toString('utf8'));
      const norm = new Map(((data.query && data.query.normalized) || []).map((n) => [n.to, n.from]));
      for (const p of Object.values((data.query && data.query.pages) || {})) {
        const asked = (norm.get(p.title) || p.title).replace(/^File:/, '').replace(/ /g, '_');
        const meta = (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].extmetadata) || {};
        const strip = (v) => String((v && v.value) || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        out[asked] = { license: strip(meta.LicenseShortName), artist: strip(meta.Artist).slice(0, 200) };
      }
      break;
    }
    await sleep(1000);
  }
  return out;
}

async function fetchAll() {
  const { titles } = plan();
  fs.mkdirSync(path.join(ROOT, DIR), { recursive: true });
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
  const missing = [...titles.keys()].filter((t) => !fs.existsSync(path.join(ROOT, DIR, localName(t))));
  console.log(`${titles.size} Commons pictures, ${missing.length} to download`);
  const failed = [];
  for (const t of missing) {
    const body = await download(t);
    if (body) fs.writeFileSync(path.join(ROOT, DIR, localName(t)), body);
    else failed.push(t);
    console.log(`${body ? 'saved ' : 'FAILED'} ${localName(t)}`);
    await sleep(700);
  }
  const meta = await metadata([...titles.keys()].filter((t) => !(manifest[localName(t)] && manifest[localName(t)].license)));
  for (const t of titles.keys()) {
    const name = localName(t);
    if (!fs.existsSync(path.join(ROOT, DIR, name))) continue;
    manifest[name] = Object.assign({
      title: t,
      filePage: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(t)}`
    }, manifest[name] || {}, meta[t] || {});
  }
  const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
  fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
  console.log(`\n${missing.length - failed.length} saved, ${failed.length} failed`);
  for (const t of failed) console.log(`  not saved: ${t}`);
  return failed.length ? 1 : 0;
}

// ── rewrite ──────────────────────────────────────────────────────────────────

function rewrite() {
  const { edits } = plan();
  let changed = 0;
  const unresolved = new Set();
  for (const [file, urls] of edits) {
    const full = path.join(ROOT, file);
    let src = fs.readFileSync(full, 'utf8');
    const before = src;
    for (const url of urls.sort((a, b) => b.length - a.length)) {
      const name = localName(titleOf(url));
      if (!fs.existsSync(path.join(ROOT, DIR, name))) { unresolved.add(`${titleOf(url)} (${file})`); continue; }
      // A link that credits a picture goes to its Commons file page; a link
      // that draws one goes to the copy.
      const local = `${prefixFor(file)}${DIR}/${name}`;
      const page = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(titleOf(url))}`;
      src = src.split(url).map((part, i, all) => (i === all.length - 1 ? part
        : part + (/\b(?:sourceUrl|source|href)\s*[:=]\s*\\?['"]?$/.test(part.slice(-40)) ? page : local))).join('');
    }
    if (src !== before) { fs.writeFileSync(full, src); changed += 1; }
  }
  console.log(`${changed} files rewritten`);
  for (const u of unresolved) console.log(`  no local copy yet: ${u}`);
  return unresolved.size ? 1 : 0;
}

if (require.main === module) {
  const arg = process.argv[2];
  if (arg === '--fetch') fetchAll().then((c) => process.exit(c));
  else if (arg === '--rewrite') process.exit(rewrite());
  else {
    const { titles, edits } = plan();
    const have = [...titles.keys()].filter((t) => fs.existsSync(path.join(ROOT, DIR, localName(t)))).length;
    console.log(`${titles.size} Commons pictures linked from ${edits.size} files; ${have} already have a local copy.`);
  }
}

// For a generator: the local path a page one folder deep uses for a Commons
// file, and the file page that credits it.
const commonsCopy = (name) => `../${DIR}/${localName(titleOf(`Special:FilePath/${name}`))}`;
const commonsPage = (name) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(titleOf(`Special:FilePath/${name}`))}`;
function pageForCopy(localPath) {
  const name = String(localPath || '').split('/').pop();
  const m = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
  return m[name] ? m[name].filePage : localPath;
}

module.exports = { commonsCopy, commonsPage, pageForCopy, LINK, findLinks, titleOf, localName, prefixFor, plan, sourceFiles };
