// BeHistorical pitch deck — AndersonLogic AI
// Palette: ink + warm gold + warm paper, echoing the product's own aesthetic.
const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.3 x 7.5

// ---- palette ----
const INK      = "1A1C1D"; // product background
const PANEL    = "24272A"; // slightly lighter panel on dark
const PANEL2   = "2E3236";
const GOLD     = "C9A24B"; // warm gold accent
const GOLD_SOFT= "E4C878";
const PAPER    = "F4EEE2"; // warm paper (product reading bg)
const PAPER2   = "FBF7EF";
const INKTEXT  = "2B2723"; // dark ink text on paper
const MUTE_D   = "9AA0A6"; // muted on dark
const MUTE_L   = "6E675C"; // muted on paper
const TEAL     = "3E9AA3"; // AI accent
const WHITE     = "FFFFFF";
const CARD_BORD= "E4DBC9";

const SERIF = "Bookman Old Style"; // safe-list serif with personality
const SANS  = "Calibri";

const W = 13.3, H = 7.5;

// ---------- helpers ----------
function bg(slide, color) { slide.background = { color }; }

function goldCircle(slide, x, y, d, txt, txtColor, fontSize) {
  slide.addShape(p.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: GOLD } });
  slide.addText(txt, {
    x, y, w: d, h: d, align: "center", valign: "middle",
    fontFace: SERIF, fontSize: fontSize || 16, bold: true, color: INK, margin: 0,
  });
}

function footer(slide, dark) {
  slide.addText(
    [
      { text: "AndersonLogic AI", options: { bold: true, color: dark ? GOLD : GOLD } },
      { text: "   ·   BeHistorical", options: { color: dark ? MUTE_D : MUTE_L } },
    ],
    { x: 0.55, y: H - 0.5, w: 8, h: 0.3, fontFace: SANS, fontSize: 10, align: "left", margin: 0 }
  );
}

function pageNum(slide, n, dark) {
  slide.addText(String(n).padStart(2, "0"), {
    x: W - 1.1, y: H - 0.55, w: 0.6, h: 0.35, align: "right",
    fontFace: SERIF, fontSize: 12, bold: true, color: dark ? MUTE_D : MUTE_L, margin: 0,
  });
}

function eyebrow(slide, txt, x, y, color) {
  slide.addText(txt.toUpperCase(), {
    x, y, w: 9, h: 0.3, fontFace: SANS, fontSize: 12, bold: true,
    color: color || GOLD, charSpacing: 3, align: "left", margin: 0,
  });
}

// =====================================================================
// SLIDE 1 — TITLE (dark)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);

  // subtle "Be—" watermark motif, faint gold word column on right
  const marks = ["BeReady", "BeSurreal", "BeInTheRoom", "BeHistorical"];
  marks.forEach((m, i) => {
    s.addText(m, {
      x: 8.7, y: 1.0 + i * 1.35, w: 4.4, h: 0.9, align: "right",
      fontFace: SERIF, fontSize: 22, italic: true, color: PANEL2, margin: 0,
    });
  });

  s.addText("ANDERSONLOGIC AI  ·  PRESENTS", {
    x: 0.7, y: 1.5, w: 9, h: 0.4, fontFace: SANS, fontSize: 14, bold: true,
    color: GOLD, charSpacing: 4, margin: 0,
  });

  s.addText("BeHistorical", {
    x: 0.62, y: 2.05, w: 9.5, h: 1.6, fontFace: SERIF, fontSize: 76, bold: true,
    color: WHITE, margin: 0,
  });

  s.addText("A complete, AI-integrated platform for teaching AP World History.", {
    x: 0.7, y: 3.75, w: 8.2, h: 0.9, fontFace: SANS, fontSize: 22, color: PAPER, margin: 0,
  });

  s.addText("One consistent learning path. Ten modules. Every topic. Powered by AI that coaches — never completes.", {
    x: 0.7, y: 4.6, w: 7.8, h: 0.9, fontFace: SANS, fontSize: 15, italic: true, color: MUTE_D, margin: 0,
  });

  // gold rule accent as a small motif dot row (not a stripe)
  goldCircle(s, 0.7, 5.75, 0.18, "", INK, 10);
  s.addText("Created by Jeff Anderson  ·  A product of AndersonLogic AI", {
    x: 1.0, y: 5.62, w: 8, h: 0.4, fontFace: SANS, fontSize: 13, color: PAPER, margin: 0,
  });

  pageNum(s, 1, true);
})();

