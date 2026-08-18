#!/usr/bin/env node
'use strict';

/**
 * Build the Canvas QTI package for an examination.
 *
 *   node scripts/build-exam.js                 write the package
 *   node scripts/build-exam.js --check         fail on drift, write nothing
 *   node scripts/build-exam.js --bundle        also write the importable .zip
 *   node scripts/build-exam.js --images=local  reference images by relative path
 *
 * Content lives in scripts/lib/exam-content/<exam>.js and nothing else. The XML
 * is generated, so a hand-edit to it is reverted by the next build, which is
 * why --check runs in the offline suite.
 *
 * ── Where the images come from ───────────────────────────────────────────────
 *
 * By default every stimulus is an absolute URL on the course's own Pages site.
 * That is deliberate and it is not the same thing as the hotlinking that made
 * version 2 fragile. V2 pulled two of its four stimuli from
 * commons.wikimedia.org, a third party with its own rate limits, which returned
 * HTTP 429 under test; thirty students opening the same exam from one school
 * address is exactly the condition that triggers it. These images sit on the
 * host that already serves every lesson, reading and map the class opens daily.
 * If that host is unreachable the exam is the least of the day's problems.
 *
 * --images=local rewrites the references to relative paths and copies the files
 * into the package, for a teacher who would rather upload them into Canvas
 * Files. It is offered because Canvas resolves bundled QTI images inconsistently
 * across instances, so the choice belongs to whoever is doing the import rather
 * than to this script.
 *
 * ── What is committed ────────────────────────────────────────────────────────
 *
 * The XML, the manifest and the answer key. Not the .zip: it is derived, it is
 * two megabytes of image bytes, and committing it would churn the history on
 * every wording change. Run --bundle to produce it when you need to import.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { arrangeExam } = require('./lib/exam-arrange');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'scripts', 'lib', 'exam-content');
const OUT_ROOT = path.join(ROOT, 'exams');

const SITE = 'https://jeffandersonlogic.github.io/ap-world-history/';

const args = process.argv.slice(2);
const check = args.includes('--check');
const bundle = args.includes('--bundle');
const localImages = args.some(a => a === '--images=local');

// ── XML helpers ───────────────────────────────────────────────────────────────

/** Escape for an XML text node or attribute value. */
function xml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** A mattext carrying HTML. The HTML is escaped once, which is what Canvas
 *  expects: the importer unescapes it and renders the result. */
function htmlMat(html) {
  return `<material><mattext texttype="text/html">${xml(html)}</mattext></material>`;
}

// ── the stimulus block ────────────────────────────────────────────────────────

/**
 * The source block is repeated in full on every item of its set.
 *
 * That is not redundancy, it is the only thing that works. Canvas delivers one
 * question at a time, and a teacher may turn on shuffling, so an item that
 * relied on the source having been shown by an earlier item would present a
 * student with a question about a picture that is not on the screen. It is also
 * why no item may refer to another by number.
 */
function stimulusHtml(set, imageBase) {
  const out = [];
  out.push(`<div class="exam-source"><p><strong>Source Set ${xml(set.id)}: ${xml(set.title)}</strong></p>`);
  if (set.instruction) out.push(`<p><em>${xml(set.instruction)}</em></p>`);

  if (set.image) {
    const src = imageBase === 'local'
      ? path.basename(set.image.src)
      : SITE + set.image.src;
    out.push(`<p><img src="${xml(src)}" alt="${xml(set.image.alt)}" style="max-width:100%;height:auto;"></p>`);
    if (set.image.credit) out.push(`<p><small>${xml(set.image.credit)}</small></p>`);
  }

  if (set.passage) out.push(set.passage);
  if (set.provenance) out.push(`<p><small><em>${xml(set.provenance)}</em></small></p>`);

  out.push('</div>');
  return out.join('\n');
}

// ── one item ──────────────────────────────────────────────────────────────────

