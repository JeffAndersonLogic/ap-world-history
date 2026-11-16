#!/usr/bin/env node
/**
 * The Class Pulse Reader is generated, and this keeps it honest (offline suite).
 *
 * The Reader (teacher/reader/class-pulse-reader.artifact.html) is the page published in
 * the teacher's Claude for Teachers account. It reads and checks answers with the
 * engine and the handoff themselves, inlined by scripts/build-class-pulse-reader.js.
 * If either changes and the Reader is not rebuilt, the two pages disagree about what a
 * valid reading is, and nothing on screen shows it. So: the committed file must be
 * exactly what the builder produces now.
 */
'use strict';
const assert = require('assert');
const fs = require('fs');
const { build, OUT } = require('../build-class-pulse-reader.js');

const page = build();
assert.ok(fs.existsSync(OUT), 'the Reader has not been built: node scripts/build-class-pulse-reader.js');
assert.equal(fs.readFileSync(OUT, 'utf8'), page, 'the Reader is out of date: run node scripts/build-class-pulse-reader.js, then publish it again');
assert.ok(page.includes('BHClassPulseEngine') && page.includes('BHClassPulseHandoff'), 'the Reader carries the engine and the handoff');
assert.ok(!/<!doctype|<html[\s>]|<body[\s>]/i.test(page), 'the Reader is a fragment the publisher wraps');
assert.ok(!/<script[^>]+src=/i.test(page), 'the Reader loads no script from anywhere');
// It asks Claude and nothing else: no data store, no shared state, no files, no connectors.
assert.deepEqual([...new Set((page.match(/claude\.use\('([a-z]+)'\)/g) || []))], ["claude.use('sample')"], 'the Reader uses only the sample capability');
assert.ok(!/localStorage|sessionStorage|indexedDB/.test(page.slice(page.lastIndexOf('<script>'))), 'the Reader\'s own code keeps nothing in the browser');

// Negative control: a Reader built from an older engine must be caught.
const stale = page.replace('const MIN_PIECE = 6;', 'const MIN_PIECE = 5;');
assert.notEqual(stale, page, 'the control no longer finds its line in the engine');
assert.throws(() => assert.equal(stale, build()), 'a stale Reader went unnoticed');

console.log('PASS the Class Pulse Reader is the current engine and handoff, a fragment, sample only, 1 negative control red');