// =====================================================================
// SLIDE 2 — THE OPPORTUNITY (light)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "Why BeHistorical exists", 0.7, 0.6);
  s.addText("Three problems every AP classroom is facing right now", {
    x: 0.66, y: 0.95, w: 12, h: 1.0, fontFace: SERIF, fontSize: 34, bold: true, color: INKTEXT, margin: 0,
  });

  const rows = [
    ["1", "Rigor is uneven", "AP World demands document analysis, contextualization, and evidence-based argument — but delivery varies teacher to teacher, topic to topic, and day to day."],
    ["2", "AI arrived without a plan", "Students already use AI. Most classrooms have no structure for it — so it becomes an answer machine instead of a thinking partner."],
    ["3", "Teachers fly blind", "By the time a unit test reveals a gap, it's too late to reteach. There's rarely a fast, honest read on what students actually understand."],
  ];
  let y = 2.25;
  rows.forEach(([n, h, d]) => {
    goldCircle(s, 0.7, y, 0.7, n, INK, 26);
    s.addText(h, { x: 1.7, y: y - 0.05, w: 10.8, h: 0.5, fontFace: SERIF, fontSize: 21, bold: true, color: INKTEXT, margin: 0 });
    s.addText(d, { x: 1.7, y: y + 0.45, w: 10.8, h: 0.9, fontFace: SANS, fontSize: 15, color: MUTE_L, margin: 0 });
    y += 1.55;
  });

  s.addText("BeHistorical answers all three — with one repeatable system.", {
    x: 0.7, y: 6.65, w: 12, h: 0.5, fontFace: SERIF, fontSize: 17, italic: true, bold: true, color: GOLD, margin: 0,
  });

  footer(s, false); pageNum(s, 2, false);
})();

// =====================================================================
// SLIDE 3 — SCOPE AT A GLANCE (dark, stat callouts)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);
  eyebrow(s, "Scope at a glance", 0.7, 0.6);
  s.addText("A finished course — not a demo", {
    x: 0.66, y: 0.95, w: 12, h: 0.9, fontFace: SERIF, fontSize: 34, bold: true, color: WHITE, margin: 0,
  });
  s.addText("The full College Board AP World framework, plus a pre-1200 Foundations bridge — built, wired, and automatically validated.", {
    x: 0.7, y: 1.85, w: 11.8, h: 0.6, fontFace: SANS, fontSize: 15, color: MUTE_D, margin: 0,
  });

  const stats = [
    ["9", "units + Foundations", "the complete AP World scope"],
    ["77", "complete lessons", "71 topics + 6 Foundations"],
    ["61", "BeInTheRoom sims", "26 built to the full quality bar"],
    ["547", "files auto-validated", "every deploy, zero errors"],
  ];
  const cw = 2.85, gap = 0.32, startX = 0.7, cy = 2.9, ch = 2.6;
  stats.forEach(([big, lab, sub], i) => {
    const x = startX + i * (cw + gap);
    s.addShape(p.ShapeType.roundRect, { x, y: cy, w: cw, h: ch, rectRadius: 0.12, fill: { color: PANEL }, line: { color: PANEL2, width: 1 } });
    s.addText(big, { x, y: cy + 0.28, w: cw, h: 1.15, align: "center", fontFace: SERIF, fontSize: 60, bold: true, color: GOLD, margin: 0 });
    s.addText(lab, { x: x + 0.15, y: cy + 1.5, w: cw - 0.3, h: 0.4, align: "center", fontFace: SANS, fontSize: 15, bold: true, color: WHITE, margin: 0 });
    s.addText(sub, { x: x + 0.15, y: cy + 1.92, w: cw - 0.3, h: 0.55, align: "center", fontFace: SANS, fontSize: 11.5, color: MUTE_D, margin: 0 });
  });

  s.addText("~770 module instances  ·  ~231 reading questions  ·  154 First & 10 files  ·  1,700+ files in the repository", {
    x: 0.7, y: 5.95, w: 12, h: 0.5, align: "center", fontFace: SANS, fontSize: 13, italic: true, color: GOLD_SOFT, margin: 0,
  });

  footer(s, true); pageNum(s, 3, true);
})();