function renderItem(item, index, exam, imageBase) {
  const ident = item.id;
  const resp = `response_${ident}`;
  const points = exam.pointsPerItem || 1;

  const body = `${stimulusHtml(item.set, imageBase)}\n<p>${xml(item.stem)}</p>`;

  const labels = ['A', 'B', 'C', 'D'].map(letter =>
    `              <response_label ident="${letter}">\n` +
    `                ${htmlMat(`<p>${xml(item.choices[letter])}</p>`)}\n` +
    `              </response_label>`
  ).join('\n');

  // Per-answer feedback. V2 shipped none, so a student who missed an item learned
  // only that they had missed it. The rationales are the part of this package a
  // student actually reads after the grade posts.
  const hasWhy = item.why && Object.keys(item.why).length;
  const feedbackConditions = hasWhy
    ? ['A', 'B', 'C', 'D'].filter(l => item.why[l]).map(letter =>
        `          <respcondition continue="Yes">\n` +
        `            <conditionvar><varequal respident="${resp}">${letter}</varequal></conditionvar>\n` +
        `            <displayfeedback feedbacktype="Response" linkrefid="${ident}_${letter}_fb" />\n` +
        `          </respcondition>`
      ).join('\n')
    : '';

  const feedbackBlocks = hasWhy
    ? ['A', 'B', 'C', 'D'].filter(l => item.why[l]).map(letter =>
        `        <itemfeedback ident="${ident}_${letter}_fb">\n` +
        `          <flow_mat>\n            ${htmlMat(`<p>${xml(item.why[letter])}</p>`)}\n          </flow_mat>\n` +
        `        </itemfeedback>`
      ).join('\n')
    : '';

  return `      <item ident="${ident}" title="Question ${index + 1}">
        <itemmetadata>
          <qtimetadata>
            <qtimetadatafield>
              <fieldlabel>question_type</fieldlabel>
              <fieldentry>multiple_choice_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>points_possible</fieldlabel>
              <fieldentry>${points}.0</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>assessment_question_identifierref</fieldlabel>
              <fieldentry>${ident}_aq</fieldentry>
            </qtimetadatafield>
          </qtimetadata>
        </itemmetadata>
        <presentation>
          ${htmlMat(body)}
          <response_lid ident="${resp}" rcardinality="Single">
            <render_choice>
${labels}
            </render_choice>
          </response_lid>
        </presentation>
        <resprocessing>
          <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal" />
          </outcomes>
${feedbackConditions ? feedbackConditions + '\n' : ''}          <respcondition continue="No">
            <conditionvar><varequal respident="${resp}">${item.key}</varequal></conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
          </respcondition>
        </resprocessing>
${feedbackBlocks ? feedbackBlocks + '\n' : ''}      </item>`;
}

function renderQti(exam, items, imageBase) {
  const body = items.map((item, i) => renderItem(item, i, exam, imageBase)).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<questestinterop>
  <assessment ident="${exam.id}" title="${xml(exam.title)}">
    <qtimetadata>
      <qtimetadatafield>
        <fieldlabel>qmd_assessmenttype</fieldlabel>
        <fieldentry>Examination</fieldentry>
      </qtimetadatafield>
      <qtimetadatafield>
        <fieldlabel>qmd_scoretype</fieldlabel>
        <fieldentry>Percentage</fieldentry>
      </qtimetadatafield>
    </qtimetadata>
    <section ident="root_section" title="${xml(exam.title)}">
${body}
    </section>
  </assessment>
</questestinterop>
`;
}

function renderManifest(exam, files) {
  const entries = files.map(f => `      <file href="${xml(f)}" />`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<manifest xmlns="http://www.imsglobal.org/xsd/imscp_v1p1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" identifier="${exam.id}_manifest" xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1 http://www.imsglobal.org/xsd/imscp_v1p1.xsd">
  <metadata>
    <schema>IMS Content</schema>
    <schemaversion>1.1.3</schemaversion>
  </metadata>
  <organizations />
  <resources>
    <resource identifier="${exam.id}_resource" type="imsqti_xmlv1p2" href="${exam.id}.xml">
${entries}
    </resource>
  </resources>
</manifest>
`;
}

