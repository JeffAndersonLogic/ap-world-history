/* BeHistorical Class Pulse: read-only Firestore response adapter.
 * Development only. Auth must be supplied; nothing stores or exports student text.
 */
(function(root,factory){
  var api=factory();
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.BeHistoricalClassPulseReader=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  var topicPattern=/^[0-9]{1,2}-[0-9]{1,2}$/;
  var checkpointSlots={'checkpoint-one-response':true,'checkpoint-two-response':true};
  function stringField(fields,name){
    var f=fields&&fields[name];
    return f&&typeof f.stringValue==='string'?f.stringValue:'';
  }
  function normalize(document){
    if(!document||!document.fields||typeof document.name!=='string')return null;
    var f=document.fields,topic=stringField(f,'topicKey'),slot=stringField(f,'slotId');
    var uid=stringField(f,'studentId');
    if(!topicPattern.test(topic)||!checkpointSlots[slot]||!uid)return null;
    var c=f.confidence&&f.confidence.integerValue;
    var confidence=c!=null?Number(c):null;
    if(!Number.isInteger(confidence)||confidence<1||confidence>5)confidence=null;
    return {
      studentId:uid,tenantId:stringField(f,'tenantId'),
      courseId:stringField(f,'courseId'),sectionId:stringField(f,'sectionId'),
      topicKey:topic,slotId:slot,text:stringField(f,'text'),
      confidence:confidence,
      updatedAt:f.updatedAt&&f.updatedAt.timestampValue||'',
      completionState:'backup-snapshot'
    };
  }
  function makeQuery(topic){
    if(!topicPattern.test(topic))throw new Error('Invalid topic key');
    return {structuredQuery:{
      from:[{collectionId:'responses'}],
      select:{fields:['tenantId','studentId','courseId','sectionId','topicKey','slotId','text','confidence','updatedAt']
        .map(function(fieldPath){return {fieldPath:fieldPath};})},
      where:{fieldFilter:{field:{fieldPath:'topicKey'},op:'EQUAL',value:{stringValue:topic}}}
    }};
  }
  function makeReader(o){
    if(!o||typeof o.getToken!=='function'||typeof o.fetchImpl!=='function')throw new Error('getToken and fetchImpl are required');
    if(!/^[a-z0-9-]{3,64}$/.test(o.projectId||'')||!/^[a-z0-9-]{1,32}$/.test(o.tenantId||''))
      throw new Error('Invalid Firebase project or tenant');
    var base=(o.apiBase||'https://firestore.googleapis.com/v1').replace(/\/$/,'');
    var url=base+'/projects/'+encodeURIComponent(o.projectId)+'/databases/(default)/documents/tenants/'+
      encodeURIComponent(o.tenantId)+':runQuery';
    return {readTopic:async function(topic,section){
      var body=JSON.stringify(makeQuery(topic)),token=await o.getToken();
      if(typeof token!=='string'||!token)throw new Error('Teacher authentication required');
      // REST runQuery is an authenticated read, despite its HTTP POST method.
      var r=await o.fetchImpl(url,{
        method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},
        body:body,cache:'no-store',credentials:'omit'
      });
      if(!r.ok)throw new Error('Firestore read failed ('+r.status+')');
      var data=await r.json();
      if(!Array.isArray(data))throw new Error('Unexpected Firestore response');
      return data.map(function(x){return normalize(x.document);}).filter(function(x){
        // A sectionId filter is UI convenience, NOT a security boundary.
        return x&&x.tenantId===o.tenantId&&x.courseId==='apwh'&&x.topicKey===topic&&(!section||x.sectionId===section);
      });
    }};
  }
  function labelsFor(rows){
    var ids=Array.from(new Set(rows.map(function(x){return x.studentId;}))).sort(),labels=Object.create(null);
    ids.forEach(function(uid,i){labels[uid]='Student '+String(i+1).padStart(2,'0');});
    return labels;
  }
  function coverage(rows){
    return ['checkpoint-one-response','checkpoint-two-response'].map(function(slotId){
      var items=rows.filter(function(x){return x.slotId===slotId;});
      return {slotId:slotId,backedUpRecords:items.length,nonemptySnapshots:items.filter(function(x){return !!x.text.trim();}).length};
    });
  }
  return {normalize:normalize,makeQuery:makeQuery,makeReader:makeReader,labelsFor:labelsFor,coverage:coverage};
});
