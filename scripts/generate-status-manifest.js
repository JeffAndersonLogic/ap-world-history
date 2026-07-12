#!/usr/bin/env node
/**
 * generate-status-manifest.js
 *
 * Scans the repo for the actual on-disk state of every unit topic and
 * Foundations topic, and writes assets/data/project-status-manifest.js —
 * a plain window.PROJECT_STATUS_MANIFEST global consumed by
 * teacher/command-center.html.
 *
 * Deliverables checked per topic: lesson shell, data file, renderer
 * config, First & 10 reading, First & 10 capture wrapper, BeInTheRoom
 * scenario (resolved from lesson.beInTheRoom.url in the data/config
 * file, not guessed from the topic number — scenario slugs are
 * hand-named, e.g. 1.1 -> song-court.html).
 *
 * Usage: node scripts/generate-status-manifest.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function read(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return null; }
}
function exists(p) { return fs.existsSync(p); }
function glob(dir, re) {
  if (!exists(dir)) return [];
  return fs.readdirSync(dir).filter(f => re.test(f));
}

// ── 1. Parse each unit's topic hub for the full planned topic list ──────────
function parseUnitTopics(unitNum) {
  const indexPath = path.join(ROOT, `unit-${unitNum}`, 'index.html');
  const src = read(indexPath);
  if (!src) return [];

  const cardRe = /<div class="unit-num">TOPIC ([\d.]+)<\/div>\s*<h3>([^<]+)<\/h3>/g;
  const topics = [];
  let m;
  while ((m = cardRe.exec(src)) !== null) {
    topics.push({ num: m[1], title: m[2].trim() });
  }
  return topics;
}

const CAPSTONE_RE = /comparison|continuity and change|causation|capstone/i;

// ── 2. For a given topic, resolve every deliverable against disk ────────────
function auditTopic(unitNum, topicNum, title) {
  const unitDir = path.join(ROOT, `unit-${unitNum}`);
  const dataDir = path.join(ROOT, 'assets/data');
  const [, minor] = topicNum.split('.');

  const shellFiles = glob(unitDir, new RegExp(`^lesson-${unitNum}-${minor}-.*\\.html$`));
  const shell = shellFiles[0] || null;
  const slug = shell ? shell.replace(new RegExp(`^lesson-${unitNum}-${minor}-`), '').replace(/\.html$/, '') : null;

  const dataFiles = glob(dataDir, new RegExp(`^lesson-${unitNum}-${minor}-(?!renderer-config).*\\.js$`))
    .filter(f => !f.endsWith('-standards-addon.js'));
  const data = dataFiles[0] || null;

  const rc = `lesson-${unitNum}-${minor}-renderer-config.js`;
  const rendererConfig = exists(path.join(dataDir, rc)) ? rc : null;

  const first10Files = glob(unitDir, new RegExp(`^first-and-10-topic-${unitNum}-${minor}-.*(?<!-capture)\\.html$`));
  const first10 = first10Files[0] || null;

  const captureFiles = glob(unitDir, new RegExp(`^first-and-10-topic-${unitNum}-${minor}-.*-capture\\.html$`));
  const capture = captureFiles[0] || null;

  // Resolve BeInTheRoom from the actual data/config source, not a guessed filename.
  const combinedSrc = [data, rendererConfig].filter(Boolean)
    .map(f => read(path.join(dataDir, f)) || '').join('\n');
  // Matches both `lesson.beInTheRoom = { url: '...' }` (Unit 8+ renderer-config
  // pattern) and the bare object-literal key `beInTheRoom: { url: '...' }`
  // (Unit 1-7 data-file pattern). Requires the `{` so the unrelated
  // stableImages.beInTheRoom string (a plain image URL) never matches.
  const bitrMatch = combinedSrc.match(/beInTheRoom\s*[:=]\s*\{\s*url:\s*'([^']*)'/);
  const isCapstone = CAPSTONE_RE.test(title);
  let beInTheRoom = 'not-applicable';
  if (!isCapstone) {
    if (!bitrMatch || !bitrMatch[1]) {
      beInTheRoom = 'missing';
    } else {
      const target = path.resolve(unitDir, bitrMatch[1]);
      beInTheRoom = exists(target) ? 'built' : 'broken-link';
    }
  }

  return {
    num: topicNum,
    title,
    slug,
    capstone: isCapstone,
    deliverables: {
      shell: !!shell,
      data: !!data,
      rendererConfig: !!rendererConfig,
      first10: !!first10,
      capture: !!capture,
      beInTheRoom,
    },
  };
}

// ── 3. Foundations (fixed, stable set — 5 topics, no unit-hub page to parse) ─
function auditFoundations() {
  const slugs = [
    ['1', 'geography', 'Geography & the Physical World'],
    ['2', 'belief-systems', 'Belief Systems'],
    ['3', 'states-power', 'States & Power'],
    ['4', 'trade-networks', 'Trade Networks'],
    ['5', 'world-at-1200', 'The World at 1200'],
  ];
  const fDir = path.join(ROOT, 'foundations');
  return slugs.map(([n, slug, title]) => {
    const shell = exists(path.join(fDir, `foundations-${n}-${slug}.html`));
    const data = exists(path.join(fDir, `foundations-${n}-${slug}-data.js`));
    const first10 = exists(path.join(fDir, `first-and-10-foundations-${n}-${slug}.html`));
    const capture = exists(path.join(fDir, `first-and-10-foundations-${n}-${slug}-capture.html`));
    const dataSrc = read(path.join(fDir, `foundations-${n}-${slug}-data.js`)) || '';
    const hasUrl = /beInTheRoom\s*:\s*\{\s*url:\s*'([^']+)'/.exec(dataSrc);
    return {
      num: `F.${n}`,
      title,
      slug,
      capstone: false,
      deliverables: {
        shell, data, rendererConfig: true, first10, capture,
        beInTheRoom: hasUrl ? 'built' : 'coming-soon-by-design',
      },
    };
  });
}

// ── 4. Unit metadata (titles come from each hub page's <h2>) ────────────────
function unitTitle(unitNum) {
  const src = read(path.join(ROOT, `unit-${unitNum}`, 'index.html')) || '';
  const m = src.match(/<div class="center">[\s\S]*?<h2>([^<]+)<\/h2>/);
  return m ? m[1].trim() : `Unit ${unitNum}`;
}

// Hand-maintained — content-quality and cross-file issues that can't be
// detected by scanning file existence (theme-alignment drift, mislabeled
// fields, orphaned files, CED verification flags). Update this list as
// issues are found or resolved; it is not re-derived from disk.
const KNOWN_ISSUES = [
  {
    severity: 'bad',
    where: 'beintheroom/unit-1/khmer-court.html',
    what: "Fails the Step 0 theme-alignment gate — its dilemma (temple/military/agriculture/trade allocation) is structurally identical to song-court.html and doesn't exercise Topic 1.3's belief-systems/state-power theme. Recommended: retire in favor of angkor-council.html (already the linked scenario) or redesign around LO G/H.",
  },
  {
    severity: 'warn',
    where: 'beintheroom/unit-1/',
    what: 'Orphaned scenario files (abbasid-fragmentation.html, cahokia-council.html) exist on disk but are not linked from any lesson or the BeInTheRoom hub page.',
  },
  {
    severity: 'note',
    where: 'assets/data/lesson-1-*-renderer-config.js',
    what: "Unit 1 renderer configs carry no thematic-focus / learning-objective blocks, unlike Unit 7's configs — inconsistent with the pattern established later in the build.",
  },
  {
    severity: 'note',
    where: 'assets/data/lesson-1-6-europe.js',
    what: 'Mislabels its Europe learning objective as "Unit 1 Learning Objective H" — H actually belongs to Topic 1.3.',
  },
  {
    severity: 'note',
    where: 'assets/data/lesson-8-5-renderer-config.js',
    what: 'Third key concept is labeled KC-6.2.I.C; if the published CED reads KC-6.2.II.C this is a discrepancy. Flagged for manual verification against the physical CED PDF — not fixed pending that check.',
  },
];

const manifest = { generatedAt: new Date().toISOString(), units: [], foundations: auditFoundations(), knownIssues: KNOWN_ISSUES };

for (let u = 1; u <= 9; u++) {
  const topics = parseUnitTopics(u).map(t => auditTopic(u, t.num, t.title));
  manifest.units.push({ num: u, title: unitTitle(u), topics });
}

const out = `// AUTO-GENERATED by scripts/generate-status-manifest.js — do not hand-edit.
// Regenerate: node scripts/generate-status-manifest.js
window.PROJECT_STATUS_MANIFEST = ${JSON.stringify(manifest, null, 2)};
`;

const outPath = path.join(ROOT, 'assets/data/project-status-manifest.js');
fs.writeFileSync(outPath, out);

const totalTopics = manifest.units.reduce((n, u) => n + u.topics.length, 0);
const builtTopics = manifest.units.reduce((n, u) => n + u.topics.filter(t => t.deliverables.shell).length, 0);
console.log(`Wrote ${path.relative(ROOT, outPath)}`);
console.log(`${builtTopics} / ${totalTopics} unit topics have a lesson shell on disk.`);
