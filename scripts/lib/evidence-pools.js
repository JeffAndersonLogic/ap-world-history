'use strict';
// One resolver for "what evidence does Module 07 actually put in front of a
// student on this topic", used by both the contract check and the authenticity
// report so the two cannot answer that question differently.
//
// It has to resolve three different paths, because Module 07 is mid-migration:
//
//   authored   the topic's renderer config (or its data file) declares
//              lesson.images. This is the target shape. Units 1-2 and Unit 7.
//   registry   the shell loads assets/data/module-07-evidence-unit-N.js plus
//              assets/js/module-07-evidence-runtime.js, and the runtime REPLACES
//              lesson.images at load. Units 5, 6, 8, 9 until they are converted.
//   foundations  the Foundations data file carries evidenceLab.items.
//
// Everything here is a static read of the authored source. Nothing is executed:
// the configs touch the DOM at load, and a resolver that needed a browser to say
// what a lesson contains could not run in the offline suite.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');

// Pull a balanced [...] or {...} literal that follows `label` and evaluate it.
function literalAfter(source, label, open, close) {
  const at = source.lastIndexOf(label);
  if (at < 0) return null;
  const start = source.indexOf(open, at);
  if (start < 0) return null;
  let depth = 0;
  for (let i = start; i < source.length; i += 1) {
    if (source[i] === open) depth += 1;
    else if (source[i] === close) {
      depth -= 1;
      if (!depth) {
        try {
          return vm.runInNewContext(`(${source.slice(start, i + 1)})`, {}, { timeout: 2000 });
        } catch (err) {
          return null;
        }
      }
    }
  }
  return null;
}

function readIfPresent(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

// Topics are enumerated from the lesson shells, and each shell names its own
// scripts, in load order. That is what the browser reads, so it is what this
// reads: guessing a data filename from a topic number picks up files no shell
// loads (a standards add-on, an abandoned draft) and reports on a lesson nobody
// is served.
function unitTopics() {
  const topics = [];
  for (const unitDir of fs.readdirSync(ROOT).filter(name => /^unit-\d+$/.test(name)).sort()) {
    const unit = Number(unitDir.slice(5));
    const dir = path.join(ROOT, unitDir);
    for (const name of fs.readdirSync(dir).sort()) {
      const m = /^lesson-(\d+)-(\d+)-.+\.html$/.exec(name);
      if (!m || name.includes('-student')) continue;
      const shellPath = path.join(dir, name);
      const html = fs.readFileSync(shellPath, 'utf8');
      const scripts = [...html.matchAll(/<script src="\.\.\/assets\/(data|js)\/([^"?]+)/g)]
        .map(hit => path.join(ROOT, 'assets', hit[1], hit[2]));
      topics.push({
        key: `${m[1]}.${m[2]}`,
        unit,
        shellPath,
        html,
        scripts,
        dataScripts: scripts.filter(file => file.includes(`${path.sep}data${path.sep}`))
      });
    }
  }
  // Sorted by unit then topic NUMBER, never by parsing the key as a float:
  // parseFloat('5.10') is 5.1, which sorts Topic 5.10 ahead of Topic 5.2.
  const num = key => Number(key.split('.')[1]);
  return topics.sort((a, b) => (a.unit - b.unit) || (num(a.key) - num(b.key)));
}

function shellFor(topic) {
  return topic.shellPath || '';
}

// Cards as the renderer sees them: {title, caption, prompt, url, sourceText}.
// Resolved in the browser's own order: every data script the shell loads, in the
// order it loads them, last write wins, and then the registry runtime on top if
// the shell still loads it.
function resolveUnitPool(topic) {
  const shellPath = shellFor(topic);
  const shell = topic.html != null ? topic.html : readIfPresent(shellPath);

  let cards = null;
  let source = 'none';

  for (const file of topic.dataScripts || []) {
    const src = readIfPresent(file);
    if (!src) continue;
    const isConfig = file.endsWith('-renderer-config.js');
    const found = isConfig
      ? literalAfter(src, 'lesson.images', '[', ']')
      : literalAfter(src, '\n  images:', '[', ']');
    if (Array.isArray(found)) {
      cards = found;
      source = isConfig ? 'authored:config' : 'authored:data';
    }
  }

  const usesRegistry = shell.includes(`module-07-evidence-unit-${topic.unit}.js`)
    && shell.includes('module-07-evidence-runtime.js');
  if (usesRegistry) {
    const registryPath = path.join(ROOT, 'assets', 'data', `module-07-evidence-unit-${topic.unit}.js`);
    const src = readIfPresent(registryPath);
    const registry = src ? vm.runInNewContext(`${src}; window.BH_MODULE7_EVIDENCE`, { window: {} }) : null;
    const entry = registry && registry[topic.key];
    if (entry) {
      return {
        source: 'registry',
        shellPath,
        cards: (entry.c || []).map(card => ({
          title: card.t, caption: card.m, prompt: card.q, url: '', sourceText: card.l || []
        }))
      };
    }
  }

  return { source, shellPath, cards: cards || [] };
}

function foundationsTopics() {
  const dir = path.join(ROOT, 'foundations');
  return fs.readdirSync(dir)
    .filter(name => /-data\.js$/.test(name) && /^foundations-\d/.test(name))
    .sort()
    .map(name => {
      const src = fs.readFileSync(path.join(dir, name), 'utf8');
      const items = literalAfter(src, 'items:', '[', ']');
      return {
        key: `F${(/^foundations-(\d+)/.exec(name) || [])[1]}`,
        unit: 0,
        source: 'foundations',
        cards: Array.isArray(items)
          ? items.map(item => ({ ...item, sourceText: item.sourceText || [] }))
          : []
      };
    });
}

// The machine half of the authenticity gate in
// docs/module-07-scaffolding-standard.md. It is a PROXY and it is coarse on
// purpose, which is why it feeds a report rather than a gate: whether a card is
// really a historical object is a judgment about teaching, and a check that
// failed a push over it would only teach people to bolt a numeral onto a summary
// until the grep went quiet.
//
//   object   a real picture: a photograph, map, cartoon, poster, artifact.
//   record   no picture, but the words carry a verbatim quotation or figures,
//            so the student still has something to read closely.
//   summary  no picture and no trace: the author's own sentences about what
//            happened. Nothing left for a student to observe.
function classify(card) {
  const url = String((card && card.url) || '');
  if (/^https?:/i.test(url)) return 'object';
  const body = [].concat(card.sourceText || []).join(' ');
  if (/["“”]/.test(body)) return 'record';
  if (/\d/.test(body)) return 'record';
  return 'summary';
}

function tally(cards) {
  const counts = { object: 0, record: 0, summary: 0 };
  cards.forEach(card => { counts[classify(card)] += 1; });
  return counts;
}

module.exports = { ROOT, unitTopics, foundationsTopics, resolveUnitPool, shellFor, classify, tally, literalAfter };
