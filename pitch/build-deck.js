// BeHistorical pitch deck — AndersonLogic AI — 15 slides
// Embeds real student-page screenshots + concept mockups.
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const IMGS = JSON.parse(fs.readFileSync(path.join(__dirname, "img-datauris.json"), "utf8"));
const DIMS = JSON.parse(fs.readFileSync(path.join(__dirname, "img-dims.json"), "utf8"));
const imgData = (k) => IMGS[k].replace(/^data:/, "");

const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.3 x 7.5

const INK="1A1C1D", PANEL="24272A", PANEL2="2E3236";
const GOLD="C9A24B", GOLD_SOFT="E4C878", GOLD_DEEP="9A7A28";
const PAPER="F4EEE2", PAPER2="FBF7EF", CARD="FCF8F0";
const INKTEXT="2B2723", MUTE_D="9AA0A6", MUTE_L="6E675C", WHITE="FFFFFF", CARD_BORD="E4DBC9";
const GREEN_D="3D7A4D", TEAL_D="2F6B71";
const SERIF="Bookman Old Style", SANS="Calibri", MONO="Consolas";
const W=13.3, H=7.5;

function bg(s,c){ s.background={color:c}; }
function disc(s,x,y,d,txt,fs){
  s.addShape(p.ShapeType.ellipse,{x,y,w:d,h:d,fill:{color:GOLD}});
  if(txt) s.addText(txt,{x,y,w:d,h:d,align:"center",valign:"middle",fontFace:SERIF,fontSize:fs||16,bold:true,color:INK,margin:0});
}
function footer(s,dark){
  s.addText([{text:"AndersonLogic AI",options:{bold:true,color:GOLD}},{text:"   ·   BeHistorical",options:{color:dark?MUTE_D:MUTE_L}}],
    {x:0.55,y:H-0.5,w:8,h:0.3,fontFace:SANS,fontSize:10,align:"left",margin:0});
}
function pageNum(s,n,dark){
  s.addText(String(n).padStart(2,"0")+" / 17",{x:W-1.7,y:H-0.55,w:1.2,h:0.35,align:"right",fontFace:MONO,fontSize:11,bold:true,color:dark?MUTE_D:MUTE_L,margin:0});
}
function eyebrow(s,txt,x,y,color){
  s.addText(txt.toUpperCase(),{x,y,w:9,h:0.3,fontFace:MONO,fontSize:12,bold:true,color:color||GOLD,charSpacing:3,align:"left",margin:0});
}
function badge(s,txt,kind){ // top-right pill
  const w=0.5+txt.length*0.083, x=W-0.6-w, y=0.52;
  const opt = kind==="live"
    ? {fill:"21301F", line:"5AA668", col:"7CC98A"}
    : {fill:"2E2A20", line:GOLD, col:GOLD_SOFT};
  s.addShape(p.ShapeType.roundRect,{x,y,w,h:0.34,rectRadius:0.17,fill:{color:opt.fill},line:{color:opt.line,width:1}});
  s.addText(txt.toUpperCase(),{x,y,w,h:0.34,align:"center",valign:"middle",fontFace:MONO,fontSize:10,bold:true,color:opt.col,charSpacing:1.5,margin:0});
}
// framed screenshot; returns total height used (bar+img)
function framedShot(s,key,x,y,w,label){
  const [iw,ih]=DIMS[key], imgH=w*ih/iw, bar=0.28;
  s.addShape(p.ShapeType.roundRect,{x:x-0.05,y:y-0.05,w:w+0.10,h:bar+imgH+0.10,rectRadius:0.06,
    fill:{color:"0E0F10"},line:{color:"3A3F45",width:0.75},
    shadow:{type:"outer",color:"000000",opacity:0.45,blur:12,offset:6,angle:90}});
  s.addShape(p.ShapeType.rect,{x,y,w,h:bar,fill:{color:"191C1F"},line:{type:"none"}});
  const dy=y+bar/2-0.045;
  s.addShape(p.ShapeType.ellipse,{x:x+0.14,y:dy,w:0.09,h:0.09,fill:{color:"C9564E"}});
  s.addShape(p.ShapeType.ellipse,{x:x+0.28,y:dy,w:0.09,h:0.09,fill:{color:"D8A441"}});
  s.addShape(p.ShapeType.ellipse,{x:x+0.42,y:dy,w:0.09,h:0.09,fill:{color:"5AA668"}});
  s.addText(label,{x:x+0.62,y,w:w-0.7,h:bar,valign:"middle",align:"left",fontFace:MONO,fontSize:8.5,color:"8B9199",margin:0});
  s.addImage({data:imgData(key),x,y:y+bar,w,h:imgH});
  return bar+imgH;
}
function featList(s,items,x,y,w,dark){
  let yy=y;
  items.forEach(([t,d])=>{
    s.addText(t,{x,y:yy,w,h:0.32,fontFace:SERIF,fontSize:16,bold:true,color:dark?GOLD_SOFT:GOLD_DEEP,margin:0});
    s.addText(d,{x,y:yy+0.31,w,h:0.6,fontFace:SANS,fontSize:12.5,color:dark?"E9E2D2":MUTE_L,margin:0,valign:"top"});
    yy+=1.0;
  });
  return yy;
}

