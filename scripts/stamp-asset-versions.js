#!/usr/bin/env node
'use strict';

/*
 * Stamp every cache-busting ?v= tag with a fingerprint of what it points at.
 *
 * WHY THIS EXISTS
 *
 * Every lesson shell loads its data with `?v=<something>` so a browser fetches
 * the new file instead of a cached one. Those values were typed by hand, which
 * meant every content change needed a second, manual edit to the tag, in every
 * file that pointed at the changed one. Forgetting it left students on a cached
 * copy; remembering it produced strings of "Force refresh" commits (Topic 2.3,
 * 2026-09-22, ran about ten of them in one afternoon). A value a person has to
 * remember to change is a value that is eventually wrong.
 *
 * WHAT IT DOES
 *
 * It replaces the VALUE of every existing `?v=` tag on a local .html/.js/.css
 * reference with a short hash of the target's content, and the target's own
 * versions, recursively. So editing assets/data/lesson-2-3-indian-ocean.js
 * changes that file's tag in the lesson shell, which changes the shell, which
 * changes the shell's tag on the Unit 2 hub. Nothing else in any file is touched:
 * no tag is added where none existed, and no character outside a tag's value
 * moves. The self-redirect key some shells carry (`var k='...'`) is stamped
 * with that shell's own version, so it always matches the links pointing in.
 *
 * WHERE IT RUNS
 *
 * At deploy time only, inside the Pages workflow, on the CI checkout. It never
 * rewrites the repository. That is deliberate: the tags in the source stay
 * whatever a person or tool left there, so an edit made in the GitHub web editor
 * or by an agent that cannot run node is never failed for a stale tag. The
 * deployed site is what gets the correct values.
 *
 *   node scripts/stamp-asset-versions.js            report what would change
 *   node scripts/stamp-asset-versions.js --write    rewrite in place (CI only)
 *
 * scripts/test/asset-versions.test.js proves the stamp changes nothing but tag
 * values, is deterministic, and propagates a leaf change to everything above it.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['.git', 'node_modules', 'scripts', '.github', '.claude', '_site']);
const EXTS = new Set(['.html', '.js', '.css']);

// A quoted local path to a page, script or stylesheet, followed by ?v=VALUE.
// The quote before the path keeps this to attribute values and string literals.
const TAG = /(["'])([^"'\s?#<>]+?\.(?:html|js|css))\?v=([A-Za-z0-9._-]*)/g;
// The self-redirect a shell uses to bust its own cached HTML.
const SELF_KEY = /(var k=')([A-Za-z0-9._-]*)(';var u=new URL\(window\.location\.href\);if\(u\.searchParams\.get\('v'\)!==k\))/g;

function walk(root) {
  const out = [];
  (function rec(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) rec(path.join(dir, entry.name));
      } else if (EXTS.has(path.extname(entry.name))) {
        out.push(path.relative(root, path.join(dir, entry.name)).split(path.sep).join('/'));
      }
    }
  })(root);
  return out.sort();
}

function isRemote(p) {
  return p.includes('://') || p.startsWith('//') || p.includes('${') || p.startsWith('data:');
}

function normalize(text) {
  return text.replace(TAG, (m, q, p) => `${q}${p}?v=`).replace(SELF_KEY, (m, a, v, b) => `${a}${b}`);
}

/**
 * Work out every file's version and the stamped text of every file whose text
 * would change. `overrides` maps a repo-relative path to replacement content,
 * which is how the test changes a leaf without touching the disk.
 */
function plan(root = ROOT, overrides = {}) {
  const files = walk(root);
  const known = new Set(files);
  const read = rel => (rel in overrides ? overrides[rel] : fs.readFileSync(path.join(root, rel), 'utf8'));
  const htmlDirs = [...new Set(files.filter(f => f.endsWith('.html')).map(f => path.posix.dirname(f)))].sort();
  const text = new Map(files.map(f => [f, read(f)]));

  function resolve(from, ref) {
    const clean = decodeURIComponent(ref);
    const tryBase = base => {
      const rel = path.posix.normalize(path.posix.join(base, clean));
      return known.has(rel) ? rel : null;
    };
    // The file's own folder, then its parents: covers HTML attributes and a
    // teacher/data wrapper whose document.write paths resolve from teacher/.
    let dir = path.posix.dirname(from);
    for (;;) {
      const hit = tryBase(dir);
      if (hit) return hit;
      if (dir === '.' || dir === '') break;
      dir = path.posix.dirname(dir);
    }
    // A string in a data file resolves against whichever page loads it, e.g.
    // an embedUrl in assets/data/ resolves from unit-2/. Accept only a unique hit.
    const hits = [...new Set(htmlDirs.map(tryBase).filter(Boolean))];
    return hits.length === 1 ? hits[0] : null;
  }

  const deps = new Map();
  const unresolved = [];
  for (const f of files) {
    const set = new Set();
    for (const m of text.get(f).matchAll(TAG)) {
      if (isRemote(m[2])) continue;
      const target = resolve(f, m[2]);
      if (target) set.add(target);
      else unresolved.push(`${f}: ${m[2]}`);
    }
    deps.set(f, [...set].sort());
  }

  const version = new Map();
  const visiting = new Set();
  function versionOf(f) {
    if (version.has(f)) return version.get(f);
    visiting.add(f);
    const parts = [normalize(text.get(f))];
    for (const d of deps.get(f)) parts.push(`${d}:${visiting.has(d) ? 'cycle' : versionOf(d)}`);
    visiting.delete(f);
    const v = crypto.createHash('sha256').update(parts.join('\n')).digest('hex').slice(0, 10);
    version.set(f, v);
    return v;
  }
  files.forEach(versionOf);

  const changed = new Map();
  for (const f of files) {
    const before = text.get(f);
    const after = before
      .replace(TAG, (m, q, p, v) => {
        if (isRemote(p)) return m;
        const target = resolve(f, p);
        return target ? `${q}${p}?v=${version.get(target)}` : m;
      })
      .replace(SELF_KEY, (m, a, v, b) => `${a}${version.get(f)}${b}`);
    if (after !== before) changed.set(f, { before, after });
  }
  return { files, deps, version, changed, unresolved, normalize };
}

module.exports = { plan, normalize, TAG, SELF_KEY };

if (require.main === module) {
  const write = process.argv.includes('--write');
  const result = plan(ROOT);
  if (write) {
    for (const [f, { after }] of result.changed) fs.writeFileSync(path.join(ROOT, f), after);
  }
  console.log(`${result.changed.size} file(s) ${write ? 'stamped' : 'would be stamped'}, ${result.files.length} scanned.`);
  if (result.unresolved.length) {
    console.log(`${result.unresolved.length} tag(s) left as written because the target could not be found uniquely:`);
    for (const u of result.unresolved.slice(0, 40)) console.log(`  ${u}`);
  }
}
