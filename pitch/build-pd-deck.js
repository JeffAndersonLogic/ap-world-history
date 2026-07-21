// AndersonLogic AI — PD & Consulting deck — 10 slides
const pptxgen = require("pptxgenjs");
const fs = require("fs"), path = require("path");
const IMGS = JSON.parse(fs.readFileSync(path.join(__dirname,"img-datauris.json"),"utf8"));
const DIMS = JSON.parse(fs.readFileSync(path.join(__dirname,"img-dims.json"),"utf8"));
const imgData = (k)=>IMGS[k].replace(/^data:/,"");
const p = new pptxgen(); p.layout="LAYOUT_WIDE";

const INK="1A1C1D", PANEL="24272A", PANEL2="2E3236";
const GOLD="C9A24B", GOLD_SOFT="E4C878", GOLD_DEEP="9A7A28", TEAL_D="2F6B71";
const PAPER="F4EEE2", PAPER2="FBF7EF", CARD="FCF8F0";
const INKTEXT="2B2723", MUTE_D="9AA0A6", MUTE_L="6E675C", WHITE="FFFFFF", CARD_BORD="E4DBC9";
const SERIF="Bookman Old Style", SANS="Calibri", MONO="Consolas";
const W=13.3,H=7.5;

function bg(s,c){ s.background={color:c}; }
function disc(s,x,y,d,txt,fs){ s.addShape(p.ShapeType.ellipse,{x,y,w:d,h:d,fill:{color:GOLD}});
  if(txt) s.addText(txt,{x,y,w:d,h:d,align:"center",valign:"middle",fontFace:SERIF,fontSize:fs||16,bold:true,color:INK,margin:0}); }
function footer(s){ s.addText([{text:"AndersonLogic AI",options:{bold:true,color:GOLD}},{text:"   ·   PD & Consulting",options:{color:MUTE_D}}],
  {x:0.55,y:H-0.5,w:8,h:0.3,fontFace:SANS,fontSize:10,align:"left",margin:0}); }
function footerL(s){ s.addText([{text:"AndersonLogic AI",options:{bold:true,color:GOLD}},{text:"   ·   PD & Consulting",options:{color:MUTE_L}}],
  {x:0.55,y:H-0.5,w:8,h:0.3,fontFace:SANS,fontSize:10,align:"left",margin:0}); }
function pageNum(s,n,dark){ s.addText(String(n).padStart(2,"0")+" / 10",{x:W-1.7,y:H-0.55,w:1.2,h:0.35,align:"right",fontFace:MONO,fontSize:11,bold:true,color:dark?MUTE_D:MUTE_L,margin:0}); }
function eyebrow(s,txt,x,y,color){ s.addText(txt.toUpperCase(),{x,y,w:11,h:0.3,fontFace:MONO,fontSize:12,bold:true,color:color||GOLD,charSpacing:3,align:"left",margin:0}); }
function thumb(s,key,x,y,w,h,label){
  const bar=0.26;
  s.addShape(p.ShapeType.roundRect,{x:x-0.04,y:y-0.04,w:w+0.08,h:bar+h+0.08,rectRadius:0.05,fill:{color:"0E0F10"},line:{color:"3A3F45",width:0.75},shadow:{type:"outer",color:"000000",opacity:0.4,blur:9,offset:4,angle:90}});
  s.addShape(p.ShapeType.rect,{x,y,w,h:bar,fill:{color:"191C1F"},line:{type:"none"}});
  s.addShape(p.ShapeType.ellipse,{x:x+0.12,y:y+bar/2-0.035,w:0.07,h:0.07,fill:{color:"C9564E"}});
  s.addShape(p.ShapeType.ellipse,{x:x+0.24,y:y+bar/2-0.035,w:0.07,h:0.07,fill:{color:"D8A441"}});
  s.addShape(p.ShapeType.ellipse,{x:x+0.36,y:y+bar/2-0.035,w:0.07,h:0.07,fill:{color:"5AA668"}});
  s.addText(label,{x:x+0.52,y,w:w-0.6,h:bar,valign:"middle",align:"left",fontFace:MONO,fontSize:8,color:"8B9199",margin:0});
  s.addImage({data:imgData(key),x,y:y+bar,w,h,sizing:{type:"cover",w,h}});
}