// ============ 1 TITLE ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  const key="medallion",[iw,ih]=DIMS[key],mw=3.15,mh=mw*ih/iw;
  s.addShape(p.ShapeType.roundRect,{x:9.35-0.06,y:2.15-0.06,w:mw+0.12,h:mh+0.12,rectRadius:0.1,fill:{color:GOLD},line:{type:"none"},
    shadow:{type:"outer",color:"000000",opacity:0.55,blur:16,offset:8,angle:90}});
  s.addImage({data:imgData(key),x:9.35,y:2.15,w:mw,h:mh});
  s.addText("ANDERSONLOGIC AI  ·  PRESENTS",{x:0.7,y:1.5,w:8,h:0.4,fontFace:MONO,fontSize:13,bold:true,color:GOLD,charSpacing:3,margin:0});
  s.addText([{text:"Be",options:{color:WHITE}},{text:"Historical",options:{color:GOLD}}],{x:0.62,y:2.0,w:9,h:1.5,fontFace:SERIF,fontSize:70,bold:true,margin:0});
  s.addText("A complete, AI-integrated platform for teaching AP World History.",{x:0.7,y:3.7,w:7.9,h:0.9,fontFace:SANS,fontSize:20,color:PAPER,margin:0});
  s.addText("One learning path. Ten modules. Personalized study guides, a family newsletter, and a teacher command center — all from one system.",{x:0.7,y:4.55,w:7.7,h:0.9,fontFace:SANS,fontSize:13.5,italic:true,color:MUTE_D,margin:0});
  disc(s,0.7,5.75,0.18,"",10);
  s.addText("Created by Jeff Anderson  ·  A product of AndersonLogic AI",{x:1.0,y:5.63,w:8,h:0.4,fontFace:SANS,fontSize:13,color:PAPER,margin:0});
  pageNum(s,1,true);
})();

// ============ 2 WHY ============
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"Why BeHistorical exists",0.7,0.6,GOLD_DEEP);
  s.addText("Three problems every AP classroom is facing right now",{x:0.66,y:0.95,w:12,h:1.0,fontFace:SERIF,fontSize:33,bold:true,color:INKTEXT,margin:0});
  const rows=[["1","Rigor is uneven","AP World demands document analysis, contextualization, and evidence-based argument — but delivery varies teacher to teacher, topic to topic, and day to day."],
    ["2","AI arrived without a plan","Students already use AI. Most classrooms have no structure for it — so it becomes an answer machine instead of a thinking partner."],
    ["3","Home is out of the loop","Families rarely know what's being studied, and by the time a unit test reveals a gap, it's too late to reteach or step in."]];
  let y=2.25;
  rows.forEach(([n,h,d])=>{ disc(s,0.7,y,0.7,n,26);
    s.addText(h,{x:1.7,y:y-0.05,w:10.8,h:0.5,fontFace:SERIF,fontSize:21,bold:true,color:INKTEXT,margin:0});
    s.addText(d,{x:1.7,y:y+0.45,w:10.8,h:0.9,fontFace:SANS,fontSize:15,color:MUTE_L,margin:0}); y+=1.55; });
  s.addText("BeHistorical answers all three — with one repeatable system.",{x:0.7,y:6.65,w:12,h:0.5,fontFace:SERIF,fontSize:17,italic:true,bold:true,color:GOLD_DEEP,margin:0});
  footer(s,false); pageNum(s,2,false);
})();

// ============ 3 SCOPE ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"Scope at a glance",0.7,0.6);
  s.addText("A finished course — not a demo",{x:0.66,y:0.95,w:12,h:0.9,fontFace:SERIF,fontSize:34,bold:true,color:WHITE,margin:0});
  s.addText("The full College Board AP World framework, plus a pre-1200 Foundations bridge — built, wired, and automatically validated.",{x:0.7,y:1.85,w:11.8,h:0.6,fontFace:SANS,fontSize:15,color:MUTE_D,margin:0});
  const stats=[["9","units + Foundations","the complete AP World scope"],["77","complete lessons","71 topics + 6 Foundations"],["61","BeInTheRoom sims","26 built to the full quality bar"],["547","files auto-validated","every deploy, zero errors"]];
  const cw=2.85,gap=0.32,sx=0.7,cy=2.9,ch=2.6;
  stats.forEach(([big,lab,sub],i)=>{ const x=sx+i*(cw+gap);
    s.addShape(p.ShapeType.roundRect,{x,y:cy,w:cw,h:ch,rectRadius:0.12,fill:{color:PANEL},line:{color:PANEL2,width:1}});
    s.addText(big,{x,y:cy+0.28,w:cw,h:1.15,align:"center",fontFace:SERIF,fontSize:58,bold:true,color:GOLD,margin:0});
    s.addText(lab,{x:x+0.15,y:cy+1.5,w:cw-0.3,h:0.4,align:"center",fontFace:SANS,fontSize:15,bold:true,color:WHITE,margin:0});
    s.addText(sub,{x:x+0.15,y:cy+1.92,w:cw-0.3,h:0.55,align:"center",fontFace:SANS,fontSize:11.5,color:MUTE_D,margin:0}); });
  s.addText("~770 module instances  ·  ~231 reading questions  ·  154 First & 10 files  ·  1,700+ files in the repository",{x:0.7,y:5.95,w:12,h:0.5,align:"center",fontFace:MONO,fontSize:12,color:GOLD_SOFT,margin:0});
  footer(s,true); pageNum(s,3,true);
})();

