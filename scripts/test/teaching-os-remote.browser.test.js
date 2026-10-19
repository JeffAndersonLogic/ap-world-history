#!/usr/bin/env node
'use strict';
// Exercise the real host and iPad pages in isolated browser contexts. A local
// ntfy-protocol fixture controls lost messages, stalled streams, and quotas;
// this does not claim that a school's network can reach the public relay.
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert/strict');
let chromium;try{({chromium}=require('playwright-core'));}catch(e){console.error('Needs playwright-core');process.exit(2);}
const ROOT=path.resolve(__dirname,'../..'),channels=new Map(),connections=new Set();
let sequence=0,origin;
const channel=name=>{if(!channels.has(name))channels.set(name,{messages:[],streams:new Set(),dropHello:0,duplicate:false,blocked:false,limited:false,posts:0,requests:0});return channels.get(name);};
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'};
const server=http.createServer(async(req,res)=>{
  const u=new URL(req.url,'http://local');
  if(u.pathname.startsWith('/relay/')){
    const parts=u.pathname.split('/'),c=channel(parts[2]),kind=parts[3];
    c.requests++;
    res.setHeader('Content-Type','application/json');
    if(c.limited){res.writeHead(429,{'Retry-After':'60'});res.end();return;}
    if(c.blocked)return;
    if(kind==='sse'){
      res.setHeader('Content-Type','text/event-stream');res.writeHead(200);res.write(': ready\n\n');c.streams.add(res);req.on('close',()=>c.streams.delete(res));return;
    }
    if(kind==='json'){res.end(c.messages.map(JSON.stringify).join('\n'));return;}
    let body='';for await(const chunk of req)body+=chunk;
    if(kind==='trigger')body=u.searchParams.get('message');
    const data=JSON.parse(body);c.posts++;
    if(data.type==='hello'&&c.dropHello){c.dropHello--;res.end('{}');return;}
    const message={event:'message',id:String(++sequence),time:Math.floor(Date.now()/1000),message:body};
    c.messages.push(message);
    for(const stream of c.streams){stream.write('data: '+JSON.stringify(message)+'\n\n');if(c.duplicate)stream.write('data: '+JSON.stringify(message)+'\n\n');}
    if(c.hangPostOnce&&req.method==='POST'&&data.type==='next'){c.hangPostOnce=false;return;}
    res.end('{}');return;
  }
  const file=path.resolve(ROOT,'.'+u.pathname);
  if(!file.startsWith(ROOT+path.sep)||!fs.existsSync(file)||fs.statSync(file).isDirectory()){res.writeHead(404);res.end();return;}
  res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));
});
server.on('connection',s=>{connections.add(s);s.on('close',()=>connections.delete(s));});
const count=p=>p.frameLocator('#command').locator('#count');
const index=p=>count(p).textContent().then(t=>Number(t.match(/\d+/)[0])-1);
async function waitIndex(p,n){await p.waitForFunction(n=>{const d=document.querySelector('#command').contentDocument,c=d&&d.querySelector('#count');const m=c&&c.textContent.match(/\d+/);return m&&Number(m[0])-1===n;},n);}
async function makeContext(browser,mode='sse',override){
  const c=await browser.newContext({viewport:{width:1440,height:1000}});
  await c.addInitScript(({origin,mode})=>{
    if(window!==window.top)return;
    // Accelerate only idle polling in the fixture; keep six-second network
    // deadlines and handshake/backoff timing real.
    if(mode==='poll'){
      const timeout=window.setTimeout;
      window.setTimeout=(fn,delay,...args)=>timeout(fn,delay===10000?500:delay,...args);
    }
    const NativeES=window.EventSource,nativeFetch=window.fetch;
    window.fetch=(url,init)=>nativeFetch(String(url).replace('https://ntfy.sh',origin+'/relay'),init);
    window.EventSource=class extends NativeES{constructor(url){if(mode!=='sse')throw new Error('stream unavailable');super(url.replace('https://ntfy.sh',origin+'/relay'));}};
    window.WebSocket=class{
      constructor(url){this.readyState=0;
        if(mode==='ws'){
          this.source=new NativeES(url.replace('wss://ntfy.sh',origin+'/relay').replace(/\/ws$/,'/sse'));
          this.source.onopen=()=>{this.readyState=1;if(this.onopen)this.onopen();};
          this.source.onmessage=e=>{if(this.onmessage)this.onmessage(e);};
        }else setTimeout(()=>{if(this.onclose)this.onclose();},20);
      }
      close(){if(this.source)this.source.close();this.readyState=3;}
    };
  },{origin,mode});
  await c.route('**/*',r=>{
    if(!r.request().url().startsWith(origin+'/'))return r.abort();
    if(override&&new URL(r.request().url()).pathname==='/teacher/ipad-remote.html')return r.fulfill({contentType:'text/html',body:override});
    return r.continue();
  });return c;
}
async function pair(browser,mode,options={}){
  const hc=await makeContext(browser,mode),ic=await makeContext(browser,mode,options.override),h=await hc.newPage(),i=await ic.newPage(),errors=[];
  for(const p of [h,i])p.on('pageerror',e=>errors.push(e.message));
  await h.goto(origin+'/teacher/remote-host.html?topic=3-2');
  const session=await h.evaluate(()=>sessionStorage.getItem('behistorical-remote-session-3-2'));
  const c=channel('behistorical-remote-'+session);Object.assign(c,options);
  await count(h).waitFor();await h.locator('#closeQr').click();
  for(let n=0;n<4;n++)await h.frameLocator('#command').locator('#next').click();
  if(options.delayFrame)await ic.route('**/teacher/topic-3-2-os.html',async r=>{await new Promise(resolve=>setTimeout(resolve,4500));await r.continue();});
  await i.goto(origin+'/teacher/ipad-remote.html?topic=3-2&session='+session,{waitUntil:options.delayFrame?'domcontentloaded':'load'});
  return{h,i,c,errors,close:async()=>{await hc.close();await ic.close();}};
}
async function connected(p){await p.i.waitForFunction(()=>document.querySelector('#status').classList.contains('ok'),null,{timeout:35000});await waitIndex(p.i,await index(p.h));}
async function main(){
  await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
  const browser=await chromium.launch({executablePath:process.env.PW_CHROME||'chromium',args:['--no-sandbox']});
  try{
    for(const mode of ['sse','ws','poll']){
      const p=await pair(browser,mode,{dropHello:mode==='sse'?1:0,duplicate:true,delayFrame:mode==='sse'});
      try{
        await connected(p);assert.equal(await p.i.locator('#offline').isVisible(),false);
        console.log('PASS '+mode+' joins and restores current slide'+(mode==='sse'?' after lost hello and slow iframe':''));
        const before=await index(p.h);await p.i.locator('#next').click();await waitIndex(p.h,before+1);await waitIndex(p.i,before+1);
        await p.i.waitForTimeout(300);assert.equal(await index(p.h),before+1);console.log('PASS '+mode+' duplicate command advances only once');
        await p.h.frameLocator('#command').locator('#next').click();await waitIndex(p.i,before+2);console.log('PASS '+mode+' laptop changes reach iPad');
        await p.i.locator('#retryRelay').click();await connected(p);
        if(mode==='sse'){
          const start=await index(p.h);p.c.hangPostOnce=true;
          await p.i.locator('#next').click();await waitIndex(p.h,start+1);
          await p.i.waitForTimeout(6800);assert.equal(await index(p.h),start+1);
          const next=p.c.messages.filter(m=>{const d=JSON.parse(m.message);return d.sender==='ipad'&&d.type==='next';}).slice(-2).map(m=>JSON.parse(m.message).messageId);
          assert.equal(next.length,2);assert.equal(next[0],next[1]);
          console.log('PASS timed-out POST retries by GET without repeating the command');
        }
        assert.deepEqual(p.errors,[]);console.log('PASS '+mode+' retry rejoins without script errors');
      }finally{await p.close();}
    }
    const p=await pair(browser,'poll',{blocked:true});
    try{
      await p.i.waitForFunction(()=>document.querySelector('#offlineText').textContent.includes('Cannot reach'),null,{timeout:20000});
      assert.equal(await p.i.locator('#offline').isVisible(),true);console.log('PASS stalled requests show a bounded, actionable failure');
      p.c.blocked=false;await p.i.locator('#retryRelay').click();await p.h.locator('#retryRelay').click();await connected(p);
      console.log('PASS Retry recovers after network becomes available');
      p.c.limited=true;await p.i.locator('#next').click();await p.i.waitForFunction(()=>document.querySelector('#status').textContent.includes('rate-limited'));
      let requests=0;p.i.on('request',r=>{if(r.url().includes('/relay/'))requests++;});
      await p.i.locator('#retryRelay').click();await p.i.waitForTimeout(500);assert.equal(requests,0);console.log('PASS quota failure waits instead of flooding relay');
    }finally{await p.close();}
    // The same lost-hello assertion must reject a client with retries removed.
    const original=fs.readFileSync(path.join(ROOT,'teacher/ipad-remote.html'),'utf8');
    const broken=original.replace('helloTimer=setTimeout(attempt,Math.min(15000,3000*Math.pow(2,helloAttempt-1)));','/* no handshake retry */');
    assert.notEqual(broken,original);
    const n=await pair(browser,'sse',{dropHello:1,override:broken});
    try{await n.i.waitForTimeout(3800);assert.equal(await n.i.locator('#status').evaluate(e=>e.classList.contains('ok')),false);console.log('PASS negative control catches missing handshake retry');}finally{await n.close();}
  }finally{await browser.close();for(const s of connections)s.destroy();await new Promise(r=>server.close(r));}
}
main().catch(e=>{console.error(e);process.exitCode=1;for(const s of connections)s.destroy();server.close();});