// =====================================================================
// SLIDE 4 — THE 10-MODULE LEARNING PATH (light) — the signature system
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "The signature system", 0.7, 0.5);
  s.addText("One learning path. Ten modules. Every single lesson.", {
    x: 0.66, y: 0.85, w: 12.2, h: 0.9, fontFace: SERIF, fontSize: 31, bold: true, color: INKTEXT, margin: 0,
  });
  s.addText("The same pedagogical spine runs through all 77 lessons — Build Context → Learn & Practice → Check Understanding — and it's enforced automatically, so quality never drifts.", {
    x: 0.7, y: 1.7, w: 12, h: 0.6, fontFace: SANS, fontSize: 14, color: MUTE_L, margin: 0,
  });

  const mods = [
    "Map & Geography Check", "First & 10 Reading", "Content Delivery", "BeSurreal", "AP Skill Builder",
    "Checkpoint 1", "Evidence Lab", "Primary Source / AI Coach", "BeInTheRoom", "Checkpoint 2",
  ];
  const cols = 5, cw = 2.32, ch = 1.55, gx = 0.18, gy = 0.28, sx = 0.7, sy = 2.55;
  mods.forEach((m, i) => {
    const r = Math.floor(i / cols), c = i % cols;
    const x = sx + c * (cw + gx), y = sy + r * (ch + gy);
    s.addShape(p.ShapeType.roundRect, { x, y, w: cw, h: ch, rectRadius: 0.1, fill: { color: PAPER2 }, line: { color: CARD_BORD, width: 1 } });
    goldCircle(s, x + 0.18, y + 0.18, 0.55, String(i + 1).padStart(2, "0"), INK, 15);
    s.addText(m, { x: x + 0.12, y: y + 0.78, w: cw - 0.24, h: 0.7, align: "left", fontFace: SANS, fontSize: 13, bold: true, color: INKTEXT, margin: 0, valign: "top" });
  });

  s.addText("Modules 04, 07, 08 & 09 carry the features that make BeHistorical distinctive — next.", {
    x: 0.7, y: 6.7, w: 12, h: 0.4, fontFace: SANS, fontSize: 13, italic: true, color: GOLD, margin: 0,
  });
  footer(s, false); pageNum(s, 4, false);
})();