// ============ 4 MODULES ============
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"The signature system",0.7,0.5,GOLD_DEEP);
  s.addText("One learning path. Ten modules. Every single lesson.",{x:0.66,y:0.85,w:12.2,h:0.7,fontFace:SERIF,fontSize:28,bold:true,color:INKTEXT,margin:0});
  framedShot(s,"modules",0.7,1.75,4.75,"behistorical · unit 1 · topic 1.1 — interactive modules");
  s.addText("Live screenshot · Topic 1.1, Song China",{x:0.7,y:6.55,w:5,h:0.3,fontFace:MONO,fontSize:9.5,color:MUTE_L,margin:0});
  const rx=6.05,rw=6.5;
  s.addText("The same pedagogical spine runs through all 77 lessons — every lesson opens the same ten modules in the same order, so students always know where they are and quality never drifts.",{x:rx,y:1.85,w:rw,h:1.3,fontFace:SANS,fontSize:15.5,color:MUTE_L,margin:0,valign:"top"});
  const chips=["1.  Build Context","2.  Learn & Practice","3.  Check Understanding"]; let cx=rx;
  chips.forEach((c)=>{ const cwd=0.28+c.length*0.083;
    s.addShape(p.ShapeType.roundRect,{x:cx,y:3.35,w:cwd,h:0.42,rectRadius:0.21,fill:{color:PAPER2},line:{color:CARD_BORD,width:1}});
    s.addText(c,{x:cx,y:3.35,w:cwd,h:0.42,align:"center",valign:"middle",fontFace:MONO,fontSize:10.5,color:INKTEXT,margin:0}); cx+=cwd+0.2; });
  s.addText("Modules 04, 07, 08 & 09 carry the features that make BeHistorical distinctive.",{x:rx,y:4.1,w:rw,h:0.6,fontFace:SERIF,fontSize:15.5,italic:true,color:GOLD_DEEP,margin:0});
  footer(s,false); pageNum(s,4,false);
})();

// ============ 5 SIGNATURE ============
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"What makes it different",0.7,0.5,GOLD_DEEP);
  s.addText("Named modules students remember",{x:0.66,y:0.85,w:12,h:0.7,fontFace:SERIF,fontSize:28,bold:true,color:INKTEXT,margin:0});
  const used=framedShot(s,"first10",0.7,1.75,6.05,"behistorical · first-and-10 · topic 1.1");
  s.addText('First & 10 Reading — "The World That Song Built"',{x:0.7,y:1.75+used+0.12,w:6.1,h:0.3,fontFace:MONO,fontSize:9.5,color:MUTE_L,margin:0});
  const items=[["First & 10","A designed, textbook-quality reading with vocab chips, AP-skill callouts, and three open-response questions."],
    ["BeSurreal","A surprising, human detail that makes history concrete and memorable."],
    ["Evidence Lab","Students connect real evidence to a larger political, cultural, or economic claim."],
    ["Primary Source","An authentic excerpt with a HIPP analysis prompt."],
    ["AP Skill Builder","Focused practice on one AP reasoning skill per topic."],
    ["BeReady","A ten-second takeaway that synthesizes the whole reading."]];
  const rx=7.1,rw=5.5; let y=1.8;
  items.forEach(([t,d])=>{ s.addText(t,{x:rx,y,w:rw,h:0.34,fontFace:SERIF,fontSize:16,bold:true,color:GOLD_DEEP,margin:0});
    s.addText(d,{x:rx,y:y+0.32,w:rw,h:0.55,fontFace:SANS,fontSize:12.5,color:MUTE_L,margin:0,valign:"top"}); y+=0.85; });
  footer(s,false); pageNum(s,5,false);
})();

// ============ 6 BEINTHEROOM ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"The flagship module",0.7,0.5);
  s.addText("BeInTheRoom — decision simulations, not costume roleplay",{x:0.66,y:0.85,w:12.2,h:0.7,fontFace:SERIF,fontSize:27,bold:true,color:WHITE,margin:0});
  const used=framedShot(s,"bitr",0.7,1.75,6.0,"behistorical · beintheroom · unit 1 · topic 1.1");
  s.addText('Live scenario — "Advising the Song Court"',{x:0.7,y:1.75+used+0.12,w:6.1,h:0.3,fontFace:MONO,fontSize:9.5,color:MUTE_D,margin:0});
  const steps=[["Enter","a real historical decision point"],["Adopt","a role with goals, fears, constraints"],["Decide","a defensible recommendation"],["Defend","with evidence; AI coaching probes it"],["Reflect","out of character, AP-style"]];
  const rx=7.05; let y=1.9;
  steps.forEach(([h,d],i)=>{ disc(s,rx,y,0.44,String(i+1),16);
    s.addText([{text:h+"   ",options:{bold:true,color:WHITE,fontSize:15}},{text:d,options:{color:MUTE_D,fontSize:13}}],{x:rx+0.6,y:y+0.02,w:5.4,h:0.44,fontFace:SANS,align:"left",valign:"middle",margin:0}); y+=0.62; });
  const qc=["4+ roles","8–12 evidence chips","3 trade-offs","61 live & linked"]; let cx=rx,cy=y+0.15;
  qc.forEach((c)=>{ const cwd=0.3+c.length*0.078; if(cx+cwd>12.6){cx=rx;cy+=0.5;}
    s.addShape(p.ShapeType.roundRect,{x:cx,y:cy,w:cwd,h:0.4,rectRadius:0.2,fill:{color:PANEL},line:{color:PANEL2,width:1}});
    s.addText(c,{x:cx,y:cy,w:cwd,h:0.4,align:"center",valign:"middle",fontFace:MONO,fontSize:10,color:GOLD_SOFT,margin:0}); cx+=cwd+0.18; });
  footer(s,true); pageNum(s,6,true);
})();

