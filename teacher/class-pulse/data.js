/* Class-scoped data adapter. No model calls or browser persistence. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ClassPulseData=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const segment=value=>{if(typeof value!=='string'||!value||value.length>128||!/^[-A-Za-z0-9_.@]+$/.test(value))throw Error('Invalid class or record identifier.');return value;};
 function decode(v){if('stringValue'in v)return v.stringValue;if('integerValue'in v)return Number(v.integerValue);if('booleanValue'in v)return v.booleanValue;if('timestampValue'in v)return v.timestampValue;if('nullValue'in v)return null;if(v.arrayValue)return(v.arrayValue.values||[]).map(decode);if(v.mapValue)return fields(v.mapValue.fields||{});throw Error('Unsupported database value.');}
 const fields=f=>Object.fromEntries(Object.entries(f).map(([k,v])=>[k,decode(v)]));
 function encode(v){if(typeof v==='string')return{stringValue:v};if(typeof v==='boolean')return{booleanValue:v};if(Number.isSafeInteger(v))return{integerValue:String(v)};throw Error('Unsupported write value.');}
 function create(config,auth,fetcher){
  const request=fetcher||fetch,base='https://firestore.googleapis.com/v1/projects/'+segment(config.firebase.projectId)+'/databases/(default)/documents';
  const classPath='tenants/'+segment(config.tenantId)+'/classes/'+segment(config.classId),assignmentPath=classPath+'/assignments/'+segment(config.assignmentId);
  async function call(path,options={}){
   const token=await auth.getToken();const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),20000);
   try{const res=await request(base+'/'+path,{...options,signal:controller.signal,cache:'no-store',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'}});
    if(res.status===404)return null;
    if(!res.ok){const code=res.status;throw Error(code===403?'Access denied. Your account or class has not been authorized.':code===401?'Your sign-in expired. Sign in again.':code===429?'Database quota reached. Retry later; your existing work is unchanged.':code===409||code===412?'This response changed in another session. Reload before submitting again.':'The database request failed ('+code+'). Retry without closing this page.');}
    return await res.json();
   }catch(error){if(error.name==='AbortError')throw Error('The database request timed out. Retry; no success has been assumed.');throw error;}finally{clearTimeout(timer);}
  }
  async function get(path){const d=await call(path);return d?{...fields(d.fields||{}),_id:d.name.split('/').pop(),_updateTime:d.updateTime}:null;}
  async function list(path){let token='',out=[];do{const response=await call(path+'?pageSize=200'+(token?'&pageToken='+encodeURIComponent(token):''));if(!response)return [];out.push(...(response.documents||[]).map(d=>({...fields(d.fields||{}),_id:d.name.split('/').pop()})));token=response.nextPageToken||'';if(out.length>5000)throw Error('This class exceeds the pilot read limit. No partial class pattern will be shown.');}while(token);return out;}
  async function write(path,data,timeField,previous){
   const name='projects/'+config.firebase.projectId+'/databases/(default)/documents/'+path;
   const body={writes:[{update:{name,fields:Object.fromEntries(Object.entries(data).map(([k,v])=>[k,encode(v)]))},updateTransforms:[{fieldPath:timeField,setToServerValue:'REQUEST_TIME'}],currentDocument:previous?{updateTime:previous}:{exists:false}}]};
   // :commit is a sibling of the document path, not a document resource.
   const token=await auth.getToken(),controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
   try{const res=await request(base+':commit',{method:'POST',signal:controller.signal,cache:'no-store',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(body)});if(!res.ok)throw Error(res.status===409||res.status===412?'This record changed or was already saved. Reload to confirm before retrying.':res.status===403?'Access denied. Nothing was saved.':'Save was not confirmed. Keep this page open and retry.');return await res.json();}catch(e){if(e.name==='AbortError')throw Error('Save timed out. Reload to confirm whether it arrived before retrying.');throw e;}finally{clearTimeout(timer);}
  }
  return{
   async teacherLoad(){const uid=auth.user()?.uid;if(!uid)throw Error('Sign in with your school account.');const role=await get(classPath+'/teachers/'+segment(uid));if(!role?.active)throw Error('Your account is not assigned to this class.');const [cl,assignment]=await Promise.all([get(classPath),get(assignmentPath)]);if(!cl?.active||!assignment)throw Error('Class setup is incomplete.');const [members,submissions,analyses,overrides,decisions]=await Promise.all(['members', 'submissions','analyses','overrides','decisions'].map((key,i)=>list((i?assignmentPath:classPath)+'/'+key)));return{cl,assignment,members,submissions,analyses,overrides,decisions,teacher:{uid,label:role.label||auth.user().email}};},
   async studentLoad(){const uid=segment(auth.user()?.uid);const [cl,member,assignment,submission]=await Promise.all([get(classPath),get(classPath+'/members/'+uid),get(assignmentPath),get(assignmentPath+'/submissions/'+uid)]);if(!cl?.active||!member?.active||!assignment)throw Error('You are not enrolled in this checkpoint.');return{cl,member,assignment,submission};},
   submit(text,contractId,previous){const uid=segment(auth.user()?.uid);if(typeof text!=='string'||text.length>20000)throw Error('Response must be at most 20,000 characters.');return write(assignmentPath+'/submissions/'+uid,{studentId:uid,contractId,text,revision:(previous?.revision||0)+1},'submittedAt',previous?._updateTime);},
   saveOverride(record,response,id){return write(assignmentPath+'/overrides/'+segment(id),{studentId:response.studentId,revision:response.revision,actorUid:auth.user().uid,payload:JSON.stringify(record)},'createdAt');},
   saveDecision(record,id){return write(assignmentPath+'/decisions/'+segment(id),{actorUid:auth.user().uid,contractId:record.contractId,payload:JSON.stringify(record)},'createdAt');}
  };
 }
 function materialize(bundle,contract,core){
  if(bundle.assignment.contractId!==contract.contractId)throw Error('This checkpoint rubric has changed. Its published assignment must be updated before review.');
  const responses=bundle.members.filter(m=>m.active).map(m=>{const s=bundle.submissions.find(s=>s._id===m._id);if(s&&(s.studentId!==m._id||s.contractId!==contract.contractId||!Number.isSafeInteger(s.revision)||typeof s.text!=='string'))throw Error('A submission does not match the current assignment. No partial class pattern will be shown.');return{id:m._id+'__r'+(s?.revision||0),studentId:m._id,revision:s?.revision||0,label:m.label||m._id,text:s?.text||'',submission:s?'submitted':'missing'};});
  const analyses=[],overrides=[],decisions=[];let stale=0;
  for(const stored of bundle.analyses){const r=responses.find(r=>r.studentId===stored._id);if(!r||stored.revision!==r.revision){stale++;continue;}try{const a=JSON.parse(stored.payload);analyses.push(a);}catch{analyses.push({responseId:r.id});}}
  for(const stored of bundle.overrides){const r=responses.find(r=>r.studentId===stored.studentId);if(!r||r.revision!==stored.revision){stale++;continue;}let o;try{o=JSON.parse(stored.payload);}catch{throw Error('A saved teacher judgment could not be read.');}if(o.responseId!==r.id||o.responseText!==r.text||o.contractId!==contract.contractId||!core.bands.includes(o.band)||!contract.criteria.some(c=>c.id===o.criterionId)||typeof o.reason!=='string'||!o.reason.trim())throw Error('A saved teacher judgment does not match its evidence.');overrides.push({...o,at:stored.createdAt,author:stored.actorUid,_id:stored._id});}
  overrides.sort((a,b)=>a.at.localeCompare(b.at)||a._id.localeCompare(b._id));
  for(const stored of bundle.decisions){try{const d=JSON.parse(stored.payload);if(d.contractId!==contract.contractId||!Array.isArray(d.evidence)||!contract.criteria.some(c=>c.id===d.criterionId))throw Error();decisions.push({...d,at:stored.createdAt,author:stored.actorUid});}catch{throw Error('A saved teaching decision could not be read.');}}
  decisions.sort((a,b)=>a.at.localeCompare(b.at));
  return{synthetic:false,contract,responses,analyses,overrides,decisions,stale,classLabel:bundle.cl.label,teacher:bundle.teacher};
 }
 return{create,materialize,segment,decode};
});
