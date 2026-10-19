#!/usr/bin/env node
'use strict';

// Real browser fullscreen, notes-first layout, and recovery across every deck.
// Negative controls remove the native request and restore the cramped layout;
// both must fail the same assertions used for the working implementation.
const fs=require('fs'),path=require('path'),http=require('http');
let chromium;
try{({chromium}=require('playwright-core'));}catch(e){console.error('Needs playwright-core');process.exit(2);}
const ROOT=path.resolve(__dirname,'../..');
const {DECKS}=require('../build-teaching-os-student-decks');
const shared='teacher/teaching-os-shared.js',source=fs.readFileSync(path.join(ROOT,shared),'utf8');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg'};
const server=http.createServer((req,res)=>{
  const file=path.resolve(ROOT,'.'+new URL(req.url,'http://localhost').pathname);
  if(!file.startsWith(ROOT+path.sep)||!fs.existsSync(file)||fs.statSync(file).isDirectory()){res.writeHead(404);res.end();return;}
  res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));
});
let failures=0;
function check(label,pass,detail=''){console.log(`${pass?'PASS':'FAIL'} ${label}${detail?' '+detail:''}`);if(!pass)failures++;}
const teacherPage=key=>[`teacher/topic-${key}-story-os.html`,`teacher/topic-${key}-os.html`].find(p=>fs.existsSync(path.join(ROOT,p))&&fs.readFileSync(path.join(ROOT,p),'utf8').includes('id="presentHere"'));
const settle=p=>p.waitForTimeout(100);
const fullscreen=p=>p.evaluate(()=>!!document.fullscreenElement);
const projected=p=>p.evaluate(()=>document.body.classList.contains('project-mode'));
async function layout(p){return p.evaluate(()=>{
  const intel=document.querySelector('.intel'),stage=document.getElementById('stage'),cue=document.querySelector('.cue li,.cue p');
  const n=intel.getBoundingClientRect(),s=stage.getBoundingClientRect();
  return {notes:n.width,preview:s.width,font:parseFloat(getComputedStyle(cue).fontSize),overflow:document.documentElement.scrollWidth>innerWidth+1,bottom:n.bottom,height:innerHeight};
});}
const readable=x=>x.notes>x.preview*1.35&&x.font>=18&&!x.overflow&&x.bottom<=x.height;
async function context(browser,origin,override){
  const c=await browser.newContext({viewport:{width:1440,height:900}});
  await c.route('**/*',r=>{
    const u=r.request().url();
    if(!u.startsWith(origin+'/'))return r.abort();
    if(override&&new URL(u).pathname==='/'+shared)return r.fulfill({contentType:'text/javascript',body:override});
    return r.continue();
  });return c;
}
async function main(){
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  const origin=`http://127.0.0.1:${server.address().port}`;
  const browser=await chromium.launch({executablePath:process.env.PW_CHROME||'chromium',args:['--no-sandbox']});
  try{
    for(const deck of DECKS){
      const key=deck.key.replace('.','-'),c=await context(browser,origin),p=await c.newPage(),errors=[];
      p.on('pageerror',e=>errors.push(e.message));
      await p.goto(`${origin}/${teacherPage(key)}`);await settle(p);
      check(`${key} notes dominate and fit`,readable(await layout(p)),JSON.stringify(await layout(p)));
      await p.click('#fullScreenToggle');await settle(p);
      check(`${key} Full screen keeps teacher notes`,await fullscreen(p)&&!await projected(p)&&await p.locator('.intel').isVisible());
      await p.evaluate(()=>document.exitFullscreen());await settle(p);
      check(`${key} browser exit updates the control`,await p.locator('#fullScreenToggle').textContent()==='Full screen');
      await p.click('#presentHere');await settle(p);
      check(`${key} Present enters native fullscreen`,await fullscreen(p)&&await projected(p));
      await p.keyboard.press('Escape');await settle(p);
      check(`${key} Esc restores teacher view`,!await fullscreen(p)&&!await projected(p));
      await p.keyboard.press('f');await settle(p);
      check(`${key} F enters native fullscreen`,await fullscreen(p)&&await projected(p));
      await p.evaluate(()=>document.exitFullscreen());await settle(p);
      check(`${key} browser exit restores teacher view`,!await projected(p)&&await p.locator('.intel').isVisible());
      await p.click('#runOfShowToggle');await settle(p);
      check(`${key} Run of Show retains readable notes`,readable(await layout(p)));
      await p.click('#runOfShowToggle');
      await p.setViewportSize({width:1024,height:768});await settle(p);
      check(`${key} laptop layout fits`,readable(await layout(p)));
      await p.setViewportSize({width:600,height:900});await settle(p);
      const narrow=await layout(p);
      check(`${key} narrow layout stacks without horizontal overflow`,!narrow.overflow&&narrow.font>=18&&narrow.notes>500);
      check(`${key} no browser errors`,errors.length===0,errors.join(' | '));
      await c.close();
    }
    const rel=teacherPage('3-2');
    {
      const c=await context(browser,origin),p=await c.newPage();
      await p.goto(`${origin}/${rel}`);
      await p.keyboard.press('Control+f');await p.keyboard.press('Escape');await settle(p);
      check('browser Find does not start a presentation',!await fullscreen(p)&&!await projected(p));
      await p.evaluate(()=>{const field=document.createElement('input');document.body.appendChild(field);field.focus();});
      await p.keyboard.press('f');await settle(p);
      check('typing F does not start a presentation',!await fullscreen(p)&&!await projected(p));
      await c.close();
    }
    {
      const c=await context(browser,origin),p=await c.newPage();
      await p.goto(`${origin}/${rel}?mode=project`);await settle(p);
      check('projector offers an explicit fullscreen button',await p.locator('#projectionFullScreen').isVisible());
      await p.click('#projectionFullScreen');await settle(p);
      check('projector fullscreen fills the screen and hides its button',await fullscreen(p)&&!await p.locator('#projectionFullScreen').isVisible());
      await p.evaluate(()=>document.exitFullscreen());await settle(p);
      check('projector stays slides-only after browser exit',await projected(p)&&!await p.locator('.intel').isVisible()&&await p.locator('#projectionFullScreen').isVisible());
      await c.close();
    }
    {
      const c=await context(browser,origin),p=await c.newPage();
      await p.addInitScript(()=>{Element.prototype.requestFullscreen=()=>Promise.reject(new Error('Denied'));});
      await p.goto(`${origin}/${rel}`);await p.click('#presentHere');await settle(p);
      check('refused fullscreen restores notes and explains recovery',!await fullscreen(p)&&!await projected(p)&&/blocked/.test(await p.locator('.bh-screen-status').textContent()));
      await c.close();
    }
    // Deliberately break the native request, preserving the visual-only toggle.
    {
      const broken=source.replace('await request.call(root);sync();','sync();');
      const c=await context(browser,origin,broken),p=await c.newPage();
      await p.goto(`${origin}/${rel}`);await p.click('#presentHere');await settle(p);
      check('negative control catches visual-only fullscreen',broken!==source&&await projected(p)&&!await fullscreen(p));
      await c.close();
    }
    {
      const c=await context(browser,origin),p=await c.newPage();
      await p.goto(`${origin}/${rel}`);
      await p.addStyleTag({content:'body:not(.project-mode) .cockpit{grid-template-columns:minmax(0,1fr) 390px!important}body:not(.project-mode) .cue p,body:not(.project-mode) .cue li{font-size:.84rem!important}'});
      await settle(p);check('negative control catches cramped teacher notes',!readable(await layout(p)));
      await c.close();
    }
  }finally{await browser.close();server.close();}
  process.exitCode=failures?1:0;
}
main().catch(e=>{console.error(e);server.close();process.exitCode=1;});
