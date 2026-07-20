// BeHistorical pitch deck — AndersonLogic AI
// Palette: ink + warm gold + warm paper, echoing the product's own aesthetic.
// Embeds real student-page screenshots on slides 1, 4, 5, 6, 9.
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const IMGS = JSON.parse(fs.readFileSync(path.join(__dirname, "img-datauris.json"), "utf8"));
const DIMS = JSON.parse(fs.readFileSync(path.join(__dirname, "img-dims.json"), "utf8"));
const imgData = (k) => IMGS[k].replace(/^data:/, ""); // pptxgenjs wants "image/jpeg;base64,..."

const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.3 x 7.5

// ---- palette ----
const INK      = "1A1C1D";
const PANEL    = "24272A";
const PANEL2   = "2E3236";
const GOLD     = "C9A24B";
const GOLD_SOFT= "E4C878";
const GOLD_DEEP= "9A7A28";
const PAPER    = "F4EEE2";
const PAPER2   = "FBF7EF";
const INKTEXT  = "2B2723";
const MUTE_D   = "9AA0A6";
const MUTE_L   = "6E675C";
const WHITE    = "FFFFFF";
const CARD_BORD= "E4DBC9";

const SERIF = "Bookman Old Style";
const SANS  = "Calibri";
const MONO  = "Consolas";

const W = 13.3, H = 7.5;

// ---------- helpers ----------
function bg(slide, color) { slide.background = { color }; }

function goldCircle(slide, x, y, d, txt, fontSize) {
  slide.addShape(p.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: GOLD } });
  if (txt) slide.addText(txt, {
    x, y, w: d, h: d, align: "center", valign: "middle",
    fontFace: SERIF, fontSize: fontSize || 16, bold: true, color: INK, margin: 0,
  });
}

function footer(slide, dark) {
  slide.addText(
    [
      { text: "AndersonLogic AI", options: { bold: true, color: GOLD } },
      { text: "   ·   BeHistorical", options: { color: dark ? MUTE_D : MUTE_L } },
    ],
    { x: 0.55, y: H - 0.5, w: 8, h: 0.3, fontFace: SANS, fontSize: 10, align: "left", margin: 0 }
  );
}
function pageNum(slide, n, dark) {
  slide.addText(String(n).padStart(2, "0") + " / 10", {
    x: W - 1.7, y: H - 0.55, w: 1.2, h: 0.35, align: "right",
    fontFace: MONO, fontSize: 11, bold: true, color: dark ? MUTE_D : MUTE_L, margin: 0,
  });
}
function eyebrow(slide, txt, x, y, color) {
  slide.addText(txt.toUpperCase(), {
    x, y, w: 11, h: 0.3, fontFace: MONO, fontSize: 12, bold: true,
    color: color || GOLD, charSpacing: 3, align: "left", margin: 0,
  });
}
// framed screenshot: backing card w/ shadow + a slim title bar + image
function framedShot(slide, key, x, y, w, barLabel, barDark) {
  const [iw, ih] = DIMS[key];
  const imgH = w * ih / iw;
  const bar = 0.28;
  // backing card
  slide.addShape(p.ShapeType.roundRect, {
    x: x - 0.05, y: y - 0.05, w: w + 0.10, h: bar + imgH + 0.10, rectRadius: 0.06,
    fill: { color: "0E0F10" }, line: { color: "3A3F45", width: 0.75 },
    shadow: { type: "outer", color: "000000", opacity: 0.45, blur: 12, offset: 6, angle: 90 },
  });
  // title bar
  slide.addShape(p.ShapeType.rect, { x, y, w, h: bar, fill: { color: "191C1F" }, line: { type: "none" } });
  const dotY = y + bar / 2 - 0.045;
  slide.addShape(p.ShapeType.ellipse, { x: x + 0.14, y: dotY, w: 0.09, h: 0.09, fill: { color: "C9564E" } });
  slide.addShape(p.ShapeType.ellipse, { x: x + 0.28, y: dotY, w: 0.09, h: 0.09, fill: { color: "D8A441" } });
  slide.addShape(p.ShapeType.ellipse, { x: x + 0.42, y: dotY, w: 0.09, h: 0.09, fill: { color: "5AA668" } });
  slide.addText(barLabel, { x: x + 0.62, y, w: w - 0.7, h: bar, valign: "middle", align: "left",
    fontFace: MONO, fontSize: 8.5, color: "8B9199", margin: 0 });
  // image
  slide.addImage({ data: imgData(key), x, y: y + bar, w, h: imgH });
  return bar + imgH;
}