// ============ 7 AI GUARDRAILS ============
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"AI, with guardrails",0.7,0.55,GOLD_DEEP);
  s.addText("AI that coaches — never completes",{x:0.66,y:0.9,w:12,h:0.9,fontFace:SERIF,fontSize:33,bold:true,color:INKTEXT,margin:0});
  s.addText("Every reading and simulation builds a ready-to-paste coaching prompt and hands it to the class MagicSchool bot. The AI asks one question at a time — and is explicitly forbidden from writing the answer.",{x:0.7,y:1.8,w:12,h:0.7,fontFace:SANS,fontSize:15,color:MUTE_L,margin:0});
  s.addShape(p.ShapeType.roundRect,{x:0.7,y:2.75,w:6.05,h:3.7,rectRadius:0.12,fill:{color:PAPER2},line:{color:CARD_BORD,width:1}});
  s.addText("THE 6-STAGE SOCRATIC DIALOGUE",{x:1.0,y:3.0,w:5.5,h:0.35,fontFace:MONO,fontSize:11,bold:true,color:GOLD_DEEP,charSpacing:1.5,margin:0});
  ["Role understanding","Evidence check","Trade-off","Opposing perspective","Historical thinking","Revision"].forEach((st,i)=>{ const yy=3.5+i*0.47;
    disc(s,1.0,yy,0.34,String(i+1),13);
    s.addText(st,{x:1.5,y:yy-0.03,w:5.0,h:0.4,fontFace:SANS,fontSize:14.5,bold:true,color:INKTEXT,valign:"middle",margin:0}); });
  s.addShape(p.ShapeType.roundRect,{x:7.0,y:2.75,w:5.6,h:3.7,rectRadius:0.12,fill:{color:INK},line:{color:INK,width:1}});
  s.addText("HOW WORK FLOWS",{x:7.3,y:3.0,w:5.0,h:0.35,fontFace:MONO,fontSize:11,bold:true,color:GOLD,charSpacing:1.5,margin:0});
  const flow=[["Think in BeHistorical","students draft and reason inside the platform"],["Coach in MagicSchool","the built prompt drives one-question-at-a-time dialogue"],["Capture to Google Forms","responses auto-fill a prefilled form — unit, topic, skills tagged"],["Submit in Canvas","assessed work lands where teachers already grade"]];
  let fy=3.45;
  flow.forEach(([h,d],i)=>{ s.addText([{text:(i+1)+".  ",options:{bold:true,color:GOLD,fontSize:15}},{text:h,options:{bold:true,color:WHITE,fontSize:15}}],{x:7.3,y:fy,w:5.1,h:0.35,fontFace:SANS,align:"left",margin:0});
    s.addText(d,{x:7.62,y:fy+0.34,w:4.8,h:0.45,fontFace:SANS,fontSize:12,color:MUTE_D,margin:0}); fy+=0.82; });
  footer(s,false); pageNum(s,7,false);
})();

// ============ 8 STUDY GUIDES ============
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"Personalized study guides",0.7,0.55,GOLD_DEEP);
  badge(s,"In Development","dev");
  s.addText("A study guide built from each student's own work",{x:0.66,y:0.98,w:12,h:0.7,fontFace:SERIF,fontSize:28,bold:true,color:INKTEXT,margin:0});
  const used=framedShot(s,"studyguide",0.7,1.85,3.35,"behistorical · study-guide · auto-generated · PDF");
  s.addText("Design concept · generated per student, per topic",{x:0.7,y:1.85+used+0.12,w:3.6,h:0.3,fontFace:MONO,fontSize:9,color:MUTE_L,margin:0});
  const rx=4.55,rw=8.0;
  s.addText("No two guides are the same. Each one reads a student's own responses and confidence ratings, then targets exactly what they need next — using the same analysis engine that powers the Teacher Hub.",{x:rx,y:1.9,w:rw,h:1.1,fontFace:SANS,fontSize:15,color:MUTE_L,margin:0,valign:"top"});
  featList(s,[["Your three weakest spots","Pulled from detected skill gaps, low-confidence answers, and flagged misconceptions."],
    ["Targeted practice","Questions tuned to the exact AP skill the student is missing — not generic review."],
    ["One clear next step","A single, doable action — then a round with the AI Coach. Augment, never replace."]],rx,3.15,rw,false);
  s.addText("◆ Same data → personalized for every student",{x:rx,y:6.2,w:rw,h:0.3,fontFace:MONO,fontSize:11,color:GOLD_DEEP,margin:0});
  footer(s,false); pageNum(s,8,false);
})();

