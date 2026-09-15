#!/usr/bin/env node
'use strict';
const http=require('http');
const fs=require('fs');
const path=require('path');
let chromium;
try{({chromium}=require('playwright-core'));}catch(e){console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');process.exit(2);}
const ROOT=path.resolve(__dirname,'..','..');
const EXE=process.env.PW_CHROME||(()=>{const base=process.env.PLAYWRIGHT_BROWSERS_PATH||'/opt/pw-browsers';const builds=(fs.existsSync(base)?fs.readdirSync(base):[]).filter(d=>/^chromium-\d+$/.test(d)).sort((a,b)=>Number(b.split('-')[1])-Number(a.split('-')[1]));for(const build of builds){for(const layout of ['chrome-linux64','chrome-linux']){const exe=path.join(base,build,layout,'chrome');if(fs.existsSync(exe))return exe;}}return 'chromium';})();
const TYPES={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.avif':'image/avif'};
const server=http.createServer((req,res)=>{const rel=decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');const file=path.join(ROOT,rel);if(!file.startsWith(ROOT)||!fs.existsSync(file)||fs.statSync(file).isDirectory()){res.writeHead(404);res.end('nope');return;}res.writeHead(200,{'Content-Type':TYPES[path.extname(file).toLowerCase()]||'application/octet-stream'});res.end(fs.readFileSync(file));});
const results=[];function check(name,pass,detail){results.push({name,pass});console.log(`  ${pass?'PASS':'FAIL'}  ${name}${detail?'  ('+detail+')':''}`);}
async function localPage(browser,url,viewport){const page=await browser.newPage({viewport});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',route=>route.request().url().startsWith(url.origin)?route.continue():route.abort());return{page,errors};}
async function imageState(page,selector){const img=page.locator(selector).first();await img.waitFor({state:'visible'});return img.evaluate(el=>{const r=el.getBoundingClientRect(),h=(el.parentElement||el).getBoundingClientRect(),cs=getComputedStyle(el);return{complete:el.complete,naturalWidth:el.naturalWidth,naturalHeight:el.naturalHeight,fit:cs.objectFit,src:el.getAttribute('src')||'',inside:r.left>=h.left-1&&r.top>=h.top-1&&r.right<=h.right+1&&r.bottom<=h.bottom+1,width:r.width,height:r.height,hostWidth:h.width,hostHeight:h.height};});}
async function verifyContainedImage(page,selector,label){const s=await imageState(page,selector);check(`${label} decodes`,s.complete&&s.naturalWidth>0&&s.naturalHeight>0,`${s.naturalWidth}x${s.naturalHeight}`);check(`${label} uses non-cropping contain fit`,s.fit==='contain',`object-fit=${s.fit}`);check(`${label} stays inside its visual host`,s.inside,`${Math.round(s.width)}x${Math.round(s.height)} in ${Math.round(s.hostWidth)}x${Math.round(s.hostHeight)}`);}
async function verifyHeroOverlay(page,label){const state=await page.locator('.hero-slide').evaluate(el=>{const r=el.getBoundingClientRect(),copy=el.querySelector('.copy'),veil=el.querySelector('.veil');if(!copy)return{inside:false,ratio:1,veil:false};const c=copy.getBoundingClientRect();return{inside:c.left>=r.left-1&&c.top>=r.top-1&&c.right<=r.right+1&&c.bottom<=r.bottom+1,ratio:(c.width*c.height)/(r.width*r.height),veil:!!veil};});check(`${label} keeps overlay text inside the frame`,state.inside,`overlay ${(state.ratio*100).toFixed(1)}% of frame`);check(`${label} preserves image visibility under the text`,state.veil&&state.ratio<0.45,`overlay ${(state.ratio*100).toFixed(1)}% of frame`);}
async function heroGeometry(page){return page.locator('.hero-slide').evaluate(el=>{const r=el.getBoundingClientRect(),copy=el.querySelector('.copy'),media=el.querySelector('.media');const c=copy?copy.getBoundingClientRect():null,m=media?media.getBoundingClientRect():null;const norm=x=>x==null?null:{left:(x.left-r.left)/r.width,top:(x.top-r.top)/r.height,right:(x.right-r.left)/r.width,bottom:(x.bottom-r.top)/r.height,width:x.width/r.width,height:x.height/r.height};return{copy:norm(c),media:norm(m)};});}
(async()=>{await new Promise(r=>server.listen(0,r));const port=server.address().port;const origin=new URL(`http://127.0.0.1:${port}/`);const browser=await chromium.launch({executablePath:EXE,args:['--no-sandbox']});

  {
    const {page,errors}=await localPage(browser,origin,{width:1440,height:950});
    await page.goto(`${origin}teacher/topic-2-2-os.html`,{waitUntil:'domcontentloaded'});await page.waitForSelector('#stage .slide');
    console.log('\n  Topic 2.2 teacher surface');
    check('2.2 single-source teaching data renders the first slide',(await page.locator('#count').textContent()).trim().startsWith('1 / '),await page.locator('#count').textContent());
    check('2.2 run of show is present',await page.locator('.flow-card').count()>=10,'cards='+await page.locator('.flow-card').count());
    check('2.2 teacher intelligence exposes LAND, STORY, ASK, and AP',await page.locator('#notes').innerText().then(t=>['LAND','STORY','ASK','AP CONNECTION'].every(x=>t.includes(x))));
    await verifyContainedImage(page,'img[src*="Steppes%20of%20Asia"]','2.2 opening steppe visual');await verifyHeroOverlay(page,'2.2 opening steppe visual');
    const openingGeom=await heroGeometry(page);check('2.2 title sits at the top left of the opening image',openingGeom.copy&&openingGeom.copy.left<0.08&&openingGeom.copy.top<0.12,openingGeom.copy?JSON.stringify(openingGeom.copy):'no copy');
    await page.locator('#next').click();await page.waitForTimeout(40);check('2.2 Next advances the presentation',(await page.locator('#count').textContent()).trim().startsWith('2 / '),await page.locator('#count').textContent());
    await page.locator('#briefingBtn').click();check('2.2 Briefing opens without replacing the teaching surface',await page.locator('#drawer').evaluate(el=>el.classList.contains('open')));await page.locator('#closeBriefing').click();

    await page.locator('#rail button[data-i="2"]').click();await page.waitForTimeout(60);
    check('2.2 slide 3 uses one map only',await page.locator('#stage .slide img').count()===1,'images='+await page.locator('#stage .slide img').count());
    await verifyContainedImage(page,'img[src*="Map%20of%20the%20Khanates"]','2.2 slide 3 successor-khanates map');

    await page.locator('#rail button[data-i="4"]').click();await page.waitForTimeout(60);
    check('2.2 slide 5 no longer uses the mounted-archers visual',await page.locator('img[src*="Cinematic%20Mongol%20Archers"]').count()===0);
    await verifyContainedImage(page,'img[src*="Chinggis%20Museum.jpg"]','2.2 slide 5 Chinggis Museum visual');

    await page.locator('#rail button[data-i="5"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Cinematic%20Mongol%20Archers"]','2.2 slide 6 mounted-archers reconstruction');await verifyHeroOverlay(page,'2.2 slide 6 mounted-archers reconstruction');
    const archerGeom=await heroGeometry(page);check('2.2 slide 6 keeps the far-left archer clear of the text panel',archerGeom.copy&&archerGeom.copy.left>0.50,archerGeom.copy?JSON.stringify(archerGeom.copy):'no copy');
    check('2.2 mounted-archers disclosure is visible',(await page.locator('.credit-row').innerText()).includes('HISTORICAL RECONSTRUCTION — AI GENERATED'));

    await page.locator('#rail button[data-i="6"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Cinematic%20Mongol%20city%20gate"]','2.2 slide 7 fortified-city reconstruction');
    const siegeGeom=await heroGeometry(page);check('2.2 slide 7 puts the title band above the image',siegeGeom.copy&&siegeGeom.media&&siegeGeom.copy.top<0.02&&siegeGeom.copy.bottom<=siegeGeom.media.top+0.02&&siegeGeom.media.top>=0.28,JSON.stringify(siegeGeom));
    check('2.2 slide 7 gives at least 70% of the frame to the image',siegeGeom.media&&siegeGeom.media.height>=0.69,JSON.stringify(siegeGeom.media));

    await page.locator('#rail button[data-i="9"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Map%20of%20the%20Khanates"]','2.2 khanates map');

    await page.locator('#rail button[data-i="11"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Mongol%20Yam%20Relay%20Across%20the%20Steppe"]','2.2 Yam relay reconstruction');await verifyHeroOverlay(page,'2.2 Yam relay reconstruction');

    await page.locator('#rail button[data-i="15"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Cinematic%20Mongol%20Caravan"]','2.2 slide 16 protected-caravan reconstruction');
    const caravanGeom=await heroGeometry(page);check('2.2 slide 16 text spans the bottom quarter',caravanGeom.copy&&caravanGeom.copy.left<0.02&&caravanGeom.copy.right>0.98&&caravanGeom.copy.top>=0.73&&caravanGeom.copy.height<=0.27,caravanGeom.copy?JSON.stringify(caravanGeom.copy):'no copy');

    await page.locator('#rail button[data-i="16"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Chinggis%20Museum%20Donoho"]','2.2 slide 17 Chinggis Museum Donoho background');await verifyHeroOverlay(page,'2.2 slide 17 paradox visual');

    check('2.2 no longer points reconstruction slides at the corrupted legacy WebPs',!(await page.evaluate(()=>window.BEHISTORICAL_TEACHING.slides.some(s=>s.visual&&String(s.visual.url||'').includes('assets/images/reconstructions')))));
    check('2.2 teacher page has no JavaScript errors',errors.length===0,errors.join('; ')||'none');await page.close();
  }

  {
    const {page,errors}=await localPage(browser,origin,{width:1440,height:950});
    await page.goto(`${origin}teacher/topic-2-1-story-os.html`,{waitUntil:'domcontentloaded'});await page.waitForSelector('#stage .slide');
    console.log('\n  Topic 2.1 storytelling teacher surface');
    check('2.1 story OS renders the first slide',(await page.locator('#count').textContent()).trim().startsWith('1 / '),await page.locator('#count').textContent());
    check('2.1 run of show is present',await page.locator('.flow-card').count()>=10,'cards='+await page.locator('.flow-card').count());
    check('2.1 teacher intelligence exposes LAND, STORY, ASK, and AP',await page.locator('#notes').innerText().then(t=>['LAND','STORY','ASK','AP CONNECTION'].every(x=>t.includes(x))));
    await verifyContainedImage(page,'img[src*="Silk%20Road%20Map%202"]','2.1 opening visual');await verifyHeroOverlay(page,'2.1 opening visual');

    await page.locator('#rail button[data-i="4"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Silk%20Road%20Map.png"]','2.1 detailed Silk Road map');

    await page.locator('#runOfShowToggle').click();
    const cause=page.locator('.flow-card').filter({hasText:'Teach Causes'});await cause.click();await page.waitForTimeout(40);check('2.1 merchant-relay cause remains an intentional mechanism view',await page.locator('.mechanism-slide .mechanism-node').count()===4,'nodes='+await page.locator('.mechanism-slide .mechanism-node').count());
    await page.locator('#rail button[data-i="8"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Caravanserai%20Reconstruction"]','2.1 caravanserai reconstruction');await verifyHeroOverlay(page,'2.1 caravanserai reconstruction');
    check('2.1 caravanserai is local and no Canva iframe remains',await page.locator('iframe[src*="canva"]').count()===0);
    const reconBadge=await page.locator('.hero-slide').evaluate(el=>getComputedStyle(el,'::before').content||'');check('2.1 caravanserai disclosure is visible',reconBadge.includes('HISTORICAL RECONSTRUCTION')&&reconBadge.includes('AI GENERATED'),reconBadge);

    await page.locator('#rail button[data-i="10"]').click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Chinese%20Paper%20Money"]','2.1 Chinese paper-money artifact');

    await page.locator('#rail button[data-i="14"]').click();await page.waitForTimeout(60);
    check('2.1 gives Samarkand and Kashgar their own network-node story',await page.locator('.city-node').count()===2,'nodes='+await page.locator('.city-node').count());
    const cityVisuals=await page.locator('.city-node').evaluateAll(nodes=>nodes.map(n=>({bg:getComputedStyle(n).backgroundImage,size:getComputedStyle(n).backgroundSize,repeat:getComputedStyle(n).backgroundRepeat})));
    check('2.1 Samarkand node fills its framing box',cityVisuals[0]&&cityVisuals[0].bg.includes('Samarkand')&&cityVisuals[0].size.includes('cover')&&cityVisuals[0].repeat.includes('no-repeat'),cityVisuals[0]?JSON.stringify(cityVisuals[0]):'missing');
    check('2.1 Kashgar node fills its framing box',cityVisuals[1]&&cityVisuals[1].bg.includes('Kashgar')&&cityVisuals[1].size.includes('cover')&&cityVisuals[1].repeat.includes('no-repeat'),cityVisuals[1]?JSON.stringify(cityVisuals[1]):'missing');

    const railCount=await page.locator('#rail button').count();await page.locator(`#rail button[data-i="${railCount-1}"]`).click();await page.waitForTimeout(60);
    await verifyContainedImage(page,'img[src*="Kashgar"]','2.1 closing Kashgar visual');await verifyHeroOverlay(page,'2.1 closing Kashgar visual');
    check('2.1 teacher page has no JavaScript errors',errors.length===0,errors.join('; ')||'none');await page.close();
  }

  for(const [label,pathName,firstAsset] of [['2.2','topic-2-2-os.html','Steppes%20of%20Asia'],['2.1','topic-2-1-story-os.html','Silk%20Road%20Map%202']]){
    const {page,errors}=await localPage(browser,origin,{width:1920,height:1080});
    await page.goto(`${origin}teacher/${pathName}?mode=project`,{waitUntil:'domcontentloaded'});await page.waitForSelector('#stage .slide');
    console.log(`\n  Topic ${label} projection surface`);
    check(`${label} projection hides teacher chrome`,await page.locator('.appbar').evaluate(el=>getComputedStyle(el).display==='none')&&await page.locator('.intel').evaluate(el=>getComputedStyle(el).display==='none'));
    const box=await page.locator('#stage').boundingBox();check(`${label} projection fills a 1920×1080 viewport`,!!box&&Math.abs(box.width-1920)<2&&Math.abs(box.height-1080)<2,box?`${box.width}x${box.height}`:'no box');
    await verifyContainedImage(page,`img[src*="${firstAsset}"]`,`${label} first projected local visual`);await verifyHeroOverlay(page,`${label} first projected local visual`);
    check(`${label} projection has no JavaScript errors`,errors.length===0,errors.join('; ')||'none');await page.close();
  }

  await browser.close();server.close();const failed=results.filter(r=>!r.pass);console.log(`\n  ${results.length-failed.length}/${results.length} passed`);if(failed.length){for(const f of failed)console.log('  ✗ '+f.name);process.exit(1);}
})();