// =====================================================================
// SLIDE 1 — TITLE
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);

  // real bronze medallion, right
  const key = "medallion", [iw, ih] = DIMS[key], mw = 3.15, mh = mw * ih / iw;
  s.addShape(p.ShapeType.roundRect, {
    x: 9.35 - 0.06, y: 2.15 - 0.06, w: mw + 0.12, h: mh + 0.12, rectRadius: 0.1,
    fill: { color: GOLD }, line: { type: "none" },
    shadow: { type: "outer", color: "000000", opacity: 0.55, blur: 16, offset: 8, angle: 90 },
  });
  s.addImage({ data: imgData(key), x: 9.35, y: 2.15, w: mw, h: mh, rounding: false });

  s.addText("ANDERSONLOGIC AI  ·  PRESENTS", {
    x: 0.7, y: 1.55, w: 8, h: 0.4, fontFace: MONO, fontSize: 13, bold: true,
    color: GOLD, charSpacing: 3, margin: 0,
  });
  s.addText([
    { text: "Be", options: { color: WHITE } },
    { text: "Historical", options: { color: GOLD } },
  ], { x: 0.62, y: 2.05, w: 9, h: 1.5, fontFace: SERIF, fontSize: 72, bold: true, margin: 0 });
  s.addText("A complete, AI-integrated platform for teaching AP World History.", {
    x: 0.7, y: 3.75, w: 7.9, h: 0.9, fontFace: SANS, fontSize: 21, color: PAPER, margin: 0,
  });
  s.addText("One consistent learning path. Ten modules. Every topic. Powered by AI that coaches — never completes.", {
    x: 0.7, y: 4.62, w: 7.7, h: 0.8, fontFace: SANS, fontSize: 14, italic: true, color: MUTE_D, margin: 0,
  });
  goldCircle(s, 0.7, 5.72, 0.18, "", 10);
  s.addText("Created by Jeff Anderson  ·  A product of AndersonLogic AI", {
    x: 1.0, y: 5.6, w: 8, h: 0.4, fontFace: SANS, fontSize: 13, color: PAPER, margin: 0,
  });
  pageNum(s, 1, true);
})();

// =====================================================================
// SLIDE 2 — THE OPPORTUNITY
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "Why BeHistorical exists", 0.7, 0.6, GOLD_DEEP);
  s.addText("Three problems every AP classroom is facing right now", {
    x: 0.66, y: 0.95, w: 12, h: 1.0, fontFace: SERIF, fontSize: 33, bold: true, color: INKTEXT, margin: 0,
  });
  const rows = [
    ["1", "Rigor is uneven", "AP World demands document analysis, contextualization, and evidence-based argument — but delivery varies teacher to teacher, topic to topic, and day to day."],
    ["2", "AI arrived without a plan", "Students already use AI. Most classrooms have no structure for it — so it becomes an answer machine instead of a thinking partner."],
    ["3", "Teachers fly blind", "By the time a unit test reveals a gap, it's too late to reteach. There's rarely a fast, honest read on what students actually understand."],
  ];
  let y = 2.25;
  rows.forEach(([n, h, d]) => {
    goldCircle(s, 0.7, y, 0.7, n, 26);
    s.addText(h, { x: 1.7, y: y - 0.05, w: 10.8, h: 0.5, fontFace: SERIF, fontSize: 21, bold: true, color: INKTEXT, margin: 0 });
    s.addText(d, { x: 1.7, y: y + 0.45, w: 10.8, h: 0.9, fontFace: SANS, fontSize: 15, color: MUTE_L, margin: 0 });
    y += 1.55;
  });
  s.addText("BeHistorical answers all three — with one repeatable system.", {
    x: 0.7, y: 6.65, w: 12, h: 0.5, fontFace: SERIF, fontSize: 17, italic: true, bold: true, color: GOLD_DEEP, margin: 0,
  });
  footer(s, false); pageNum(s, 2, false);
})();