// ── the teacher's answer key ──────────────────────────────────────────────────

function renderKey(exam, items) {
  const lines = [];
  lines.push(`# ${exam.title}`);
  lines.push('');
  lines.push('Generated by `scripts/build-exam.js`. Do not edit by hand; edit');
  lines.push('`scripts/lib/exam-content/foundations-v3.js` and rebuild.');
  lines.push('');
  lines.push(`${items.length} items, ${exam.pointsPerItem || 1} point each.`);
  lines.push('');

  const byTarget = new Map();
  const bySkill = new Map();
  for (const it of items) {
    byTarget.set(it.target, (byTarget.get(it.target) || 0) + 1);
    if (it.skill) bySkill.set(it.skill, (bySkill.get(it.skill) || 0) + 1);
  }

  lines.push('## Coverage');
  lines.push('');
  lines.push('| Foundations day | Items |');
  lines.push('|---|---|');
  for (const [t, c] of [...byTarget.entries()].sort()) lines.push(`| ${t} | ${c} |`);
  lines.push('');
  lines.push('| Reasoning leaned on | Items |');
  lines.push('|---|---|');
  for (const [s, c] of [...bySkill.entries()].sort()) lines.push(`| ${s} | ${c} |`);
  lines.push('');

  lines.push('## Key');
  lines.push('');
  lines.push('| # | Item | Set | Day | Answer |');
  lines.push('|---|---|---|---|---|');
  items.forEach((it, i) => {
    lines.push(`| ${i + 1} | ${it.id} | ${it.set.id} | ${it.target} | **${it.key}** |`);
  });
  lines.push('');

  lines.push('## Items, with rationales');
  lines.push('');
  let currentSet = null;
  items.forEach((it, i) => {
    if (it.set.id !== currentSet) {
      currentSet = it.set.id;
      lines.push(`### Source Set ${it.set.id}: ${it.set.title}`);
      lines.push('');
      if (it.set.image) lines.push(`Image: \`${it.set.image.src}\``);
      if (it.set.provenance) lines.push(`_${it.set.provenance}_`);
      lines.push('');
    }
    lines.push(`**${i + 1}. (${it.id}, ${it.target}, ${it.skill || 'n/a'})** ${it.stem}`);
    lines.push('');
    for (const letter of ['A', 'B', 'C', 'D']) {
      const mark = letter === it.key ? '**' : '';
      lines.push(`- ${mark}${letter}) ${it.choices[letter]}${mark}`);
    }
    lines.push('');
    if (it.why) {
      for (const letter of ['A', 'B', 'C', 'D']) {
        if (it.why[letter]) lines.push(`  - _${letter}:_ ${it.why[letter]}`);
      }
      lines.push('');
    }
  });

  return lines.join('\n') + '\n';
}

// ── a small, deterministic zip writer ─────────────────────────────────────────

/**
 * Store the package as a .zip with no dependency and no shelling out.
 *
 * Deterministic on purpose: every entry carries the same fixed timestamp, so
 * rebuilding unchanged content produces byte-identical output. A zip stamped
 * with the current time would differ on every run and could never be checked
 * for drift.
 */
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function zipSync(entries) {
  const chunks = [];
  const central = [];
  let offset = 0;

  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, 'utf8');
    const deflated = zlib.deflateRawSync(data, { level: 9 });
    const useDeflate = deflated.length < data.length;
    const payload = useDeflate ? deflated : data;
    const method = useDeflate ? 8 : 0;
    const crc = crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);          // version needed
    local.writeUInt16LE(0, 6);           // flags
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(0, 10);          // time, fixed
    local.writeUInt16LE(0x21, 12);       // date, fixed (1980-01-01)
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(payload.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    local.writeUInt16LE(0, 28);

    chunks.push(local, nameBuf, payload);

    const cd = Buffer.alloc(46);
    cd.writeUInt32LE(0x02014b50, 0);
    cd.writeUInt16LE(20, 4);
    cd.writeUInt16LE(20, 6);
    cd.writeUInt16LE(0, 8);
    cd.writeUInt16LE(method, 10);
    cd.writeUInt16LE(0, 12);
    cd.writeUInt16LE(0x21, 14);
    cd.writeUInt32LE(crc, 16);
    cd.writeUInt32LE(payload.length, 20);
    cd.writeUInt32LE(data.length, 24);
    cd.writeUInt16LE(nameBuf.length, 28);
    cd.writeUInt16LE(0, 30);
    cd.writeUInt16LE(0, 32);
    cd.writeUInt16LE(0, 34);
    cd.writeUInt16LE(0, 36);
    cd.writeUInt32LE(0, 38);
    cd.writeUInt32LE(offset, 42);
    central.push(cd, nameBuf);

    offset += local.length + nameBuf.length + payload.length;
  }

  const centralBuf = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralBuf.length, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);

  return Buffer.concat([...chunks, centralBuf, end]);
}