// =====================================================================
// SLIDE 5 — SIGNATURE MODULES (light, 2x3 card grid)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "What makes it different", 0.7, 0.55);
  s.addText("Named modules students remember", {
    x: 0.66, y: 0.9, w: 12, h: 0.9, fontFace: SERIF, fontSize: 32, bold: true, color: INKTEXT, margin: 0,
  });

  const cards = [
    ["First & 10", "A designed, textbook-quality narrative reading with vocab chips, AP-skill callouts, and three open-response questions — every topic."],
    ["BeSurreal", "A surprising, human detail that makes history concrete — printed restaurant menus in Song China — with a 'what does this reveal?' prompt."],
    ["Evidence Lab", "Students select real historical evidence and connect it to a larger political, cultural, or economic claim."],
    ["Primary Source", "An authentic excerpt with full attribution and a HIPP prompt — Historical situation, Intended audience, Purpose, Point of view."],
    ["AP Skill Builder", "Focused practice on one AP reasoning skill per topic — contextualization, causation, comparison — with a scaffolded writing prompt."],
    ["BeReady", "A ten-second 'takeaway' that ties institutions, beliefs, and economy into one big-picture synthesis to close each reading."],
  ];
  const cols = 3, cw = 3.95, ch = 2.15, gx = 0.28, gy = 0.32, sx = 0.7, sy = 2.05;
  cards.forEach(([t, d], i) => {
    const r = Math.floor(i / cols), c = i % cols;
    const x = sx + c * (cw + gx), y = sy + r * (ch + gy);
    s.addShape(p.ShapeType.roundRect, { x, y, w: cw, h: ch, rectRadius: 0.1, fill: { color: PAPER2 }, line: { color: CARD_BORD, width: 1 } });
    s.addText(t, { x: x + 0.28, y: y + 0.22, w: cw - 0.56, h: 0.5, fontFace: SERIF, fontSize: 19, bold: true, color: GOLD_SOFT === "" ? INKTEXT : "9A7A28", margin: 0 });
    s.addText(d, { x: x + 0.28, y: y + 0.78, w: cw - 0.56, h: 1.25, fontFace: SANS, fontSize: 12.5, color: MUTE_L, margin: 0, valign: "top" });
  });
  footer(s, false); pageNum(s, 5, false);
})();

// =====================================================================
// SLIDE 6 — BeInTheRoom (dark hero)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);
  eyebrow(s, "The flagship module", 0.7, 0.55);
  s.addText("BeInTheRoom", {
    x: 0.66, y: 0.9, w: 8, h: 0.9, fontFace: SERIF, fontSize: 40, bold: true, color: WHITE, margin: 0,
  });
  s.addText("Historically grounded decision simulations — not costume roleplay.", {
    x: 0.7, y: 1.75, w: 8.2, h: 0.5, fontFace: SANS, fontSize: 16, italic: true, color: GOLD_SOFT, margin: 0,
  });

  const steps = [
    ["Enter", "the student steps into a real historical decision point"],
    ["Adopt", "a role with genuine goals, fears, and constraints"],
    ["Decide", "make a defensible recommendation under pressure"],
    ["Defend", "marshal evidence; AI coaching probes the reasoning"],
    ["Reflect", "step out of character and write an AP-style analysis"],
  ];
  let y = 2.5;
  steps.forEach(([h, d], i) => {
    goldCircle(s, 0.7, y, 0.5, String(i + 1), INK, 18);
    s.addText([
      { text: h + "   ", options: { bold: true, color: WHITE, fontSize: 16 } },
      { text: d, options: { color: MUTE_D, fontSize: 14 } },
    ], { x: 1.35, y: y + 0.02, w: 6.9, h: 0.5, fontFace: SANS, align: "left", valign: "middle", margin: 0 });
    y += 0.72;
  });

  // right panel: quality contract
  const px = 9.0, pw = 3.65, py = 2.4, ph = 4.1;
  s.addShape(p.ShapeType.roundRect, { x: px, y: py, w: pw, h: ph, rectRadius: 0.12, fill: { color: PANEL }, line: { color: PANEL2, width: 1 } });
  s.addText("THE QUALITY BAR", { x: px + 0.3, y: py + 0.28, w: pw - 0.6, h: 0.35, fontFace: SANS, fontSize: 12, bold: true, color: GOLD, charSpacing: 2, margin: 0 });
  const bar = [
    "4+ historical roles per scenario",
    "8–12 curated evidence chips",
    "3 trade-off decisions, no perfect answer",
    "2+ real historical sources",
    "An out-of-character AP reflection",
  ];
  s.addText(bar.map((t, i) => ({ text: t, options: { bullet: { code: "2022", indent: 14 }, color: PAPER, breakLine: i !== bar.length - 1, paraSpaceAfter: 10 } })),
    { x: px + 0.32, y: py + 0.75, w: pw - 0.62, h: 2.55, fontFace: SANS, fontSize: 13.5, margin: 0, valign: "top" });
  s.addText([
    { text: "61 ", options: { bold: true, color: GOLD, fontSize: 20 } },
    { text: "live & linked", options: { color: MUTE_D, fontSize: 13 } },
  ], { x: px + 0.32, y: py + 3.45, w: pw - 0.6, h: 0.5, fontFace: SANS, align: "left", margin: 0 });

  footer(s, true); pageNum(s, 6, true);
})();

