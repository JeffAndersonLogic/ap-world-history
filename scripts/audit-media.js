#!/usr/bin/env node
'use strict';

/**
 * Audits the media contract used by every BeHistorical lesson shell.
 *
 * The report focuses on what students actually see after the lesson data and
 * renderer config have both executed: module-card images, maps, lecture-card
 * images, and Evidence Lab images. It intentionally does not make network
 * requests so the audit remains deterministic in CI.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DEFAULT_MODULE_IDS = [
  'map', 'first10', 'contentdelivery', 'besurreal', 'skill',
  'checkpoint1', 'evidence', 'source'
];

function walk(dir, predicate) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...walk(full, predicate));
    else if (predicate(full)) found.push(full);
  }
  return found;
}

function loadLesson(shellPath) {
  const html = fs.readFileSync(shellPath, 'utf8');
  const dataScripts = [...html.matchAll(/<script\s+src=["']([^"']*assets\/data\/[^"'?]+\.js)[^"']*["']/g)]
    .map((match) => path.resolve(path.dirname(shellPath), match[1]));
  const document = {
    querySelector() { return null; },
    createElement() { return {}; },
    head: { appendChild() {} }
  };
  const context = { console, document };
  context.window = context;
  vm.createContext(context);
  for (const file of dataScripts) {
    vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
  }
  return { lesson: context.BEHISTORICAL_LESSON, dataScripts };
}

function isRemote(url) {
  return /^https?:\/\//i.test(url);
}

function localTarget(shellPath, url) {
  const withoutQuery = url.split(/[?#]/, 1)[0];
  return path.resolve(path.dirname(shellPath), decodeURIComponent(withoutQuery));
}

function addSlot(slots, kind, label, url) {
  slots.push({ kind, label, url: String(url || '').trim() });
}

const shells = walk(ROOT, (file) => /[\\/]unit-\d+[\\/]lesson-\d+-\d+-.*\.html$/i.test(file));
const lessons = [];
const errors = [];

for (const shellPath of shells) {
  let loaded;
  try {
    loaded = loadLesson(shellPath);
  } catch (error) {
    errors.push(`${path.relative(ROOT, shellPath)}: could not load runtime lesson (${error.message})`);
    continue;
  }
  const L = loaded.lesson;
  if (!L) {
    errors.push(`${path.relative(ROOT, shellPath)}: runtime lesson data is missing`);
    continue;
  }

  const slots = [];
  const topicMatch = String(L.meta && L.meta.topic || '').match(/(\d+)\.(\d+)/);
  const artwork = (id) => topicMatch
    ? `../assets/images/module-art/unit-${topicMatch[1]}/topic-${topicMatch[1]}-${topicMatch[2]}/${id}.svg`
    : '../assets/images/media-fallback.svg';
  const moduleIds = L.modules
    ? L.modules.map((module) => module.id)
    : [...DEFAULT_MODULE_IDS, ...(L.beInTheRoom && L.beInTheRoom.url ? ['beintheroom'] : []), 'checkpoint2'];
  for (const id of moduleIds) addSlot(slots, 'module', id, artwork(id));
  addSlot(slots, 'map', 'map', (L.map && L.map.url) || artwork('map'));
  addSlot(slots, 'fallback', 'map', artwork('map'));
  (L.lecture && L.lecture.segments || []).forEach((segment, index) => {
    const id = `lecture-${String(index + 1).padStart(2, '0')}`;
    const current = String(segment.image && segment.image.url || '').trim();
    const repeated = current && L.lecture.segments.slice(0, index).some((earlier) => String(earlier.image && earlier.image.url || '').trim() === current);
    addSlot(slots, 'lecture', `segment-${index + 1}`, current && !repeated ? current : artwork(id));
    addSlot(slots, 'fallback', id, artwork(id));
  });
  (L.images || []).forEach((image, index) => {
    const id = `evidence-${String(index + 1).padStart(2, '0')}`;
    const current = String(image.url || '').trim();
    const repeated = current && L.images.slice(0, index).some((earlier) => String(earlier.url || '').trim() === current);
    addSlot(slots, 'evidence', `evidence-${index + 1}`, current && !repeated ? current : artwork(id));
    addSlot(slots, 'fallback', id, artwork(id));
  });

  const blank = slots.filter((slot) => !slot.url);
  const missingLocal = slots.filter((slot) => slot.url && !isRemote(slot.url) && !fs.existsSync(localTarget(shellPath, slot.url)));
  const moduleUrls = slots.filter((slot) => slot.kind === 'module').map((slot) => slot.url).filter(Boolean);
  const moduleUnique = new Set(moduleUrls);
  lessons.push({
    shellPath,
    topic: (L.meta && L.meta.topic) || path.basename(shellPath),
    slots,
    blank,
    missingLocal,
    moduleCount: moduleUrls.length,
    moduleUniqueCount: moduleUnique.size,
    moduleUniqueRatio: moduleUrls.length ? moduleUnique.size / moduleUrls.length : 0
  });
}

// Foundations uses a separate renderer/data shape but shares the same visual
// reliability contract. Include its five topics in the project-wide score.
for (let index = 1; index <= 5; index++) {
  const foundationDir = path.join(ROOT, 'foundations');
  const dataName = fs.readdirSync(foundationDir).find((name) => new RegExp(`^foundations-${index}-.*-data\\.js$`).test(name));
  const shellName = fs.readdirSync(foundationDir).find((name) => new RegExp(`^foundations-${index}-.*\\.html$`).test(name) && !name.includes('first-and-10'));
  const shellPath = path.join(foundationDir, shellName);
  const context = {}; context.window = context; vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(foundationDir, dataName), 'utf8'), context, { filename: dataName });
  const T = context.FOUNDATION_TOPIC;
  const artwork = (id) => `../assets/images/module-art/foundations/topic-f${index}/${id}.svg`;
  const moduleIds = ['map','first10','contentdelivery','besurreal','skill','checkpoint1','evidence','coach','beintheroom','checkpoint2'];
  const slots = moduleIds.map((id) => ({ kind: 'module', label: id, url: artwork(id) }));
  addSlot(slots, 'map', 'map', T.map.url || artwork('map'));
  addSlot(slots, 'fallback', 'map', artwork('map'));
  (T.lecture || []).forEach((segment, segmentIndex) => {
    const id = `lecture-${String(segmentIndex + 1).padStart(2, '0')}`;
    const current = String(segment.image && segment.image.url || '').trim();
    const repeated = current && T.lecture.slice(0, segmentIndex).some((earlier) => String(earlier.image && earlier.image.url || '').trim() === current);
    addSlot(slots, 'lecture', `segment-${segmentIndex + 1}`, current && !repeated ? current : artwork(id));
    addSlot(slots, 'fallback', id, artwork(id));
  });
  const evidenceItems = T.evidence && T.evidence.items || [];
  evidenceItems.forEach((item, itemIndex) => {
    const id = `evidence-${String(itemIndex + 1).padStart(2, '0')}`;
    const current = String(item.url || '').trim();
    const repeated = current && evidenceItems.slice(0, itemIndex).some((earlier) => String(earlier.url || '').trim() === current);
    addSlot(slots, 'evidence', `evidence-${itemIndex + 1}`, current && !repeated ? current : artwork(id));
    addSlot(slots, 'fallback', id, artwork(id));
  });
  const blank = slots.filter((slot) => !slot.url);
  const missingLocal = slots.filter((slot) => slot.url && !isRemote(slot.url) && !fs.existsSync(localTarget(shellPath, slot.url)));
  const moduleUrls = slots.filter((slot) => slot.kind === 'module').map((slot) => slot.url).filter(Boolean);
  lessons.push({ shellPath, topic: T.code, slots, blank, missingLocal, moduleCount: moduleUrls.length, moduleUniqueCount: new Set(moduleUrls).size, moduleUniqueRatio: new Set(moduleUrls).size / moduleUrls.length });
}

const moduleUsage = new Map();
for (const lesson of lessons) {
  for (const slot of lesson.slots.filter((item) => item.kind === 'module' && item.url)) {
    const entries = moduleUsage.get(slot.url) || [];
    entries.push(`${lesson.topic}:${slot.label}`);
    moduleUsage.set(slot.url, entries);
  }
}

const repeatedModuleImages = [...moduleUsage.entries()]
  .filter(([, uses]) => uses.length > 1)
  .sort((a, b) => b[1].length - a[1].length);
const totalSlots = lessons.reduce((sum, lesson) => sum + lesson.slots.length, 0);
const blankSlots = lessons.reduce((sum, lesson) => sum + lesson.blank.length, 0);
const missingLocalSlots = lessons.reduce((sum, lesson) => sum + lesson.missingLocal.length, 0);
const moduleSlots = lessons.reduce((sum, lesson) => sum + lesson.moduleCount, 0);
const uniqueModuleAssignments = lessons.reduce((sum, lesson) => sum + lesson.moduleUniqueCount, 0);
const withinLessonUniqueRatio = moduleSlots ? uniqueModuleAssignments / moduleSlots : 0;
const globallyUniqueModuleUrls = moduleUsage.size;
const globalUniqueRatio = moduleSlots ? globallyUniqueModuleUrls / moduleSlots : 0;
const completeLessons = lessons.filter((lesson) => lesson.blank.length === 0 && lesson.missingLocal.length === 0).length;

console.log('BeHistorical media audit');
console.log(`Lessons loaded: ${lessons.length}/${shells.length + 5}`);
console.log(`Media slots: ${totalSlots}`);
console.log(`Blank slots: ${blankSlots}`);
console.log(`Missing local files: ${missingLocalSlots}`);
console.log(`Complete lessons: ${completeLessons}/${lessons.length} (${Math.round((completeLessons / lessons.length) * 100)}%)`);
console.log(`Within-lesson module-image uniqueness: ${uniqueModuleAssignments}/${moduleSlots} (${Math.round(withinLessonUniqueRatio * 100)}%)`);
console.log(`Project-wide unique module images: ${globallyUniqueModuleUrls}/${moduleSlots} (${Math.round(globalUniqueRatio * 100)}%)`);

if (errors.length) {
  console.log('\nLoad errors');
  errors.forEach((error) => console.log(`- ${error}`));
}

const troubled = lessons.filter((lesson) => lesson.blank.length || lesson.missingLocal.length || lesson.moduleUniqueRatio < 0.8);
if (troubled.length) {
  console.log('\nLessons needing media work');
  for (const lesson of troubled) {
    const rel = path.relative(ROOT, lesson.shellPath);
    const details = [];
    if (lesson.blank.length) details.push(`blank: ${lesson.blank.map((slot) => `${slot.kind}.${slot.label}`).join(', ')}`);
    if (lesson.missingLocal.length) details.push(`missing: ${lesson.missingLocal.map((slot) => slot.url).join(', ')}`);
    if (lesson.moduleUniqueRatio < 0.8) details.push(`module uniqueness: ${lesson.moduleUniqueCount}/${lesson.moduleCount}`);
    console.log(`- ${rel}, ${details.join('; ')}`);
  }
}

if (repeatedModuleImages.length) {
  console.log('\nMost repeated module-card images');
  for (const [url, uses] of repeatedModuleImages.slice(0, 20)) {
    console.log(`- ${uses.length}× ${url}`);
  }
}

const score = totalSlots
  ? Math.round((((totalSlots - blankSlots - missingLocalSlots) / totalSlots) * 70) + (withinLessonUniqueRatio * 30))
  : 0;
console.log(`\nMedia correctness score: ${score}%`);

if (errors.length || blankSlots || missingLocalSlots || withinLessonUniqueRatio < 0.95) process.exitCode = 1;
