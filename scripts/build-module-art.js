#!/usr/bin/env node
'use strict';

/**
 * Builds deterministic, local artwork for every module card and media fallback.
 * The artwork is intentionally diagrammatic: it is historically neutral,
 * readable under the dark card overlay, safe for sensitive topics, and cannot
 * disappear because a third-party image host changed a URL.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'assets', 'images', 'module-art');
const MODULE_TITLES = {
  map: 'Map & Geography', first10: 'First & 10 Reading', contentdelivery: 'Content Delivery',
  besurreal: 'BeSurreal', skill: 'AP Skill Builder', checkpoint1: 'Checkpoint 1',
  evidence: 'Evidence Lab', source: 'Primary Source', coach: 'AI Coach',
  beintheroom: 'BeInTheRoom', matrix: 'Causes & Consequences', checkpoint2: 'Checkpoint 2'
};

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function clean(value, limit = 52) {
  const text = String(value || '').replace(/<[^>]*>/g, '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  return text.length > limit ? `${text.slice(0, limit - 1).trim()}…` : text;
}

function hash(input) {
  let value = 2166136261;
  for (const char of String(input)) value = Math.imul(value ^ char.charCodeAt(0), 16777619);
  return value >>> 0;
}

function iconFor(id) {
  if (id === 'map') return '<circle cx="835" cy="380" r="168" fill="none" stroke="currentColor" stroke-width="18"/><path d="M667 380h336M835 212c-58 45-88 101-88 168s30 123 88 168M835 212c58 45 88 101 88 168s-30 123-88 168M690 300h290M690 460h290" fill="none" stroke="currentColor" stroke-width="12"/>';
  if (id === 'first10') return '<path d="M655 245c78-28 145-18 190 28v300c-45-46-112-56-190-28V245Zm360 0c-78-28-145-18-190 28v300c45-46 112-56 190-28V245Z" fill="none" stroke="currentColor" stroke-width="18"/>';
  if (id === 'contentdelivery') return '<path d="M680 545h320M710 515V315l130-78 130 78v200M750 515V345h180v170M795 515V385h90v130" fill="none" stroke="currentColor" stroke-width="20"/>';
  if (id === 'besurreal') return '<path d="M835 210c155 0 225 180 110 275-91 75-235 11-196-87 30-75 145-65 146 8 1 49-65 67-94 33" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round"/><circle cx="835" cy="410" r="205" fill="none" stroke="currentColor" stroke-width="8" opacity=".45"/>';
  if (id === 'skill') return '<path d="M670 545h350M710 545v-90h85v-90h85v-90h110M700 280h290" fill="none" stroke="currentColor" stroke-width="22"/><path d="m950 235 50 45-50 45" fill="none" stroke="currentColor" stroke-width="22"/>';
  if (id.startsWith('checkpoint')) return '<path d="M735 585V220M755 245h245l-55 82 55 82H755" fill="none" stroke="currentColor" stroke-width="22"/><path d="m800 470 55 55 125-145" fill="none" stroke="currentColor" stroke-width="24"/>';
  if (id === 'evidence') return '<circle cx="820" cy="370" r="138" fill="none" stroke="currentColor" stroke-width="24"/><path d="m920 470 120 120M760 335h120M760 385h90" fill="none" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>';
  if (id === 'source') return '<path d="M700 210h250l80 80v300H700V210Zm250 0v80h80M755 355h220M755 420h220M755 485h155" fill="none" stroke="currentColor" stroke-width="20"/>';
  if (id === 'coach') return '<path d="M690 250h330v235H850l-105 82 22-82h-77V250Zm65 75h200M755 385h155" fill="none" stroke="currentColor" stroke-width="20"/>';
  if (id === 'beintheroom') return '<path d="M725 585V215h245v370M725 585h315M795 585V285h175M920 435h15" fill="none" stroke="currentColor" stroke-width="22"/>';
  if (id === 'matrix') return '<rect x="690" y="230" width="340" height="340" rx="8" fill="none" stroke="currentColor" stroke-width="18"/><path d="M803 230v340M917 230v340M690 343h340M690 457h340" fill="none" stroke="currentColor" stroke-width="14"/>';
  return '<circle cx="850" cy="400" r="185" fill="none" stroke="currentColor" stroke-width="20"/><path d="m750 405 70 70 145-165" fill="none" stroke="currentColor" stroke-width="26"/>';
}

function svg({ topicCode, topicTitle, id, moduleTitle, anchor }) {
  const seed = hash(`${topicCode}:${id}:${anchor}`);
  const accentPalette = ['#c9a46a', '#d2b48c', '#a8652d', '#b98b54', '#d0a15e'];
  const accent = accentPalette[seed % accentPalette.length];
  const x1 = 600 + (seed % 160);
  const y1 = 80 + ((seed >>> 8) % 180);
  const x2 = 920 + ((seed >>> 16) % 150);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc">
  <title id="title">${esc(topicCode)} — ${esc(moduleTitle)}</title><desc id="desc">Local BeHistorical artwork for ${esc(topicTitle)}. Historical anchor: ${esc(anchor)}.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#1a1c1d"/><stop offset=".58" stop-color="#2b2f31"/><stop offset="1" stop-color="#3e4447"/></linearGradient><radialGradient id="glow"><stop stop-color="${accent}" stop-opacity=".34"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="800" fill="url(#bg)"/><circle cx="${x1}" cy="${y1}" r="420" fill="url(#glow)"/><circle cx="${x2}" cy="610" r="330" fill="url(#glow)" opacity=".7"/>
  <g fill="none" stroke="${accent}" opacity=".18"><path d="M0 655 1200 145M0 735 1200 225" stroke-width="3"/><circle cx="850" cy="400" r="255" stroke-width="4"/><circle cx="850" cy="400" r="285" stroke-width="2"/></g>
  <g color="${accent}" opacity=".82">${iconFor(id)}</g>
  <rect x="72" y="96" width="180" height="7" rx="3.5" fill="${accent}" opacity=".72"/><rect x="72" y="122" width="110" height="3" rx="1.5" fill="#d2b48c" opacity=".4"/>
  <path d="M72 650h360M72 678h220" stroke="${accent}" stroke-width="5" stroke-linecap="round" opacity=".32"/>
</svg>\n`;
}

function writeArtwork(dir, details) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${details.id}.svg`), svg(details));
}

function lessonContext(shellPath) {
  const html = fs.readFileSync(shellPath, 'utf8');
  const sources = [...html.matchAll(/<script\s+src=["']([^"']*assets\/data\/[^"'?]+\.js)[^"']*["']/g)]
    .map((match) => path.resolve(path.dirname(shellPath), match[1]));
  const document = { querySelector() { return null; }, createElement() { return {}; }, head: { appendChild() {} } };
  const context = { console, document }; context.window = context; vm.createContext(context);
  for (const source of sources) vm.runInContext(fs.readFileSync(source, 'utf8'), context, { filename: source });
  return context.BEHISTORICAL_LESSON;
}

function defaultModules(L) {
  const items = [
    ['map', 'Map & Geography'], ['first10', 'First & 10 Reading'], ['contentdelivery', 'Content Delivery'],
    ['besurreal', 'BeSurreal'], ['skill', 'AP Skill Builder'], ['checkpoint1', 'Checkpoint 1'],
    ['evidence', 'Evidence Lab'], ['source', 'Primary Source']
  ];
  if (L.beInTheRoom && L.beInTheRoom.url) items.push(['beintheroom', 'BeInTheRoom']);
  items.push(['checkpoint2', 'Checkpoint 2']);
  return items.map(([id, title]) => ({ id, title }));
}

function anchorFor(L, id) {
  const table = {
    map: L.map && L.map.title,
    first10: L.first10 && L.first10.title,
    contentdelivery: L.lecture && L.lecture.title,
    besurreal: L.beSurreal && L.beSurreal.title,
    skill: L.skillBuilder && L.skillBuilder.title,
    checkpoint1: L.checkpoints && L.checkpoints[0] && L.checkpoints[0].title,
    evidence: L.evidenceLab && L.evidenceLab.title,
    source: L.primarySource && L.primarySource.title,
    beintheroom: L.beInTheRoom && L.beInTheRoom.desc,
    matrix: 'Compare causes, targets, conditions, and consequences',
    checkpoint2: L.checkpoints && L.checkpoints[1] && L.checkpoints[1].title
  };
  return clean(table[id] || (L.meta && L.meta.title) || id);
}

let written = 0;
for (let unit = 1; unit <= 9; unit++) {
  const unitDir = path.join(ROOT, `unit-${unit}`);
  for (const name of fs.readdirSync(unitDir).filter((file) => /^lesson-\d+-\d+-.*\.html$/.test(file))) {
    const shellPath = path.join(unitDir, name);
    const L = lessonContext(shellPath);
    const topicMatch = String(L.meta && L.meta.topic || '').match(/(\d+\.\d+)/);
    if (!topicMatch) throw new Error(`Could not determine topic for ${shellPath}`);
    const topicKey = topicMatch[1].replace('.', '-');
    const topicCode = `Topic ${topicMatch[1]}`;
    const topicTitle = L.meta.title;
    const outDir = path.join(OUTPUT, `unit-${unit}`, `topic-${topicKey}`);
    const modules = L.modules || defaultModules(L);
    for (const module of modules) {
      writeArtwork(outDir, { topicCode, topicTitle, id: module.id, moduleTitle: module.title || MODULE_TITLES[module.id] || module.id, anchor: anchorFor(L, module.id) });
      written++;
    }
    (L.lecture && L.lecture.segments || []).forEach((segment, index) => {
      writeArtwork(outDir, { topicCode, topicTitle, id: `lecture-${String(index + 1).padStart(2, '0')}`, moduleTitle: segment.title, anchor: `Lecture visual · ${segment.title}` });
      written++;
    });
    (L.images || []).forEach((image, index) => {
      writeArtwork(outDir, { topicCode, topicTitle, id: `evidence-${String(index + 1).padStart(2, '0')}`, moduleTitle: image.title || 'Evidence', anchor: image.caption || image.prompt || 'Evidence analysis' });
      written++;
    });
  }
}

for (let index = 1; index <= 5; index++) {
  const dataPath = fs.readdirSync(path.join(ROOT, 'foundations')).map((name) => path.join(ROOT, 'foundations', name))
    .find((file) => new RegExp(`foundations-${index}-.*-data\\.js$`).test(file));
  const context = {}; context.window = context; vm.createContext(context);
  vm.runInContext(fs.readFileSync(dataPath, 'utf8'), context, { filename: dataPath });
  const T = context.FOUNDATION_TOPIC;
  const topicCode = T.code || `Foundations ${index}`;
  const outDir = path.join(OUTPUT, 'foundations', `topic-f${index}`);
  for (const [id, moduleTitle] of Object.entries({ map:'Map & Geography',first10:'First & 10 Reading',contentdelivery:'Content Delivery',besurreal:'BeSurreal',skill:'AP Skill Builder',checkpoint1:'Checkpoint 1',evidence:'Evidence Lab',coach:'AI Coach',beintheroom:'BeInTheRoom',checkpoint2:'Checkpoint 2' })) {
    writeArtwork(outDir, { topicCode, topicTitle: T.title, id, moduleTitle, anchor: clean((id === 'map' && T.map.title) || (id === 'skill' && T.skill.title) || T.subtitle || T.title) });
    written++;
  }
  (T.lecture || []).forEach((segment, segmentIndex) => {
    writeArtwork(outDir, { topicCode, topicTitle: T.title, id: `lecture-${String(segmentIndex + 1).padStart(2, '0')}`, moduleTitle: segment.title, anchor: `Lecture visual · ${segment.title}` });
    written++;
  });
  const evidenceItems = T.evidence && T.evidence.items || [];
  evidenceItems.forEach((item, itemIndex) => {
    writeArtwork(outDir, { topicCode, topicTitle: T.title, id: `evidence-${String(itemIndex + 1).padStart(2, '0')}`, moduleTitle: item.title || 'Evidence', anchor: item.caption || item.prompt || 'Evidence analysis' });
    written++;
  });
}

console.log(`Built ${written} local module and fallback artworks in ${path.relative(ROOT, OUTPUT)}.`);