// =====================================================================
// SLIDE 7 — AI DONE RIGHT (light)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "AI, with guardrails", 0.7, 0.55);
  s.addText("AI that coaches — never completes", {
    x: 0.66, y: 0.9, w: 12, h: 0.9, fontFace: SERIF, fontSize: 33, bold: true, color: INKTEXT, margin: 0,
  });
  s.addText("Every reading and simulation builds a ready-to-paste coaching prompt and hands it to the class MagicSchool bot. The AI asks one question at a time — and is explicitly forbidden from writing the answer.", {
    x: 0.7, y: 1.8, w: 12, h: 0.7, fontFace: SANS, fontSize: 15, color: MUTE_L, margin: 0,
  });

  // left: the Socratic dialogue stages
  s.addShape(p.ShapeType.roundRect, { x: 0.7, y: 2.75, w: 6.05, h: 3.7, rectRadius: 0.12, fill: { color: PAPER2 }, line: { color: CARD_BORD, width: 1 } });
  s.addText("THE 6-STAGE SOCRATIC DIALOGUE", { x: 1.0, y: 3.0, w: 5.5, h: 0.35, fontFace: SANS, fontSize: 12, bold: true, color: "9A7A28", charSpacing: 1.5, margin: 0 });
  const stages = ["Role understanding", "Evidence check", "Trade-off", "Opposing perspective", "Historical thinking", "Revision"];
  stages.forEach((st, i) => {
    const yy = 3.5 + i * 0.47;
    goldCircle(s, 1.0, yy, 0.34, String(i + 1), INK, 13);
    s.addText(st, { x: 1.5, y: yy - 0.03, w: 5.0, h: 0.4, fontFace: SANS, fontSize: 14.5, bold: true, color: INKTEXT, valign: "middle", margin: 0 });
  });

  // right: response flow
  s.addShape(p.ShapeType.roundRect, { x: 7.0, y: 2.75, w: 5.6, h: 3.7, rectRadius: 0.12, fill: { color: INK }, line: { color: INK, width: 1 } });
  s.addText("HOW WORK FLOWS", { x: 7.3, y: 3.0, w: 5.0, h: 0.35, fontFace: SANS, fontSize: 12, bold: true, color: GOLD, charSpacing: 1.5, margin: 0 });
  const flow = [
    ["Think in BeHistorical", "students draft and reason inside the platform"],
    ["Coach in MagicSchool", "the built prompt drives one-question-at-a-time dialogue"],
    ["Capture to Google Forms", "responses auto-fill a prefilled form — unit, topic, skills tagged"],
    ["Submit in Canvas", "assessed work lands where teachers already grade"],
  ];
  let fy = 3.45;
  flow.forEach(([h, d], i) => {
    s.addText([
      { text: (i + 1) + ".  ", options: { bold: true, color: GOLD, fontSize: 15 } },
      { text: h, options: { bold: true, color: WHITE, fontSize: 15 } },
    ], { x: 7.3, y: fy, w: 5.1, h: 0.35, fontFace: SANS, align: "left", margin: 0 });
    s.addText(d, { x: 7.62, y: fy + 0.34, w: 4.8, h: 0.45, fontFace: SANS, fontSize: 12, color: MUTE_D, margin: 0 });
    fy += 0.82;
  });

  footer(s, false); pageNum(s, 7, false);
})();