// 1 TITLE
(()=>{ const s=p.addSlide(); bg(s,INK);
  const key="medallion",[iw,ih]=DIMS[key],mw=2.5,mh=mw*ih/iw;
  s.addShape(p.ShapeType.roundRect,{x:9.7-0.06,y:2.5-0.06,w:mw+0.12,h:mh+0.12,rectRadius:0.1,fill:{color:GOLD},line:{type:"none"},shadow:{type:"outer",color:"000000",opacity:0.5,blur:14,offset:7,angle:90}});
  s.addImage({data:imgData(key),x:9.7,y:2.5,w:mw,h:mh});
  s.addText("PROFESSIONAL DEVELOPMENT & CONSULTING",{x:0.7,y:1.4,w:9,h:0.4,fontFace:MONO,fontSize:12.5,bold:true,color:GOLD,charSpacing:2.5,margin:0});
  s.addText([{text:"AndersonLogic ",options:{color:WHITE}},{text:"AI",options:{color:GOLD}}],{x:0.62,y:1.9,w:9,h:1.2,fontFace:SERIF,fontSize:58,bold:true,margin:0});
  s.addText([{text:"AI-integrated instruction that ",options:{color:WHITE}},{text:"augments",options:{color:GOLD}},{text:", never replaces.",options:{color:WHITE}}],{x:0.7,y:3.35,w:8.2,h:1.0,fontFace:SERIF,fontSize:25,margin:0});
  s.addText("PD and consulting for schools putting AI in the classroom — built and proven in a real AP course, not a slideshow.",{x:0.7,y:4.5,w:7.6,h:0.9,fontFace:SANS,fontSize:15,color:PAPER,margin:0});
  disc(s,0.7,5.7,0.18,"",10);
  s.addText("Jeff Anderson, Founder  ·  creator of BeHistorical",{x:1.0,y:5.58,w:8,h:0.4,fontFace:SANS,fontSize:13,color:PAPER,margin:0});
  pageNum(s,1,true);
})();

// 2 PROBLEM
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"The problem every school shares",0.7,0.6,GOLD_DEEP);
  s.addText("AI is already in every classroom. A plan isn't.",{x:0.66,y:0.95,w:12,h:0.9,fontFace:SERIF,fontSize:33,bold:true,color:INKTEXT,margin:0});
  const rows=[["1","Students use AI as an answer machine","The tools are everywhere and the temptation is one tab away. Bans don't work; \"just be careful\" isn't a strategy."],
    ["2","Rigor and consistency vary","Great practices live in individual classrooms and don't spread. Structure and quality drift teacher to teacher, day to day."],
    ["3","Families are disconnected","Parents rarely know what's being taught or how to help — and gaps surface only after the test."]];
  let y=2.25;
  rows.forEach(([n,h,d])=>{ disc(s,0.7,y,0.7,n,26);
    s.addText(h,{x:1.7,y:y-0.05,w:10.8,h:0.5,fontFace:SERIF,fontSize:21,bold:true,color:INKTEXT,margin:0});
    s.addText(d,{x:1.7,y:y+0.45,w:10.8,h:0.9,fontFace:SANS,fontSize:15,color:MUTE_L,margin:0}); y+=1.55; });
  s.addText("Most AI professional development names these problems. Very little of it shows you a working answer.",{x:0.7,y:6.6,w:12,h:0.5,fontFace:SERIF,fontSize:17,italic:true,bold:true,color:GOLD_DEEP,margin:0});
  footer(s); pageNum(s,2,false);
})();

