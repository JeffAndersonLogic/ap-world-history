(function(){
 'use strict';
 const $=id=>document.getElementById(id),config=CLASS_PULSE_CONFIG,contract=CLASS_PULSE_CONTRACT;
 const classId=new URLSearchParams(location.search).get('class')||config.classId;
 const status=$('load-state');
 if(!classId){status.textContent='Class setup is not complete. Use the class link provided after your school roster and teacher access are configured.';return;}
 try{ClassPulseData.segment(classId);}catch(e){status.textContent=e.message;return;}
 const auth=ClassPulseAuth(config),db=ClassPulseData.create({...config,classId},auth);
 $('sign-in').hidden=false;
 let opening=false;
 $('sign-in').addEventListener('click',async()=>{
  if(opening)return;opening=true;$('sign-in').disabled=true;status.textContent='Signing in and loading your authorized class…';
  try{await auth.signIn();const bundle=await db.teacherLoad();const data=ClassPulseData.materialize(bundle,contract,SkillLensPilot);
   $('class-label').textContent=data.classLabel||classId;
   $('production-note').textContent='Teacher review mode. No automatic analysis service is connected. Unanalyzed writing stays unassessed. '+(data.stale?data.stale+' older judgment records were excluded because responses changed.':'');
   let saving=false;
   async function save(operation){if(saving)throw Error('A save is already in progress.');saving=true;document.querySelectorAll('#workspace button,#workspace select').forEach(el=>el.disabled=true);try{return await operation();}finally{saving=false;document.querySelectorAll('#workspace button,#workspace select').forEach(el=>el.disabled=false);}}
   window.startClassPulse(data,{saveOverride:(record,response)=>save(()=>db.saveOverride(record,response,crypto.randomUUID())),saveDecision:record=>save(()=>db.saveDecision(record,crypto.randomUUID()))});
   $('sign-in').hidden=true;$('sign-out').hidden=false;$('refresh').hidden=false;
  }catch(e){status.hidden=false;status.textContent='Class could not load: '+e.message+' No sample data has been substituted.';$('workspace').hidden=true;}finally{opening=false;$('sign-in').disabled=false;}
 });
 $('sign-out').addEventListener('click',async()=>{$('workspace').replaceChildren();$('export').hidden=true;await auth.signOut();location.reload();});
 $('refresh').addEventListener('click',()=>{if(confirm('Reload the class? Unsaved typing in a review form will be lost.'))location.reload();});
})();