// ============ 9 THE DISPATCH ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"The Dispatch — family newsletter",0.7,0.55);
  badge(s,"In Development","dev");
  s.addText("Every family, in the loop — automatically",{x:0.66,y:0.98,w:12,h:0.7,fontFace:SERIF,fontSize:28,bold:true,color:WHITE,margin:0});
  const used=framedShot(s,"dispatch",0.7,1.85,2.2,"the dispatch · issue 01");
  s.addText("Issue 01 mockup · template & content library built",{x:0.7,y:1.85+used+0.12,w:3.0,h:0.4,fontFace:MONO,fontSize:9,color:MUTE_D,margin:0});
  const rx=3.5,rw=9.1;
  s.addText('A biweekly email that forecasts the next five class days and pairs each topic with one "Tip of the Day" — a study-science move or an AP exam skill. For students and their families, in plain language.',{x:rx,y:1.9,w:rw,h:1.1,fontFace:SANS,fontSize:15,color:PAPER,margin:0,valign:"top"});
  featList(s,[["Auto-generated from the course","Topics, tips, and Family Corner prompts merge from a Google Sheet into a branded HTML email."],
    ["A rotating coaching library","6 learning-science Study Moves + 8 AP Skill Spotlights cycle so tips never go stale."],
    ["Delivered where families already are","Sent biweekly through the school's ParentSquare platform — no new app, no logins."]],rx,3.15,rw,true);
  s.addText("◆ Turns the classroom into a home conversation",{x:rx,y:6.2,w:rw,h:0.3,fontFace:MONO,fontSize:11,color:GOLD_SOFT,margin:0});
  footer(s,true); pageNum(s,9,true);
})();

// ============ 10 TEACHER HUB ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"For the teacher",0.7,0.55);
  badge(s,"Live Prototype","live");
  s.addText("The Teacher Hub — a live read on the class",{x:0.66,y:0.98,w:12,h:0.7,fontFace:SERIF,fontSize:28,bold:true,color:WHITE,margin:0});
  const used=framedShot(s,"teacherhub",0.7,1.85,6.0,"behistorical · teacher hub · topic 1.1");
  s.addText("Working prototype · Topic 1.1 · rule-based Apps Script backend",{x:0.7,y:1.85+used+0.12,w:6.1,h:0.3,fontFace:MONO,fontSize:9.5,color:MUTE_D,margin:0});
  featList(s,[["Class Pulse","Response count, average confidence, and how many students need support — at a glance."],
    ["Students needing follow-up","Per-student cards with the issue, next step, and a High / Medium / Low risk badge."],
    ["Reteach recommendations","Common misconceptions and skill gaps turned into prioritized, actionable focus."],
    ["Lesson delivery tools","Pacing guide, answer keys, KC-coded objectives, and copy-ready AI analysis prompts."]],7.1,1.9,5.5,true);
  footer(s,true); pageNum(s,10,true);
})();

// ============ 11 ANALYTICS ENGINE (pipeline) ============
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"The engine underneath",0.7,0.55,GOLD_DEEP);
  s.addText("From raw answers to teaching decisions",{x:0.66,y:0.9,w:12,h:0.8,fontFace:SERIF,fontSize:32,bold:true,color:INKTEXT,margin:0});
  s.addText("One analysis engine reads every student response and turns it into insight — and it's what powers the Teacher Hub, the study guides, and The Dispatch alike.",{x:0.7,y:1.8,w:12,h:0.6,fontFace:SANS,fontSize:15,color:MUTE_L,margin:0});
  const stages=[["01 · CAPTURE","Every response, structured",["Prefilled Google Form → Sheet","Tagged by unit, topic & AP skill","Confidence rating on every answer"]],
    ["02 · ANALYZE","Rule-based, transparent",["Flags blank, short & low-confidence work","Detects evidence use & misconceptions","Spots missing reasoning (skill gaps)"]],
    ["03 · ACT","One engine, three outputs",["Teacher Hub — class & per-student","Study guides — personalized","The Dispatch — family-facing"]]];
  const cw=3.63,cy=2.75,ch=3.1; let x=0.7;
  stages.forEach((st,i)=>{
    s.addShape(p.ShapeType.roundRect,{x,y:cy,w:cw,h:ch,rectRadius:0.12,fill:{color:CARD},line:{color:CARD_BORD,width:1}});
    s.addText(st[0],{x:x+0.3,y:cy+0.3,w:cw-0.6,h:0.3,fontFace:MONO,fontSize:11,bold:true,color:GOLD_DEEP,charSpacing:1,margin:0});
    s.addText(st[1],{x:x+0.3,y:cy+0.62,w:cw-0.6,h:0.6,fontFace:SERIF,fontSize:21,bold:true,color:INKTEXT,margin:0});
    s.addText(st[2].map((t,j)=>({text:t,options:{bullet:{code:"2022",indent:14},color:MUTE_L,breakLine:j!==st[2].length-1,paraSpaceAfter:8}})),{x:x+0.32,y:cy+1.35,w:cw-0.62,h:1.6,fontFace:SANS,fontSize:13,margin:0,valign:"top"});
    if(i<2) s.addText("→",{x:x+cw,y:cy,w:0.5,h:ch,align:"center",valign:"middle",fontFace:SANS,fontSize:26,bold:true,color:GOLD,margin:0});
    x+=cw+0.5;
  });
  footer(s,false); pageNum(s,11,false);
})();