// 3 DIFFERENCE
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"Why this is different",0.7,0.55);
  s.addText("I didn't give a talk about AI. I built a working system with it.",{x:0.66,y:0.9,w:12.4,h:0.8,fontFace:SERIF,fontSize:29,bold:true,color:WHITE,margin:0});
  const cw=5.9,cy=2.15,ch=2.9;
  s.addShape(p.ShapeType.roundRect,{x:0.7,y:cy,w:cw,h:ch,rectRadius:0.13,fill:{color:PANEL},line:{color:PANEL2,width:1}});
  s.addText("THE TYPICAL AI PD SESSION",{x:1.0,y:cy+0.3,w:cw-0.6,h:0.3,fontFace:MONO,fontSize:11,bold:true,color:MUTE_D,charSpacing:1.5,margin:0});
  s.addText(["A slideshow and a few chatbot tricks","\"Here's the danger — be careful\"","Tools shown, but no method to adopt","Nothing that survives past Friday"].map((t,i)=>({text:t,options:{bullet:{code:"2014",indent:16},color:MUTE_D,breakLine:i!==3,paraSpaceAfter:11}})),{x:1.0,y:cy+0.78,w:cw-0.6,h:2,fontFace:SANS,fontSize:14.5,margin:0,valign:"top"});
  const x2=6.7;
  s.addShape(p.ShapeType.roundRect,{x:x2,y:cy,w:cw,h:ch,rectRadius:0.13,fill:{color:PANEL},line:{color:GOLD,width:1.25}});
  s.addText("WHAT ANDERSONLOGIC AI BRINGS",{x:x2+0.3,y:cy+0.3,w:cw-0.6,h:0.3,fontFace:MONO,fontSize:11,bold:true,color:GOLD,charSpacing:1.5,margin:0});
  s.addText(["A complete platform, run with real students","A repeatable method teachers can copy","Guardrails that make AI a thinking partner","Built like software — made to last and scale"].map((t,i)=>({text:t,options:{bullet:{code:"2726",indent:16},color:"EFE8D8",breakLine:i!==3,paraSpaceAfter:11}})),{x:x2+0.3,y:cy+0.78,w:cw-0.6,h:2,fontFace:SANS,fontSize:14.5,margin:0,valign:"top"});
  s.addText("The proof isn't a promise. It's shipped.",{x:0.7,y:5.35,w:12,h:0.5,fontFace:SERIF,fontSize:17,italic:true,bold:true,color:GOLD,margin:0});
  footer(s); pageNum(s,3,true);
})();

// 4 PROOF
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"The proof — BeHistorical",0.7,0.5);
  s.addText("A complete, AI-integrated AP World course — already running",{x:0.66,y:0.9,w:12.4,h:0.7,fontFace:SERIF,fontSize:28,bold:true,color:WHITE,margin:0});
  const pills=["77 complete lessons","61 decision simulations","FERPA-safe AI stack","547 files auto-validated","built like software"];
  let px=0.7;
  pills.forEach((t)=>{ const pw=0.4+t.length*0.088;
    s.addShape(p.ShapeType.roundRect,{x:px,y:1.85,w:pw,h:0.42,rectRadius:0.21,fill:{color:PANEL},line:{color:PANEL2,width:1}});
    s.addText(t,{x:px,y:1.85,w:pw,h:0.42,align:"center",valign:"middle",fontFace:MONO,fontSize:10,color:GOLD_SOFT,margin:0}); px+=pw+0.18; });
  const tw=3.7,th=2.0,ty=2.75; const gap=(11.9-3*tw)/2;
  thumb(s,"modules",0.7,ty,tw,th,"lesson · 10 modules");
  thumb(s,"bitr",0.7+tw+gap,ty,tw,th,"beintheroom simulation");
  thumb(s,"teacherhub",0.7+2*(tw+gap),ty,tw,th,"teacher hub");
  s.addText("I didn't theorize this. I taught with it. BeHistorical is the evidence — the method is what I bring to your staff.",{x:0.7,y:5.35,w:12,h:0.5,fontFace:SERIF,fontSize:16,italic:true,bold:true,color:GOLD,margin:0});
  footer(s); pageNum(s,4,true);
})();

