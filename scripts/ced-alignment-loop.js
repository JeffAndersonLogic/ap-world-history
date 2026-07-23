#!/usr/bin/env node
'use strict';

/**
 * ced-alignment-loop.js  —  the generate → judge → approval loop
 *
 * Ties the pieces together into one runnable loop:
 *   1. GENERATE  build the rubric-grounded judge prompt for each topic
 *                (scripts/score-ced-alignment.js).
 *   2. JUDGE     obtain a verdict. Two paths:
 *                 - API path  (if ANTHROPIC_API_KEY + @anthropic-ai/sdk exist):
 *                   calls the model, and with --samples N calls it N times and
 *                   reports per-dimension variance so you can see whether the
 *                   judge is stable enough to trust unattended.
 *                 - Paste-through path (default here, zero-dependency): writes
 *                   the prompts to <out>/ and reads verdicts back from
 *                   --verdicts DIR (one verdict-<topic>.json per topic). This is
 *                   the same build-a-prompt-and-run-it pattern BeHistorical
 *                   already uses everywhere.
 *   3. APPROVE   render a ranked Markdown report (worst alignment first) with the
 *                critique, proposed rewrite, and an approve/reject line per topic.
 *                Nothing is written back to curriculum automatically — a human
 *                signs off first. That report is the seed of the Teacher Hub
 *                control panel.
 *
 * Usage:
 *   # paste-through (no API key): emit prompts, then ingest verdicts you gathered
 *   node scripts/ced-alignment-loop.js 6.2 6.8 --out scratch/prompts
 *   node scripts/ced-alignment-loop.js 6.2 6.8 --verdicts scratch/verdicts --report scratch/report.md
 *
 *   # API path (when a key + SDK are present):
 *   node scripts/ced-alignment-loop.js 6.2 6.8 --run --samples 5 --report scratch/report.md
 *
 * SCOPE: internal alignment only — see score-ced-alignment.js header.
 */

const fs = require('fs');
const path = require('path');
const { loadLesson } = require('./lib/load-lesson-data');
const { buildJudgePrompt, primarySkill } = require('./score-ced-alignment');

const DIMENSIONS = ['lo_fidelity', 'skill_fidelity', 'kc_coverage', 'cognitive_rigor', 'evidence_specificity'];
const JUDGE_MODEL = process.env.CED_JUDGE_MODEL || 'claude-sonnet-5';

// ── JUDGE: API path (optional, only if key + SDK are present) ─────────────────
async function judgeViaApi(prompt, samples) {
  let Anthropic;
  try { Anthropic = require('@anthropic-ai/sdk'); }
  catch { throw new Error('--run needs @anthropic-ai/sdk installed (npm i @anthropic-ai/sdk).'); }
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('--run needs ANTHROPIC_API_KEY set.');
  const client = new Anthropic();
  const verdicts = [];
  for (let i = 0; i < samples; i++) {
    const res = await client.messages.create({
      model: JUDGE_MODEL,
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    });
    const text = res.content.map((b) => b.text || '').join('');
    verdicts.push(parseVerdict(text));
  }
  return samples > 1 ? aggregateSamples(verdicts) : verdicts[0];
}

function parseVerdict(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object found in judge output.');
  return JSON.parse(text.slice(start, end + 1));
}

// ── Stability: mean + spread per dimension across N samples ───────────────────
function aggregateSamples(verdicts) {
  const base = JSON.parse(JSON.stringify(verdicts[0]));
  const stability = {};
  const collect = (getScores, key) => {
    const cols = {};
    for (const d of DIMENSIONS) cols[d] = [];
    verdicts.forEach((v) => { const s = getScores(v); if (s) DIMENSIONS.forEach((d) => cols[d].push(Number(s[d]))); });
    stability[key] = {};
    for (const d of DIMENSIONS) {
      const xs = cols[d].filter((n) => !Number.isNaN(n));
      const mean = xs.reduce((a, b) => a + b, 0) / (xs.length || 1);
      stability[key][d] = { mean: Math.round(mean * 100) / 100, min: Math.min(...xs), max: Math.max(...xs), spread: Math.max(...xs) - Math.min(...xs) };
    }
  };
  (base.checkpoints || []).forEach((_, i) => collect((v) => v.checkpoints && v.checkpoints[i] && v.checkpoints[i].scores, `checkpoint[${i}]`));
  if (base.skillBuilder) collect((v) => v.skillBuilder && v.skillBuilder.scores, 'skillBuilder');
  const scores = verdicts.map((v) => Number(v.topicAlignmentScore)).filter((n) => !Number.isNaN(n));
  base._stability = { samples: verdicts.length, dimensionSpread: stability, topicScoreRange: { min: Math.min(...scores), max: Math.max(...scores) } };
  return base;
}

