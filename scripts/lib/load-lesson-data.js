'use strict';

/**
 * load-lesson-data.js
 *
 * Loads a BeHistorical lesson data file (assets/data/lesson-N-N-*.js) in a
 * sandbox with a minimal DOM stub, and returns the window.BEHISTORICAL_LESSON
 * object. Lesson data files run a small IIFE at load time that injects the
 * brand-lock stylesheet via document.*, so a stub is required to evaluate
 * them outside a browser.
 *
 * This is deliberately dependency-free so it can be reused by validation,
 * scoring, and any future eval-loop tooling.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'assets', 'data');

// ── Minimal DOM stub ──────────────────────────────────────────────────────────
function makeElement() {
  return {
    rel: '', href: '', src: '', id: '', className: '',
    style: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    setAttribute() {}, getAttribute() { return null; },
    appendChild() {}, append() {}, removeChild() {},
    addEventListener() {}, removeEventListener() {},
    querySelector() { return null; }, querySelectorAll() { return []; },
  };
}

function makeDocument() {
  const head = makeElement();
  const body = makeElement();
  return {
    head, body,
    querySelector() { return null; },
    querySelectorAll() { return []; },
    getElementById() { return null; },
    createElement() { return makeElement(); },
    addEventListener() {}, removeEventListener() {},
  };
}

/**
 * Resolve a topic id (e.g. "6.2" or "1.1") to its lesson data file path.
 * Excludes renderer-config and standards-addon companion files.
 */
function resolveDataFile(topicId) {
  const slug = String(topicId).replace('.', '-');
  const prefix = `lesson-${slug}-`;
  const matches = fs.readdirSync(DATA).filter((name) =>
    name.startsWith(prefix) &&
    name.endsWith('.js') &&
    !name.endsWith('-renderer-config.js') &&
    !name.endsWith('-standards-addon.js'));
  if (matches.length === 0) {
    throw new Error(`No lesson data file found for topic ${topicId} (looked for ${prefix}*.js)`);
  }
  if (matches.length > 1) {
    throw new Error(`Ambiguous topic ${topicId}: ${matches.join(', ')}`);
  }
  return path.join(DATA, matches[0]);
}

/** Load and return the lesson object for a topic id or an absolute file path. */
function loadLesson(topicIdOrPath) {
  const filePath = topicIdOrPath.includes('/') || topicIdOrPath.endsWith('.js')
    ? path.resolve(topicIdOrPath)
    : resolveDataFile(topicIdOrPath);
  const src = fs.readFileSync(filePath, 'utf8');
  const ctx = {};
  ctx.window = ctx;
  ctx.document = makeDocument();
  ctx.URLSearchParams = URLSearchParams;
  ctx.console = console;
  vm.runInNewContext(src, ctx, { filename: filePath });
  const lesson = ctx.window.BEHISTORICAL_LESSON;
  if (!lesson) {
    throw new Error(`${path.basename(filePath)} did not define window.BEHISTORICAL_LESSON`);
  }
  return { lesson, filePath };
}

module.exports = { loadLesson, resolveDataFile, ROOT, DATA };