// ============ 12 FERPA-SAFE AI ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"Student privacy, built in",0.7,0.55);
  s.addText("The AI students use is FERPA-safe — and already district-approved",{x:0.66,y:0.9,w:12.4,h:0.8,fontFace:SERIF,fontSize:26,bold:true,color:WHITE,margin:0});
  const cards=[["STUDENT-FACING · DISTRICT-APPROVED","MagicSchool AI","Student coaching runs inside MagicSchool — adopted by our district as a FERPA-safe AI tool. Not a personal chatbot, not a consumer account.","District-vetted · FERPA-safe"],
    ["TEACHER-FACING · FERPA-ALIGNED","Claude for Teachers","Teacher-side analysis uses Claude, Anthropic's education AI — built to support FERPA compliance, with student inputs not used to train models.","Education-grade · Not trained on student work"]];
  const cw=5.9,cy=2.1,ch=3.4;
  cards.forEach((c,i)=>{ const x=0.7+i*(cw+0.3);
    s.addShape(p.ShapeType.roundRect,{x,y:cy,w:cw,h:ch,rectRadius:0.12,fill:{color:PANEL},line:{color:PANEL2,width:1}});
    s.addText(c[0],{x:x+0.35,y:cy+0.32,w:cw-0.7,h:0.3,fontFace:MONO,fontSize:10.5,bold:true,color:GOLD,charSpacing:1,margin:0});
    s.addText(c[1],{x:x+0.35,y:cy+0.66,w:cw-0.7,h:0.5,fontFace:SERIF,fontSize:22,bold:true,color:WHITE,margin:0});
    s.addText(c[2],{x:x+0.35,y:cy+1.3,w:cw-0.7,h:1.2,fontFace:SANS,fontSize:14,color:"E9E2D2",margin:0,valign:"top"});
    const bw=0.45+c[3].length*0.076;
    s.addShape(p.ShapeType.roundRect,{x:x+0.35,y:cy+2.68,w:bw,h:0.36,rectRadius:0.18,fill:{color:"21301F"},line:{color:"5AA668",width:1}});
    s.addText("✓ "+c[3],{x:x+0.35,y:cy+2.68,w:bw,h:0.36,align:"center",valign:"middle",fontFace:MONO,fontSize:9.5,bold:true,color:"7CC98A",margin:0});
  });
  s.addText("Coaches, never completes — and never trains on a student's thinking.",{x:0.7,y:5.85,w:12,h:0.5,fontFace:SERIF,fontSize:17,italic:true,bold:true,color:GOLD,margin:0});
  footer(s,true); pageNum(s,12,true);
})();

// ============ 13 DATA GOVERNANCE ============
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"How student data is protected",0.7,0.6,GOLD_DEEP);
  s.addText("Student data stays inside district-approved systems",{x:0.66,y:0.95,w:12.4,h:0.8,fontFace:SERIF,fontSize:30,bold:true,color:INKTEXT,margin:0});
  const cards=[["WHERE IT RUNS","Tools the district already governs","Students draft in BeHistorical, are coached in district-approved MagicSchool, and submit in Canvas — no new data destinations to vet."],
    ["NO TRAINING","Never used to train an AI","Both AI tools are education-grade and vetted; a student's work is never used to train or improve an AI model."],
    ["PATTERNS, NOT EXPOSURE","Aggregate by default","The Teacher Hub summarizes class-level trends; identifiable student data is never published to the public site."],
    ["SECURE BY ROADMAP","Authenticated access next","A secure teacher sign-in replaces the prototype access code before any live student data flows through the Hub."]];
  const cw=5.85,ch=1.72,gx=0.3,gy=0.22,sx=0.7,sy=2.3;
  cards.forEach((c,i)=>{ const r=Math.floor(i/2),cc=i%2; const x=sx+cc*(cw+gx),y=sy+r*(ch+gy);
    s.addShape(p.ShapeType.roundRect,{x,y,w:cw,h:ch,rectRadius:0.11,fill:{color:CARD},line:{color:CARD_BORD,width:1}});
    s.addText(c[0],{x:x+0.3,y:y+0.22,w:cw-0.6,h:0.28,fontFace:MONO,fontSize:10,bold:true,color:GOLD_DEEP,charSpacing:1,margin:0});
    s.addText(c[1],{x:x+0.3,y:y+0.5,w:cw-0.6,h:0.4,fontFace:SERIF,fontSize:18,bold:true,color:INKTEXT,margin:0});
    s.addText(c[2],{x:x+0.3,y:y+0.95,w:cw-0.6,h:0.66,fontFace:SANS,fontSize:12.5,color:MUTE_L,margin:0,valign:"top"});
  });
  s.addText("Privacy isn't bolted on — it's the boundary the whole system is built around.",{x:0.7,y:6.08,w:12,h:0.5,fontFace:SERIF,fontSize:16,italic:true,bold:true,color:GOLD_DEEP,margin:0});
  footer(s,false); pageNum(s,13,false);
})();