// 5 METHOD
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"The transferable framework",0.7,0.55,GOLD_DEEP);
  s.addText([{text:"The Augment Method  ",options:{color:INKTEXT}},{text:"(working name)",options:{color:GOLD_DEEP,italic:true,fontSize:16,bold:false}}],{x:0.66,y:0.95,w:12,h:0.7,fontFace:SERIF,fontSize:30,bold:true,margin:0});
  s.addText("Four principles, subject-agnostic. History was just the proving ground — the method drops into any course.",{x:0.7,y:1.75,w:12,h:0.6,fontFace:SANS,fontSize:15,color:MUTE_L,margin:0});
  const items=[["1","One consistent lesson spine","A predictable structure students can navigate on day one — so quality doesn't depend on which teacher, or which day."],
    ["2","AI that coaches, never completes","Guardrails that make AI ask questions and demand reasoning — a thinking partner, not an answer machine."],
    ["3","One data layer, three audiences","Student work, captured once, serves the teacher, the student, and the family — automatically."],
    ["4","Built to be maintained & scaled","Structured like software, not a binder — so it survives, spreads, and doesn't rest on one hero teacher."]];
  const cw=5.85,ch=1.78,gx=0.3,gy=0.24,sx=0.7,sy=2.5;
  items.forEach((c,i)=>{ const r=Math.floor(i/2),cc=i%2; const x=sx+cc*(cw+gx),y=sy+r*(ch+gy);
    s.addShape(p.ShapeType.roundRect,{x,y,w:cw,h:ch,rectRadius:0.11,fill:{color:CARD},line:{color:CARD_BORD,width:1}});
    disc(s,x+0.3,y+0.28,0.42,c[0],15);
    s.addText(c[1],{x:x+0.9,y:y+0.3,w:cw-1.2,h:0.4,fontFace:SERIF,fontSize:18,bold:true,color:INKTEXT,margin:0});
    s.addText(c[2],{x:x+0.3,y:y+0.86,w:cw-0.6,h:0.8,fontFace:SANS,fontSize:12.5,color:MUTE_L,margin:0,valign:"top"}); });
  footer(s); pageNum(s,5,false);
})();

// 6 WHAT TEACHERS WILL DO
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"The outcome for your staff",0.7,0.55);
  s.addText("What your teachers will be able to do",{x:0.66,y:0.9,w:12,h:0.8,fontFace:SERIF,fontSize:32,bold:true,color:WHITE,margin:0});
  const items=[["1","Design a consistent lesson structure","A repeatable spine students can follow from day one — in their own subject."],
    ["2","Put AI guardrails in place","Set up AI so students use it to think and revise — not to cheat — with prompts they can reuse."],
    ["3","Turn student work into fast reteach decisions","Read the class in minutes and act before the test, not after."],
    ["4","Keep families in the loop — automatically","Send a plain-language, auto-generated update home without adding to the workload."]];
  let y=2.15;
  items.forEach(([n,h,d])=>{ disc(s,0.7,y,0.56,n,20);
    s.addText(h,{x:1.5,y:y-0.03,w:10.8,h:0.4,fontFace:SERIF,fontSize:19,bold:true,color:WHITE,margin:0});
    s.addText(d,{x:1.5,y:y+0.4,w:10.8,h:0.5,fontFace:SANS,fontSize:14,color:MUTE_D,margin:0}); y+=1.15; });
  footer(s); pageNum(s,6,true);
})();