// ── build ─────────────────────────────────────────────────────────────────────

/** Everything an exam produces, as text, so --check can compare without writing. */
function buildExam(exam, imageBase) {
  const items = arrangeExam(exam);
  const imageFiles = (exam.sets || [])
    .filter(s => s.image)
    .map(s => s.image.src)
    .filter((v, i, a) => a.indexOf(v) === i);

  const manifestFiles = [`${exam.id}.xml`]
    .concat(imageBase === 'local' ? imageFiles.map(f => path.basename(f)) : []);

  return {
    items,
    imageFiles,
    files: {
      [`${exam.id}.xml`]: renderQti(exam, items, imageBase),
      'imsmanifest.xml': renderManifest(exam, manifestFiles),
      'ANSWER-KEY.md': renderKey(exam, items)
    }
  };
}

module.exports = { buildExam, renderQti, renderKey, zipSync };

if (require.main !== module) return;

const names = fs.existsSync(CONTENT_DIR)
  ? fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.js')).sort()
  : [];

if (!names.length) {
  console.error('No exam content modules found in scripts/lib/exam-content/.');
  process.exit(1);
}

const imageBase = localImages ? 'local' : 'remote';
const drifted = [];
let wrote = 0;

for (const name of names) {
  const exam = require(path.join(CONTENT_DIR, name));
  const built = buildExam(exam, imageBase);
  const dir = path.join(OUT_ROOT, exam.id);

  for (const [file, text] of Object.entries(built.files)) {
    const target = path.join(dir, file);
    if (check) {
      const onDisk = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
      if (onDisk !== text) drifted.push(path.relative(ROOT, target));
      continue;
    }
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(target, text);
    wrote++;
    console.log(`  wrote ${path.relative(ROOT, target)}`);
  }

  if (check) continue;

  if (bundle) {
    const entries = [
      { name: 'imsmanifest.xml', data: Buffer.from(built.files['imsmanifest.xml'], 'utf8') },
      { name: `${exam.id}.xml`, data: Buffer.from(built.files[`${exam.id}.xml`], 'utf8') }
    ];
    if (imageBase === 'local') {
      for (const rel of built.imageFiles) {
        entries.push({ name: path.basename(rel), data: fs.readFileSync(path.join(ROOT, rel)) });
      }
    }
    const zipPath = path.join(dir, `${exam.id}.zip`);
    fs.writeFileSync(zipPath, zipSync(entries));
    console.log(`  wrote ${path.relative(ROOT, zipPath)}  (${built.items.length} items, images ${imageBase})`);
  }
}

if (check) {
  if (drifted.length) {
    console.error('Exam package differs from what the content model produces:');
    for (const f of drifted) console.error(`  ${f}`);
    console.error('\nEdit scripts/lib/exam-content/, then run: npm run build:exam');
    process.exit(1);
  }
  console.log(`${names.length} exam package(s) match the content model`);
} else {
  console.log(`\n${wrote} file(s) written from ${names.length} exam content module(s).`);
}