// ============ 14 BUILT LIKE SOFTWARE ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"Why it scales",0.7,0.5);
  s.addText("Built like software, not a slide folder",{x:0.66,y:0.85,w:12,h:0.7,fontFace:SERIF,fontSize:28,bold:true,color:WHITE,margin:0});
  const used=framedShot(s,"cc",0.7,1.75,6.05,"behistorical · repository command center");
  s.addText("The Command Center — audited against what's actually on disk",{x:0.7,y:1.75+used+0.12,w:6.1,h:0.3,fontFace:MONO,fontSize:9.5,color:MUTE_D,margin:0});
  const rx=7.1,rw=5.5; let y=1.85;
  [["Automated validation","A 547-file audit runs on every change — module order, form wiring, and simulation quality gates. Zero-error deploys."],
   ["Deterministic builders","Whole units are generated from data by scripts — so a fix rolls out everywhere, consistently, at once."],
   ["Codified quality gates","Design rules live in blueprints and are enforced by machine before anything ships."]].forEach(([t,d])=>{
    s.addText(t,{x:rx,y,w:rw,h:0.34,fontFace:SERIF,fontSize:17,bold:true,color:GOLD_SOFT,margin:0});
    s.addText(d,{x:rx,y:y+0.34,w:rw,h:0.75,fontFace:SANS,fontSize:13,color:PAPER,margin:0,valign:"top"}); y+=1.2; });
  s.addText("The difference between a teacher's materials and a product a district can adopt.",{x:rx,y:y+0.05,w:rw,h:0.6,fontFace:SERIF,fontSize:15,italic:true,bold:true,color:GOLD,margin:0});
  footer(s,true); pageNum(s,14,true);
})();

// ============ 13 ECOSYSTEM ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"How it all connects",0.7,0.55);
  s.addText("One platform, one data layer, three audiences",{x:0.66,y:0.9,w:12,h:0.8,fontFace:SERIF,fontSize:31,bold:true,color:WHITE,margin:0});
  // node 1
  const n1x=0.7,nw1=3.35,ny=2.6,nh=2.7;
  s.addShape(p.ShapeType.roundRect,{x:n1x,y:ny,w:nw1,h:nh,rectRadius:0.12,fill:{color:PANEL},line:{color:PANEL2,width:1}});
  s.addText("STUDENTS LEARN",{x:n1x+0.28,y:ny+0.28,w:nw1-0.5,h:0.3,fontFace:MONO,fontSize:10.5,bold:true,color:GOLD,charSpacing:1.5,margin:0});
  s.addText("The lesson platform",{x:n1x+0.28,y:ny+0.62,w:nw1-0.5,h:0.5,fontFace:SERIF,fontSize:19,bold:true,color:WHITE,margin:0});
  s.addText("10-module lessons, First & 10 readings, BeInTheRoom simulations, and an AI coach that questions rather than answers.",{x:n1x+0.28,y:ny+1.2,w:nw1-0.5,h:1.4,fontFace:SANS,fontSize:13,color:MUTE_D,margin:0,valign:"top"});
  s.addText("→",{x:n1x+nw1,y:ny,w:0.5,h:nh,align:"center",valign:"middle",fontFace:SANS,fontSize:26,bold:true,color:GOLD,margin:0});
  // node 2
  const n2x=n1x+nw1+0.5,nw2=3.2;
  s.addShape(p.ShapeType.roundRect,{x:n2x,y:ny,w:nw2,h:nh,rectRadius:0.12,fill:{color:PANEL},line:{color:PANEL2,width:1}});
  s.addText("ONE DATA LAYER",{x:n2x+0.28,y:ny+0.28,w:nw2-0.5,h:0.3,fontFace:MONO,fontSize:10.5,bold:true,color:GOLD,charSpacing:1.5,margin:0});
  s.addText("Every response, analyzed",{x:n2x+0.28,y:ny+0.62,w:nw2-0.5,h:0.5,fontFace:SERIF,fontSize:19,bold:true,color:WHITE,margin:0});
  s.addText("Answers, confidence, evidence, misconceptions, and skill gaps — captured and read by a single engine.",{x:n2x+0.28,y:ny+1.2,w:nw2-0.5,h:1.4,fontFace:SANS,fontSize:13,color:MUTE_D,margin:0,valign:"top"});
  s.addText("→",{x:n2x+nw2,y:ny,w:0.5,h:nh,align:"center",valign:"middle",fontFace:SANS,fontSize:26,bold:true,color:GOLD,margin:0});
  // right stack
  const rsx=n2x+nw2+0.5,rsw=W-rsx-0.6;
  const outs=[["Teacher Hub","→ teachers act in real time"],["Study Guides","→ students get a targeted plan"],["The Dispatch","→ families stay in the loop"]];
  let oy=ny; const oh=0.78,og=(nh-3*oh)/2;
  outs.forEach(([t,d])=>{ s.addShape(p.ShapeType.roundRect,{x:rsx,y:oy,w:rsw,h:oh,rectRadius:0.1,fill:{color:PANEL},line:{color:PANEL2,width:1}});
    s.addText(t,{x:rsx+0.24,y:oy+0.14,w:rsw-0.4,h:0.32,fontFace:SERIF,fontSize:16,bold:true,color:GOLD_SOFT,margin:0});
    s.addText(d,{x:rsx+0.24,y:oy+0.45,w:rsw-0.4,h:0.28,fontFace:SANS,fontSize:12,color:MUTE_D,margin:0}); oy+=oh+og; });
  s.addText("Build the lesson once — and everyone around the student is served automatically.",{x:0.7,y:5.7,w:12,h:0.5,fontFace:SERIF,fontSize:16,italic:true,bold:true,color:GOLD,margin:0});
  footer(s,true); pageNum(s,15,true);
})();