// 7 TRANSFERABILITY
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"It's not just history",0.7,0.55,GOLD_DEEP);
  s.addText("The same method, any subject",{x:0.66,y:0.9,w:12,h:0.8,fontFace:SERIF,fontSize:32,bold:true,color:INKTEXT,margin:0});
  const tx=0.7,tw=11.9,ty=2.1, c1=3.4,c2=4.25; // col widths
  const rows=[["THE PRINCIPLE","IN AP WORLD HISTORY","IN AP BIOLOGY *"],
    ["Consistent spine","The 10-module lesson path","Phenomenon → model → investigation → argument, every unit"],
    ["Coach, never complete","Socratic AI on a historical decision","AI that probes a claim-evidence-reasoning explanation"],
    ["One data layer","Responses → Teacher Hub, guides, newsletter","Lab claims → misconception flags & reteach"],
    ["Built to scale","Deterministic builds, quality gates","Same templates, same validation, new content"]];
  const rh=[0.52,0.78,0.78,0.78,0.78]; let y=ty;
  // outer border
  const totalH=rh.reduce((a,b)=>a+b,0);
  s.addShape(p.ShapeType.roundRect,{x:tx,y:ty,w:tw,h:totalH,rectRadius:0.1,fill:{color:PAPER2},line:{color:CARD_BORD,width:1}});
  rows.forEach((r,i)=>{
    if(i===0) s.addShape(p.ShapeType.rect,{x:tx,y,w:tw,h:rh[0],fill:{color:CARD},line:{type:"none"}});
    if(i>0) s.addShape(p.ShapeType.line,{x:tx,y,w:tw,h:0,line:{color:CARD_BORD,width:0.75}});
    const head=i===0;
    s.addText(r[0],{x:tx+0.3,y,w:c1-0.4,h:rh[i],valign:"middle",fontFace:head?MONO:SERIF,fontSize:head?11:15,bold:true,color:head?GOLD_DEEP:INKTEXT,charSpacing:head?1:0,margin:0});
    s.addText(r[1],{x:tx+c1+0.2,y,w:c2-0.35,h:rh[i],valign:"middle",fontFace:head?MONO:SANS,fontSize:head?11:13,bold:head,color:head?GOLD_DEEP:MUTE_L,charSpacing:head?1:0,margin:0});
    s.addText(r[2],{x:tx+c1+c2+0.15,y,w:tw-c1-c2-0.4,h:rh[i],valign:"middle",fontFace:head?MONO:SANS,fontSize:head?11:13,bold:head,color:head?GOLD_DEEP:MUTE_L,charSpacing:head?1:0,margin:0});
    // column separators
    s.addShape(p.ShapeType.line,{x:tx+c1,y,w:0,h:rh[i],line:{color:CARD_BORD,width:0.75}});
    s.addShape(p.ShapeType.line,{x:tx+c1+c2,y,w:0,h:rh[i],line:{color:CARD_BORD,width:0.75}});
    y+=rh[i];
  });
  s.addText("* Illustrative — the framework is content-agnostic; any course or grade band maps the same four principles.",{x:0.7,y:y+0.18,w:12,h:0.3,fontFace:MONO,fontSize:10.5,color:MUTE_L,margin:0});
  footer(s); pageNum(s,7,false);
})();

// 8 WHY ME
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"Why work with me",0.7,0.55);
  s.addText("I teach the class and I ship the software",{x:0.66,y:0.9,w:12,h:0.8,fontFace:SERIF,fontSize:32,bold:true,color:WHITE,margin:0});
  const creds=[[["A builder-teacher hybrid. ",true],["I teach AP World History and I built a 1,700-file platform to run it — a rare combination that means the method is classroom-real, not consultant theory.",false]],
    [["Grounded in tools you already use. ",true],["The stack runs on MagicSchool and Claude for education, Google Workspace, and Canvas — FERPA-safe and district-ready, not another platform to vet.",false]],
    [["Proven, not promised. ",true],["Every claim in this deck points to something already built and running with students.",false]]];
  let y=2.15;
  creds.forEach((parts)=>{ s.addText("◆",{x:0.7,y:y,w:0.4,h:0.4,fontFace:SANS,fontSize:16,color:GOLD,margin:0});
    s.addText(parts.map(([t,b])=>({text:t,options:{bold:b,color:b?WHITE:"E9E2D2"}})),{x:1.2,y:y,w:11,h:0.9,fontFace:SANS,fontSize:15,margin:0,valign:"top"}); y+=1.05; });
  s.addText("◆",{x:0.7,y:y,w:0.4,h:0.4,fontFace:SANS,fontSize:16,color:GOLD,margin:0});
  s.addText("[ Add: years teaching · AP experience · credentials · any results or recognition ]",{x:1.2,y:y,w:11,h:0.5,fontFace:SANS,fontSize:14,italic:true,color:GOLD_SOFT,margin:0});
  footer(s); pageNum(s,8,true);
})();