// =====================================================================
// SLIDE 8 — TEACHER COMMAND CENTER & ANALYTICS (light)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "For the teacher", 0.7, 0.55);
  s.addText("A live read on what students understand", {
    x: 0.66, y: 0.9, w: 12, h: 0.9, fontFace: SERIF, fontSize: 32, bold: true, color: INKTEXT, margin: 0,
  });
  s.addText("Student responses flow into an analytics layer that turns raw answers into teaching decisions — before the unit test, not after.", {
    x: 0.7, y: 1.8, w: 12, h: 0.6, fontFace: SANS, fontSize: 15, color: MUTE_L, margin: 0,
  });

  const cards = [
    ["Command Center", "A build dashboard that reads the live repository — every deliverable, unit by unit, tracked in real time."],
    ["Response analytics", "Counts responses, averages confidence, and flags blank, short, or low-confidence answers automatically."],
    ["Misconception detection", "Surfaces recurring error patterns and gaps in AP writing — missing reasoning, weak evidence use."],
    ["Reteach suggestions", "Turns those patterns into concrete, targeted reteach recommendations, filterable by class period."],
  ];
  const cols = 2, cw = 5.85, ch = 1.85, gx = 0.3, gy = 0.3, sx = 0.7, sy = 2.5;
  cards.forEach(([t, d], i) => {
    const r = Math.floor(i / cols), c = i % cols;
    const x = sx + c * (cw + gx), y = sy + r * (ch + gy);
    s.addShape(p.ShapeType.roundRect, { x, y, w: cw, h: ch, rectRadius: 0.1, fill: { color: PAPER2 }, line: { color: CARD_BORD, width: 1 } });
    goldCircle(s, x + 0.3, y + 0.32, 0.5, "", INK, 10);
    s.addText(String(i + 1), { x: x + 0.3, y: y + 0.32, w: 0.5, h: 0.5, align: "center", valign: "middle", fontFace: SERIF, fontSize: 18, bold: true, color: INK, margin: 0 });
    s.addText(t, { x: x + 1.0, y: y + 0.28, w: cw - 1.25, h: 0.45, fontFace: SERIF, fontSize: 18, bold: true, color: INKTEXT, margin: 0 });
    s.addText(d, { x: x + 1.0, y: y + 0.78, w: cw - 1.25, h: 0.95, fontFace: SANS, fontSize: 12.5, color: MUTE_L, margin: 0, valign: "top" });
  });
  footer(s, false); pageNum(s, 8, false);
})();

