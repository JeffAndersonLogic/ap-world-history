#!/usr/bin/env node
'use strict';
// The site lives at https://behistorical.com/. Offline and in the push gate.
//
// GitHub Pages serves main from the branch, and the one-line CNAME file at the
// root is what puts it on the custom domain. Deleting or editing that file moves
// every student back to jeffandersonlogic.github.io in one push, and because a
// browser keeps saved work per address, their work would look missing there.
// Nothing else in the repo would notice. So: the file must say exactly
// behistorical.com, the Canvas links the builder prints must use the same
// address, and no file may hand out a link to the old address, which only works
// now because GitHub redirects it.

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const DOMAIN = 'behistorical.com';
// Built in two pieces so this file does not trip its own check.
const OLD = 'https://' + 'jeffandersonlogic.github.io';

let failed = 0;
function ok(name, fn) {
  try { fn(); console.log(`  PASS  ${name}`); }
  catch (e) { failed += 1; console.log(`  FAIL  ${name}\n        ${e.message.split('\n').join('\n        ')}`); }
}

function cnameProblem(text) {
  if (text == null) return 'CNAME is missing';
  const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
  if (lines.length !== 1 || lines[0].trim() !== DOMAIN) return `CNAME must hold exactly "${DOMAIN}", found ${JSON.stringify(text)}`;
  return null;
}

function baseUrlProblem(source) {
  const m = source.match(/^const BASE_URL = '([^']*)';/m);
  if (!m) return 'BASE_URL not found in scripts/build-canvas-events.js';
  if (m[1] !== `https://${DOMAIN}`) return `BASE_URL is ${m[1]}, expected https://${DOMAIN}`;
  return null;
}

function oldLinkLines(text) {
  return text.split('\n').map((l, i) => [i + 1, l]).filter(([, l]) => l.includes(OLD));
}

const SKIP_DIRS = new Set(['.git', 'node_modules', 'archive']);
const TEXT_EXT = /\.(html?|js|mjs|cjs|json|md|css|ya?ml|txt|xml|svg)$/i;
function walk(dir, out) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (TEXT_EXT.test(ent.name)) out.push(p);
  }
  return out;
}

const cnamePath = path.join(ROOT, 'CNAME');
const cname = fs.existsSync(cnamePath) ? fs.readFileSync(cnamePath, 'utf8') : null;
const builder = fs.readFileSync(path.join(ROOT, 'scripts', 'build-canvas-events.js'), 'utf8');

console.log('custom domain');
ok('CNAME holds exactly behistorical.com', () => assert.strictEqual(cnameProblem(cname), null, cnameProblem(cname)));
ok('Canvas builder links use https://behistorical.com', () => assert.strictEqual(baseUrlProblem(builder), null, baseUrlProblem(builder)));
ok('no file outside archive/ links to the old github.io address', () => {
  const hits = [];
  for (const f of walk(ROOT, [])) {
    for (const [n, l] of oldLinkLines(fs.readFileSync(f, 'utf8'))) hits.push(`${path.relative(ROOT, f)}:${n}  ${l.trim().slice(0, 120)}`);
  }
  assert.deepStrictEqual(hits, [], `old address still linked:\n${hits.join('\n')}`);
});

console.log('negative controls');
ok('a missing CNAME fails', () => assert.ok(cnameProblem(null)));
ok('an empty CNAME fails', () => assert.ok(cnameProblem('\n')));
ok('a www CNAME fails', () => assert.ok(cnameProblem('www.behistorical.com\n')));
ok('a two-line CNAME fails', () => assert.ok(cnameProblem('behistorical.com\nexample.com\n')));
ok('the old BASE_URL fails', () => assert.ok(baseUrlProblem(`const BASE_URL = '${OLD}/ap-world-history';`)));
ok('a missing BASE_URL fails', () => assert.ok(baseUrlProblem('const OTHER = 1;')));
ok('an old-address link is found', () => assert.strictEqual(oldLinkLines(`<a href="${OLD}/ap-world-history/index.html">`).length, 1));
ok('a behistorical.com link is not flagged', () => assert.strictEqual(oldLinkLines('<a href="https://behistorical.com/index.html">').length, 0));

if (failed) { console.log(`\n${failed} failed`); process.exit(1); }
console.log('\nall passed');