// 9 OFFER
(()=>{ const s=p.addSlide(); bg(s,PAPER);
  eyebrow(s,"How we'd work together",0.7,0.55,GOLD_DEEP);
  s.addText("Four ways to bring this to your staff",{x:0.66,y:0.9,w:12,h:0.8,fontFace:SERIF,fontSize:32,bold:true,color:INKTEXT,margin:0});
  const tiers=[["Keynote","The vision session","60–90 min · whole staff","\"AI that augments, never replaces\" — the case and the guardrail framework that reframes the whole conversation."],
    ["Workshop","Hands-on half day","3–4 hrs · by department","Teachers leave with one guardrailed, AI-integrated lesson built in their own subject."],
    ["Cohort","Coaching cohort","a semester · small group","Build a consistent, AI-integrated unit with ongoing coaching and a shared measurement plan."],
    ["Build","Licensing & build","custom · school / district","Bring BeHistorical — or a course built on the method — to your classrooms, implementation included."]];
  const cw=2.86,gap=0.28,sx=0.7,cy=2.35,ch=3.3;
  tiers.forEach((t,i)=>{ const x=sx+i*(cw+gap);
    s.addShape(p.ShapeType.roundRect,{x,y:cy,w:cw,h:ch,rectRadius:0.12,fill:{color:CARD},line:{color:CARD_BORD,width:1}});
    s.addText(t[0].toUpperCase(),{x:x+0.28,y:cy+0.28,w:cw-0.5,h:0.3,fontFace:MONO,fontSize:10,bold:true,color:GOLD_DEEP,charSpacing:1,margin:0});
    s.addText(t[1],{x:x+0.28,y:cy+0.62,w:cw-0.5,h:0.6,fontFace:SERIF,fontSize:18,bold:true,color:INKTEXT,margin:0,valign:"top"});
    s.addText(t[2],{x:x+0.28,y:cy+1.28,w:cw-0.5,h:0.4,fontFace:MONO,fontSize:10,color:TEAL_D,margin:0});
    s.addText(t[3],{x:x+0.28,y:cy+1.72,w:cw-0.5,h:1.4,fontFace:SANS,fontSize:12,color:MUTE_L,margin:0,valign:"top"}); });
  s.addText([{text:"Each engagement is scoped to your goals and building.  ",options:{color:MUTE_L}},{text:"[ add pricing / packages when ready ]",options:{color:GOLD_DEEP,italic:true}}],{x:0.7,y:5.85,w:12,h:0.4,fontFace:MONO,fontSize:11,margin:0});
  footer(s); pageNum(s,9,false);
})();

// 10 CTA
(()=>{ const s=p.addSlide(); bg(s,INK);
  eyebrow(s,"Let's talk",0.7,0.75);
  s.addText("Put a real plan behind the AI in your building.",{x:0.62,y:1.25,w:9,h:1.6,fontFace:SERIF,fontSize:44,bold:true,color:WHITE,margin:0});
  s.addText("If your teachers are going to use AI anyway, give them a method that makes it rigorous. Let's scope a session that fits your staff.",{x:0.7,y:3.35,w:8.2,h:0.9,fontFace:SANS,fontSize:16,color:MUTE_D,margin:0});
  s.addShape(p.ShapeType.roundRect,{x:0.7,y:4.5,w:9.6,h:1.35,rectRadius:0.12,fill:{color:PANEL},line:{color:PANEL2,width:1}});
  s.addText("BOOK A DISCOVERY CALL",{x:1.0,y:4.75,w:9,h:0.3,fontFace:MONO,fontSize:11,bold:true,color:GOLD,charSpacing:2,margin:0});
  s.addText([{text:"AndersonLogic AI      ",options:{bold:true,color:GOLD_SOFT}},{text:"Jeff Anderson, Founder      ",options:{color:"EFE8D8"}},{text:"[ business email ]      [ andersonlogic.ai ]",options:{color:GOLD_SOFT,italic:true}}],{x:1.0,y:5.15,w:9,h:0.4,fontFace:MONO,fontSize:13,margin:0});
  pageNum(s,10,true);
})();

p.writeFile({fileName:"/home/user/ap-world-history/scratchpad-deck/AndersonLogic-AI-PD-Consulting.pptx"}).then((f)=>console.log("wrote",f));