// =====================================================================
// SLIDE 3 — SCOPE
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
    s.addText(big, { x, y: cy + 0.28, w: cw, h: 1.15, align: "center", fontFace: SERIF, fontSize: 58, bold: true, color: GOLD, margin: 0 });
    s.addText(lab, { x: x + 0.15, y: cy + 1.5, w: cw - 0.3, h: 0.4, align: "center", fontFace: SANS, fontSize: 15, bold: true, color: WHITE, margin: 0 });
    s.addText(sub, { x: x + 0.15, y: cy + 1.92, w: cw - 0.3, h: 0.55, align: "center", fontFace: SANS, fontSize: 11.5, color: MUTE_D, margin: 0 });
  });
  s.addText("~770 module instances  ·  ~231 reading questions  ·  154 First & 10 files  ·  1,700+ files in the repository", {
    x: 0.7, y: 5.95, w: 12, h: 0.5, align: "center", fontFace: MONO, fontSize: 12, color: GOLD_SOFT, margin: 0,
  });
  footer(s, true); pageNum(s, 3, true);
})();

// =====================================================================
// SLIDE 4 — 10-MODULE PATH (real screenshot)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "The signature system", 0.7, 0.5, GOLD_DEEP);
  s.addText("One learning path. Ten modules. Every single lesson.", {
    x: 0.66, y: 0.85, w: 12.2, h: 0.7, fontFace: SERIF, fontSize: 28, bold: true, color: INKTEXT, margin: 0,
  });
  // screenshot left
  framedShot(s, "modules", 0.7, 1.75, 4.75, "behistorical · unit 1 · topic 1.1 — interactive modules");
  s.addText("Live screenshot · Topic 1.1, Song China", {
    x: 0.7, y: 6.55, w: 5, h: 0.3, fontFace: MONO, fontSize: 9.5, color: MUTE_L, margin: 0,
  });
  // text right
  const rx = 6.05, rw = 6.5;
  s.addText("The same pedagogical spine runs through all 77 lessons — every lesson opens the same ten modules in the same order, so students always know where they are and quality never drifts.", {
    x: rx, y: 1.85, w: rw, h: 1.3, fontFace: SANS, fontSize: 15.5, color: MUTE_L, margin: 0, valign: "top",
  });
  const chips = ["1.  Build Context", "2.  Learn & Practice", "3.  Check Understanding"];
  let cx = rx;
  chips.forEach((c) => {
    const cwd = 0.28 + c.length * 0.083;
    s.addShape(p.ShapeType.roundRect, { x: cx, y: 3.35, w: cwd, h: 0.42, rectRadius: 0.21, fill: { color: PAPER2 }, line: { color: CARD_BORD, width: 1 } });
    s.addText(c, { x: cx, y: 3.35, w: cwd, h: 0.42, align: "center", valign: "middle", fontFace: MONO, fontSize: 10.5, color: INKTEXT, margin: 0 });
    cx += cwd + 0.2;
  });
  s.addText("Modules 04, 07, 08 & 09 carry the features that make BeHistorical distinctive.", {
    x: rx, y: 4.1, w: rw, h: 0.6, fontFace: SERIF, fontSize: 15.5, italic: true, color: GOLD_DEEP, margin: 0,
  });
  footer(s, false); pageNum(s, 4, false);
})();

// =====================================================================
// SLIDE 5 — SIGNATURE MODULES (First & 10 screenshot)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "What makes it different", 0.7, 0.5, GOLD_DEEP);
  s.addText("Named modules students remember", {
    x: 0.66, y: 0.85, w: 12, h: 0.7, fontFace: SERIF, fontSize: 28, bold: true, color: INKTEXT, margin: 0,
  });
  const used = framedShot(s, "first10", 0.7, 1.75, 6.05, "behistorical · first-and-10 · topic 1.1");
  s.addText('First & 10 Reading — "The World That Song Built"', {
    x: 0.7, y: 1.75 + used + 0.12, w: 6.1, h: 0.3, fontFace: MONO, fontSize: 9.5, color: MUTE_L, margin: 0,
  });
  const items = [
    ["First & 10", "A designed, textbook-quality reading with vocab chips, AP-skill callouts, and three open-response questions."],
    ["BeSurreal", "A surprising, human detail that makes history concrete and memorable."],
    ["Evidence Lab", "Students connect real evidence to a larger political, cultural, or economic claim."],
    ["Primary Source", "An authentic excerpt with a HIPP analysis prompt."],
    ["AP Skill Builder", "Focused practice on one AP reasoning skill per topic."],
    ["BeReady", "A ten-second takeaway that synthesizes the whole reading."],
  ];
  const rx = 7.1, rw = 5.5;
  let y = 1.8;
  items.forEach(([t, d]) => {
    s.addText(t, { x: rx, y, w: rw, h: 0.34, fontFace: SERIF, fontSize: 16, bold: true, color: GOLD_DEEP, margin: 0 });
    s.addText(d, { x: rx, y: y + 0.32, w: rw, h: 0.55, fontFace: SANS, fontSize: 12.5, color: MUTE_L, margin: 0, valign: "top" });
    y += 0.85;
  });
  footer(s, false); pageNum(s, 5, false);
})();

