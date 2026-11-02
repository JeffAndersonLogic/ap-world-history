#!/usr/bin/env node
/**
 * canvas-paste-page.test.js
 *
 * docs/canvas/calendar-events.html and assignments.html put a Copy button
 * beside every Canvas block. The danger is the one BeCurrent named for its own
 * pair: the code fence in the .md and the box behind the Copy button could
 * hand the teacher two different events, both render, and nothing says which
 * is right. The builder renders both from one string; this proves it stayed
 * that way, and that the preview is that same string rendered.
 *
 * Negative controls show each check can fail before its green is trusted.
 *
 *   node scripts/test/canvas-paste-page.test.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const G = '\x1b[32m', R = '\x1b[31m', W = '\x1b[1m', X = '\x1b[0m';
let failed = 0;
function ok(label, cond, detail) {
  if (cond) console.log(`  ${G}PASS${X}  ${label}${detail ? '  (' + detail + ')' : ''}`);
  else { failed++; console.log(`  ${R}FAIL${X}  ${label}${detail ? '  (' + detail + ')' : ''}`); }
}

function unescape(s) {
  return s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}
function mdBlocks(md) {
  const out = [];
  const re = /```html\n([\s\S]*?)\n```/g;
  let m;
  while ((m = re.exec(md))) out.push(m[1]);
  return out;
}
function pageBlocks(html) {
  const boxes = [];
  const re = /<textarea id="html-\d+"[^>]*>([\s\S]*?)<\/textarea>/g;
  let m;
  while ((m = re.exec(html))) boxes.push(unescape(m[1]));
  const previews = [];
  const pre = /<div class="preview">\n([\s\S]*?)\n  <\/div>\n  <\/details>/g;
  while ((m = pre.exec(html))) previews.push(m[1]);
  return { boxes, previews };
}

/* The comparison, as a function, so the negative controls run the very code
   the real check runs. */
function compare(md, html) {
  const want = mdBlocks(md);
  const { boxes, previews } = pageBlocks(html);
  const problems = [];
  if (!want.length) problems.push('the .md has no html blocks');
  if (boxes.length !== want.length) problems.push(`${boxes.length} copy boxes for ${want.length} .md blocks`);
  if (previews.length !== boxes.length) problems.push(`${previews.length} previews for ${boxes.length} boxes`);
  for (let i = 0; i < Math.min(boxes.length, want.length); i++) {
    if (boxes[i] !== want[i]) { problems.push(`copy box ${i + 1} differs from .md block ${i + 1}`); break; }
  }
  for (let i = 0; i < Math.min(previews.length, boxes.length); i++) {
    if (previews[i] !== boxes[i]) { problems.push(`preview ${i + 1} is not its copy box rendered`); break; }
  }
  return problems;
}

console.log(`\n${W}The Canvas paste pages carry the .md blocks byte for byte${X}\n`);

for (const name of ['calendar-events', 'assignments']) {
  const md = fs.readFileSync(path.join(ROOT, 'docs', 'canvas', name + '.md'), 'utf8');
  const html = fs.readFileSync(path.join(ROOT, 'docs', 'canvas', name + '.html'), 'utf8');
  const problems = compare(md, html);
  ok(`${name}.html: every Copy box and preview is its .md block`, !problems.length,
    problems.join('; ') || `${mdBlocks(md).length} blocks`);

  ok(`${name}.html makes no network request of its own`,
    !/<link\b[^>]*stylesheet|@import|fetch\(|XMLHttpRequest|<script\s+src=/i.test(html));

  // Negative controls: a changed byte in one box, a dropped block, a stale preview.
  const blocks = mdBlocks(md);
  const target = blocks[blocks.length - 1];
  const tampered = html.replace(/(<textarea id="html-\d+"[^>]*>)([\s\S]*?)(<\/textarea>)(?![\s\S]*<textarea id="html-)/,
    (all, a, body, c) => a + body.replace('OVERVIEW', 'OVERVIEW ') + c);
  ok(`  negative control: one changed byte in a Copy box fails`, tampered !== html && compare(md, tampered).length > 0);
  const dropped = md.replace('```html\n' + target + '\n```', '');
  ok(`  negative control: a block missing from the .md fails`, compare(dropped, html).length > 0);
  const stale = html.replace(/(<div class="preview">\n)([\s\S]*?)(\n  <\/div>\n  <\/details>)/,
    (all, a, body, c) => a + body.replace('<tbody>', '<tbody><tr><td>stale</td></tr>') + c);
  ok(`  negative control: a preview that is not its box fails`, stale !== html && compare(md, stale).length > 0);
}

console.log('');
if (failed) { console.log(`${R}${W}${failed} check(s) failed.${X}\n`); process.exit(1); }
console.log(`${G}${W}Canvas paste pages: all checks passed.${X}\n`);