// ============ 14 ROADMAP ============
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"Where the build stands",0.7,0.6,GOLD_DEEP);
  s.addText("What's live, and what's next",{x:0.66,y:0.95,w:12,h:0.8,fontFace:SERIF,fontSize:32,bold:true,color:INKTEXT,margin:0});
  const cols=[["Live now","live",[["77 complete lessons","· all 9 units + Foundations"],["61 BeInTheRoom simulations",""],["AI coach + MagicSchool workflow",""],["Command Center & validation",""],["Teacher Hub","· Topic 1.1 prototype"]]],
    ["In development","dev",[["Personalized study guides",""],["The Dispatch","· template + Issue 01 built"],["Teacher Hub across all units",""],["Live data pipeline","· Form → Sheet → Hub"]]],
    ["Exploring","next",[["Auto-sent study guides",""],["Other AP courses & subjects",""],["District rollout & PD",""],["Consulting & licensing",""]]]];
  const cw=3.85,gap=0.3,sx=0.7,cy=2.3,ch=3.7;
  const pillClr={live:{f:"DDECE0",l:"5AA668",c:GREEN_D},dev:{f:"F2E6C9",l:GOLD,c:GOLD_DEEP},next:{f:"DCE9EA",l:"3E8E96",c:TEAL_D}};
  cols.forEach(([title,kind,items],i)=>{ const x=sx+i*(cw+gap);
    s.addShape(p.ShapeType.roundRect,{x,y:cy,w:cw,h:ch,rectRadius:0.12,fill:{color:CARD},line:{color:CARD_BORD,width:1}});
    const pc=pillClr[kind], pw=0.5+title.length*0.1;
    s.addShape(p.ShapeType.roundRect,{x:x+0.3,y:cy+0.3,w:pw,h:0.34,rectRadius:0.17,fill:{color:pc.f},line:{color:pc.l,width:1}});
    s.addText(title.toUpperCase(),{x:x+0.3,y:cy+0.3,w:pw,h:0.34,align:"center",valign:"middle",fontFace:MONO,fontSize:9.5,bold:true,color:pc.c,charSpacing:1,margin:0});
    let iy=cy+0.95;
    items.forEach(([t,note])=>{
      s.addText([{text:"› ",options:{color:GOLD_DEEP,bold:true}},{text:t,options:{color:INKTEXT}},...(note?[{text:"  "+note,options:{color:MUTE_L,fontSize:11.5,italic:true}}]:[])],{x:x+0.3,y:iy,w:cw-0.55,h:0.5,fontFace:SANS,fontSize:13.5,margin:0,valign:"top"}); iy+=0.56; });
  });
  footer(s,false); pageNum(s,16,false);
})();

// ============ 17 CLOSING ============
(()=>{ const s=p.addSlide(); bg(s,INK);
  ["BeReady","BeSurreal","BeInTheRoom","BeHistorical"].forEach((m,i)=>{
    s.addText(m,{x:8.9,y:1.1+i*1.3,w:4.2,h:0.9,align:"right",fontFace:SERIF,fontSize:20,italic:true,color:PANEL2,margin:0}); });
  s.addText("WHERE THIS GOES",{x:0.7,y:0.75,w:9,h:0.4,fontFace:MONO,fontSize:12,bold:true,color:GOLD,charSpacing:4,margin:0});
  s.addText("A method — not just a course",{x:0.62,y:1.25,w:8.5,h:1.4,fontFace:SERIF,fontSize:44,bold:true,color:WHITE,margin:0});
  const points=[["A repeatable framework","The 10-module path, the AI guardrails, the analytics engine, and the build system are subject-agnostic — ready to lift into any AP or core course."],
    ["Professional development","The system itself is the curriculum: a concrete model for teaching with AI responsibly, backed by working proof."],
    ["A platform to grow on","BeHistorical is the first product under AndersonLogic AI — a foundation for a family of AI-integrated learning tools."]];
  let y=3.05;
  points.forEach(([h,d])=>{ disc(s,0.7,y+0.05,0.16,"",10);
    s.addText(h,{x:1.05,y:y-0.08,w:7.4,h:0.4,fontFace:SERIF,fontSize:19,bold:true,color:GOLD_SOFT,margin:0});
    s.addText(d,{x:1.05,y:y+0.36,w:7.4,h:0.7,fontFace:SANS,fontSize:14,color:MUTE_D,margin:0}); y+=1.2; });
  s.addText([{text:"AndersonLogic AI",options:{bold:true,color:GOLD,fontSize:18}},{text:"   ·   BeHistorical   ·   Created by Jeff Anderson",options:{color:PAPER,fontSize:14}}],{x:0.7,y:6.8,w:12,h:0.4,fontFace:SANS,align:"left",margin:0});
  pageNum(s,17,true);
})();

p.writeFile({fileName:"/home/user/ap-world-history/scratchpad-deck/BeHistorical-AndersonLogic-AI.pptx"}).then((f)=>console.log("wrote",f));