// =====================================================================
// SLIDE 6 — BeInTheRoom (Song Court screenshot)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);
  eyebrow(s, "The flagship module", 0.7, 0.5);
  s.addText("BeInTheRoom — decision simulations, not costume roleplay", {
    x: 0.66, y: 0.85, w: 12.2, h: 0.7, fontFace: SERIF, fontSize: 27, bold: true, color: WHITE, margin: 0,
  });
  const used = framedShot(s, "bitr", 0.7, 1.75, 6.0, "behistorical · beintheroom · unit 1 · topic 1.1");
  s.addText('Live scenario — "Advising the Song Court"', {
    x: 0.7, y: 1.75 + used + 0.12, w: 6.1, h: 0.3, fontFace: MONO, fontSize: 9.5, color: MUTE_D, margin: 0,
  });
  const steps = [
    ["Enter", "a real historical decision point"],
    ["Adopt", "a role with goals, fears, constraints"],
    ["Decide", "a defensible recommendation"],
    ["Defend", "with evidence; AI coaching probes it"],
    ["Reflect", "out of character, AP-style"],
  ];
  const rx = 7.05;
  let y = 1.9;
  steps.forEach(([h, d], i) => {
    goldCircle(s, rx, y, 0.44, String(i + 1), 16);
    s.addText([
      { text: h + "   ", options: { bold: true, color: WHITE, fontSize: 15 } },
      { text: d, options: { color: MUTE_D, fontSize: 13 } },
    ], { x: rx + 0.6, y: y + 0.02, w: 5.4, h: 0.44, fontFace: SANS, align: "left", valign: "middle", margin: 0 });
    y += 0.62;
  });
  // quality chips
  const qc = ["4+ roles", "8–12 evidence chips", "3 trade-offs", "61 live & linked"];
  let cx = rx, cy = y + 0.15;
  qc.forEach((c) => {
    const cwd = 0.3 + c.length * 0.078;
    if (cx + cwd > 12.6) { cx = rx; cy += 0.5; }
    s.addShape(p.ShapeType.roundRect, { x: cx, y: cy, w: cwd, h: 0.4, rectRadius: 0.2, fill: { color: PANEL }, line: { color: PANEL2, width: 1 } });
    s.addText(c, { x: cx, y: cy, w: cwd, h: 0.4, align: "center", valign: "middle", fontFace: MONO, fontSize: 10, color: GOLD_SOFT, margin: 0 });
    cx += cwd + 0.18;
  });
  footer(s, true); pageNum(s, 6, true);
})();