// ── JUDGE: paste-through path ─────────────────────────────────────────────────
function judgeViaVerdictsDir(topicId, dir) {
  const file = path.join(dir, `verdict-${topicId}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

// ── APPROVE: render the ranked report (the approval surface) ──────────────────
function avg(scores) {
  const xs = DIMENSIONS.map((d) => Number(scores[d])).filter((n) => !Number.isNaN(n));
  return xs.reduce((a, b) => a + b, 0) / (xs.length || 1);
}

function renderReport(rows) {
  const lines = [];
  lines.push('# CED-Alignment Report');
  lines.push('');
  lines.push('_Eval loop: generate → judge → **you approve**. Scope: internal alignment only — this does NOT verify CED transcription or historical accuracy._');
  lines.push('');
  lines.push('## Topics ranked by alignment score (worst first)');
  lines.push('');
  const ranked = rows.filter((r) => r.verdict).sort((a, b) => (a.verdict.topicAlignmentScore || 0) - (b.verdict.topicAlignmentScore || 0));
  for (const { topicId, verdict } of ranked) {
    const flag = (verdict.topicAlignmentScore || 0) < 85 ? '⚠️ ' : '✅ ';
    lines.push(`### ${flag}Topic ${topicId} — ${verdict.topicAlignmentScore}/100 — ${verdict.skillExpected || ''}`);
    lines.push(`> ${verdict.verdict || ''}`);
    lines.push('');
    lines.push('| Artifact | LO | Skill | KC | Rigor | Evid | Avg |');
    lines.push('|---|---|---|---|---|---|---|');
    const row = (name, s) => `| ${name} | ${s.lo_fidelity} | ${s.skill_fidelity} | ${s.kc_coverage} | ${s.cognitive_rigor} | ${s.evidence_specificity} | ${avg(s).toFixed(1)} |`;
    (verdict.checkpoints || []).forEach((c) => lines.push(row(c.title, c.scores)));
    if (verdict.skillBuilder) lines.push(row('Skill Builder', verdict.skillBuilder.scores));
    lines.push('');
    (verdict.checkpoints || []).forEach((c) => {
      if (c.suggestedRewrite) {
        lines.push(`- **${c.title}** — weakest: \`${c.weakestDimension || '?'}\`. ${c.critique || ''}`);
        lines.push(`  - _Proposed rewrite:_ ${c.suggestedRewrite}`);
        lines.push('  - Decision: `[ ] approve   [ ] reject   [ ] edit`');
      }
    });
    if (verdict._stability) {
      const sp = verdict._stability;
      lines.push(`- _Stability (${sp.samples} samples):_ topic score ${sp.topicScoreRange.min}–${sp.topicScoreRange.max}. Dimensions with spread ≥2 are judgment-sensitive; treat ±1 as noise.`);
    }
    if (verdict.topFixes && verdict.topFixes.length) {
      lines.push(`- _Top fixes:_ ${verdict.topFixes.join(' | ')}`);
    }
    lines.push('');
  }
  const missing = rows.filter((r) => !r.verdict).map((r) => r.topicId);
  if (missing.length) lines.push(`> No verdict yet for: ${missing.join(', ')} (run the judge prompt, save as verdict-<topic>.json).`);
  return lines.join('\n');
}

// ── CLI ───────────────────────────────────────────────────────────────────────
async function main() {
  const argv = process.argv.slice(2);
  const flag = (name) => { const i = argv.indexOf(name); return i === -1 ? null : argv[i + 1]; };
  const has = (name) => argv.includes(name);
  const outDir = flag('--out');
  const verdictsDir = flag('--verdicts');
  const reportPath = flag('--report');
  const samples = Number(flag('--samples') || 1);
  const run = has('--run');
  const consumed = new Set(['--out', '--verdicts', '--report', '--samples']);
  const topics = argv.filter((a, i) => !a.startsWith('--') && !consumed.has(argv[i - 1]));
  if (topics.length === 0) {
    console.error('Usage: node scripts/ced-alignment-loop.js <topic-id>... [--out DIR | --run [--samples N]] [--verdicts DIR] [--report FILE]');
    process.exit(1);
  }

  const rows = [];
  for (const topicId of topics) {
    const { lesson } = loadLesson(topicId);
    const prompt = buildJudgePrompt(topicId, lesson);
    const skill = primarySkill((lesson.meta || {}).title || '', (lesson.meta || {}).subtitle || '');
    let verdict = null;

    if (run) {
      verdict = await judgeViaApi(prompt, samples);
    } else if (verdictsDir) {
      verdict = judgeViaVerdictsDir(topicId, verdictsDir);
    } else if (outDir) {
      fs.mkdirSync(outDir, { recursive: true });
      const file = path.join(outDir, `ced-alignment-${topicId}.prompt.txt`);
      fs.writeFileSync(file, prompt);
      console.error(`  GENERATE  wrote ${file}`);
    }
    if (verdict) verdict.skillExpected = verdict.skillExpected || skill;
    rows.push({ topicId, verdict });
  }

  if (verdictsDir || run) {
    const report = renderReport(rows);
    if (reportPath) { fs.mkdirSync(path.dirname(reportPath), { recursive: true }); fs.writeFileSync(reportPath, report); console.error(`  APPROVE   wrote ${reportPath}`); }
    else console.log(report);
  }
}

main().catch((e) => { console.error(`Error: ${e.message}`); process.exit(1); });
