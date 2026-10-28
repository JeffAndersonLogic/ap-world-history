'use strict';
const sync=require('../sync-config');
module.exports={tenantId:sync.tenantId,firebase:sync.firebase,sdkVersion:sync.sdkVersion,allowedDomains:sync.allowedDomains,assignmentId:'3.2-checkpoint-2',classId:'',analysisMode:'teacher-review',releaseState:'awaiting-class-setup',
 // AI rating help for real student work. Stays off until ZCS approves it in writing; then set
 // approved:true and approvalReference to who approved it and when, e.g. 'Dan Layton, email of
 // 2026-11-02'. See docs/class-pulse/README.md.
 aiAssist:{approved:false,approvalReference:''}};