// =====================================================================
// SLIDE 7 — AI DONE RIGHT
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "AI, with guardrails", 0.7, 0.55, GOLD_DEEP);
  s.addText("AI that coaches — never completes", {
    x: 0.66, y: 0.9, w: 12, h: 0.9, fontFace: SERIF, fontSize: 33, bold: true, color: INKTEXT, margin: 0,
  });
  s.addText("Every reading and simulation builds a ready-to-paste coaching prompt and hands it to the class MagicSchool bot. The AI asks one question at a time — and is explicitly forbidden from writing the answer.", {
    x: 0.7, y: 1.8, w: 12, h: 0.7, fontFace: SANS, fontSize: 15, color: MUTE_L, margin: 0,
  });
  s.addShape(p.ShapeType.roundRect, { x: 0.7, y: 2.75, w: 6.05, h: 3.7, rectRadius: 0.12, fill: { color: PAPER2 }, line: { color: CARD_BORD, width: 1 } });
  s.addText("THE 6-STAGE SOCRATIC DIALOGUE", { x: 1.0, y: 3.0, w: 5.5, h: 0.35, fontFace: MONO, fontSize: 11, bold: true, color: GOLD_DEEP, charSpacing: 1.5, margin: 0 });
  const stages = ["Role understanding", "Evidence check", "Trade-off", "Opposing perspective", "Historical thinking", "Revision"];
  stages.forEach((st, i) => {
    const yy = 3.5 + i * 0.47;
    goldCircle(s, 1.0, yy, 0.34, String(i + 1), 13);
    s.addText(st, { x: 1.5, y: yy - 0.03, w: 5.0, h: 0.4, fontFace: SANS, fontSize: 14.5, bold: true, color: INKTEXT, valign: "middle", margin: 0 });
  });
  s.addShape(p.ShapeType.roundRect, { x: 7.0, y: 2.75, w: 5.6, h: 3.7, rectRadius: 0.12, fill: { color: INK }, line: { color: INK, width: 1 } });
  s.addText("HOW WORK FLOWS", { x: 7.3, y: 3.0, w: 5.0, h: 0.35, fontFace: MONO, fontSize: 11, bold: true, color: GOLD, charSpacing: 1.5, margin: 0 });
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
// SLIDE 8 — TEACHER ANALYTICS
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, PAPER);
  eyebrow(s, "For the teacher", 0.7, 0.55, GOLD_DEEP);
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
    goldCircle(s, x + 0.3, y + 0.32, 0.5, String(i + 1), 18);
    s.addText(t, { x: x + 1.0, y: y + 0.28, w: cw - 1.25, h: 0.45, fontFace: SERIF, fontSize: 18, bold: true, color: INKTEXT, margin: 0 });
    s.addText(d, { x: x + 1.0, y: y + 0.78, w: cw - 1.25, h: 0.95, fontFace: SANS, fontSize: 12.5, color: MUTE_L, margin: 0, valign: "top" });
  });
  footer(s, false); pageNum(s, 8, false);
})();

// =====================================================================
// SLIDE 9 — BUILT LIKE SOFTWARE (Command Center screenshot)
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);
  eyebrow(s, "Why it scales", 0.7, 0.5);
  s.addText("Built like software, not a slide folder", {
    x: 0.66, y: 0.85, w: 12, h: 0.7, fontFace: SERIF, fontSize: 28, bold: true, color: WHITE, margin: 0,
  });
  const used = framedShot(s, "cc", 0.7, 1.75, 6.05, "behistorical · repository command center");
  s.addText("The Command Center — audited against what's actually on disk", {
    x: 0.7, y: 1.75 + used + 0.12, w: 6.1, h: 0.3, fontFace: MONO, fontSize: 9.5, color: MUTE_D, margin: 0,
  });
  const pts = [
    ["Automated validation", "A 547-file audit runs on every change — module order, form wiring, and simulation quality gates. Zero-error deploys."],
    ["Deterministic builders", "Whole units are generated from data by scripts — so a fix rolls out everywhere, consistently, at once."],
    ["Codified quality gates", "Design rules live in blueprints and are enforced by machine before anything ships."],
  ];
  const rx = 7.1, rw = 5.5;
  let y = 1.85;
  pts.forEach(([t, d]) => {
    s.addText(t, { x: rx, y, w: rw, h: 0.34, fontFace: SERIF, fontSize: 17, bold: true, color: GOLD_SOFT, margin: 0 });
    s.addText(d, { x: rx, y: y + 0.34, w: rw, h: 0.75, fontFace: SANS, fontSize: 13, color: PAPER, margin: 0, valign: "top" });
    y += 1.2;
  });
  s.addText("The difference between a teacher's materials and a product a district can adopt.", {
    x: rx, y: y + 0.05, w: rw, h: 0.6, fontFace: SERIF, fontSize: 15, italic: true, bold: true, color: GOLD, margin: 0,
  });
  footer(s, true); pageNum(s, 9, true);
})();

// =====================================================================
// SLIDE 10 — CLOSING
// =====================================================================
(() => {
  const s = p.addSlide();
  bg(s, INK);
  const marks = ["BeReady", "BeSurreal", "BeInTheRoom", "BeHistorical"];
  marks.forEach((m, i) => {
    s.addText(m, { x: 8.9, y: 1.1 + i * 1.3, w: 4.2, h: 0.9, align: "right", fontFace: SERIF, fontSize: 20, italic: true, color: PANEL2, margin: 0 });
  });
  s.addText("WHERE THIS GOES", { x: 0.7, y: 0.75, w: 9, h: 0.4, fontFace: MONO, fontSize: 12, bold: true, color: GOLD, charSpacing: 4, margin: 0 });
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
    goldCircle(s, 0.7, y + 0.05, 0.16, "", 10);
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