// =====================================================================
// SLIDE 9 — BUILT LIKE SOFTWARE (dark) — the replicability story
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);
  eyebrow(s, "Why it scales", 0.7, 0.55);
  s.addText("Built like software, not a slide folder", {
    x: 0.66, y: 0.9, w: 12, h: 0.9, fontFace: SERIF, fontSize: 33, bold: true, color: WHITE, margin: 0,
  });
  s.addText("The reason quality holds across 77 lessons — and the reason this method transfers to any course — is engineering discipline underneath.", {
    x: 0.7, y: 1.8, w: 12, h: 0.6, fontFace: SANS, fontSize: 15, color: MUTE_D, margin: 0,
  });

  const cards = [
    ["Automated validation", "A 547-file audit runs on every change — module order, form wiring, and simulation quality gates. Zero-error deploys."],
    ["Deterministic builders", "Whole units are generated from data by scripts — so a fix or upgrade rolls out everywhere, consistently, at once."],
    ["Codified quality gates", "Design rules live in written blueprints and are enforced by machine — a scenario can't ship until it passes the theme-alignment gate."],
  ];
  const cw = 3.9, ch = 2.85, gap = 0.3, sx = 0.7, sy = 2.6;
  cards.forEach(([t, d], i) => {
    const x = sx + i * (cw + gap);
    s.addShape(p.ShapeType.roundRect, { x, y: sy, w: cw, h: ch, rectRadius: 0.12, fill: { color: PANEL }, line: { color: PANEL2, width: 1 } });
    goldCircle(s, x + 0.3, sy + 0.32, 0.55, "", INK);
    s.addText(["✓"][0], { x: x + 0.3, y: sy + 0.32, w: 0.55, h: 0.55, align: "center", valign: "middle", fontFace: SANS, fontSize: 24, bold: true, color: INK, margin: 0 });
    s.addText(t, { x: x + 0.32, y: sy + 1.05, w: cw - 0.6, h: 0.7, fontFace: SERIF, fontSize: 18, bold: true, color: GOLD_SOFT, margin: 0, valign: "top" });
    s.addText(d, { x: x + 0.32, y: sy + 1.7, w: cw - 0.6, h: 1.05, fontFace: SANS, fontSize: 13, color: PAPER, margin: 0, valign: "top" });
  });

  s.addText("This is the difference between a great teacher's materials and a product a district can adopt.", {
    x: 0.7, y: 5.85, w: 12, h: 0.5, fontFace: SERIF, fontSize: 16, italic: true, bold: true, color: GOLD, margin: 0,
  });
  footer(s, true); pageNum(s, 9, true);
})();

// =====================================================================
// SLIDE 10 — WHY THIS MATTERS / WHAT'S NEXT (dark closing)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);

  const marks = ["BeReady", "BeSurreal", "BeInTheRoom", "BeHistorical"];
  marks.forEach((m, i) => {
    s.addText(m, { x: 8.9, y: 1.1 + i * 1.3, w: 4.2, h: 0.9, align: "right", fontFace: SERIF, fontSize: 20, italic: true, color: PANEL2, margin: 0 });
  });

  s.addText("WHERE THIS GOES", { x: 0.7, y: 0.75, w: 9, h: 0.4, fontFace: SANS, fontSize: 13, bold: true, color: GOLD, charSpacing: 4, margin: 0 });
  s.addText("A method — not just a course", {
    x: 0.62, y: 1.25, w: 8.5, h: 1.4, fontFace: SERIF, fontSize: 44, bold: true, color: WHITE, margin: 0,
  });

  const points = [
    ["A repeatable framework", "The 10-module path, the AI guardrails, and the build system are subject-agnostic — ready to lift into any AP or core course."],
    ["Professional development", "The system itself is the curriculum: a concrete model for teaching with AI responsibly, backed by working proof."],
    ["A platform to grow on", "BeHistorical is the first product under AndersonLogic AI — a foundation for a family of AI-integrated learning tools."],
  ];
  let y = 3.05;
  points.forEach(([h, d]) => {
    goldCircle(s, 0.7, y + 0.05, 0.16, "", INK, 10);
    s.addText(h, { x: 1.05, y: y - 0.08, w: 7.4, h: 0.4, fontFace: SERIF, fontSize: 19, bold: true, color: GOLD_SOFT, margin: 0 });
    s.addText(d, { x: 1.05, y: y + 0.36, w: 7.4, h: 0.7, fontFace: SANS, fontSize: 14, color: MUTE_D, margin: 0 });
    y += 1.2;
  });

  s.addText([
    { text: "AndersonLogic AI", options: { bold: true, color: GOLD, fontSize: 18 } },
    { text: "   ·   BeHistorical   ·   Created by Jeff Anderson", options: { color: PAPER, fontSize: 14 } },
  ], { x: 0.7, y: 6.8, w: 12, h: 0.4, fontFace: SANS, align: "left", margin: 0 });

  pageNum(s, 10, true);
})();

p.writeFile({ fileName: "/home/user/ap-world-history/scratchpad-deck/BeHistorical-AndersonLogic-AI.pptx" })
  .then((f) => console.log("wrote", f));
