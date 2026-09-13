/* Topic 2.2 production overrides: durable reconstruction assets + premium documentary clips. */
(function(){
  'use strict';
  const T = window.BEHISTORICAL_TEACHING;
  if (!T || !Array.isArray(T.slides)) return;

  const RAW = 'https://raw.githubusercontent.com/JeffAndersonLogic/ap-world-history/main/assets/images/reconstructions/';
  const reconstructions = {
    mountedArchers: RAW + 'topic-2-2-mounted-archers.webp?v=production-v4',
    yamRelay: RAW + 'topic-2-2-yam-relay.webp?v=production-v4',
    protectedCaravan: RAW + 'topic-2-2-protected-caravan.webp?v=production-v4'
  };

  if (T.slides[4]) {
    T.slides[4].kind = 'reconstruction';
    T.slides[4].visual = { url: reconstructions.mountedArchers, alt: 'Historical reconstruction of coordinated Mongol mounted archers on the steppe', credit: 'Historical reconstruction · AI generated' };
  }
  if (T.slides[11]) {
    T.slides[11].kind = 'reconstruction';
    T.slides[11].visual = { url: reconstructions.yamRelay, alt: 'Historical reconstruction of a mounted Mongol courier approaching a Yam relay station', credit: 'Historical reconstruction · AI generated' };
  }
  if (T.slides[15]) {
    T.slides[15].kind = 'reconstruction';
    T.slides[15].visual = { url: reconstructions.protectedCaravan, alt: 'Historical reconstruction of a protected caravan moving through Mongol-controlled territory', credit: 'Historical reconstruction · AI generated' };
  }

  // Crash Course is intentionally removed from the live 2.2 teaching sequence.
  if (T.slides[7]) {
    T.slides[7].title = 'How does Temüjin become Chinggis Khan?';
    T.slides[7].video = { youtubeId: 'nMJkWvEnuDU', start: 0, end: 95, label: 'National Geographic · The Rise of Genghis Khan (2026)' };
    T.slides[7].footer = 'Watch for rivalry, survival, unification, and the making of political authority.';
    T.slides[7].notes = { minutes: 2, land: ['Use this as a cinematic reset after the conquest system. National Geographic frames Temüjin’s rise through rivalry, defeat, recovery, and consolidation rather than as a list of military tricks.'], ask: 'What is changing about Temüjin’s power as he moves from survivor to ruler?', listenFor: 'Alliance-building, consolidation, loyalty, control of rival groups, and political authority.' };
  }

  if (T.slides[13]) {
    T.slides[13].title = 'What happens when the founder dies?';
    T.slides[13].video = { youtubeId: 'PdFwMDuAnS4', start: 12807, end: 12892, label: 'Fall of Civilizations · The Mongols: Terror of the Steppe (2025) · Succession' };
    T.slides[13].footer = 'Watch for succession, regional interests, and the problem of holding one empire together.';
    T.slides[13].notes = { minutes: 2, land: ['This clip begins at the documentary’s Succession chapter. Use it to make fragmentation a governance problem, not just a map fact.'], ask: 'Why does succession become more dangerous as the empire grows?', listenFor: 'Competing branches of the family, regional power bases, distance, and different political interests.' };
  }

  if (T.slides[17]) {
    T.slides[17].title = 'What did conquest cost?';
    T.slides[17].video = { youtubeId: 'PdFwMDuAnS4', start: 10962, end: 11047, label: 'Fall of Civilizations · The Mongols: Terror of the Steppe (2025) · Persia' };
    T.slides[17].footer = 'Use the evidence to complicate the idea of “Pax Mongolica.”';
    T.slides[17].notes = { minutes: 2, land: ['This clip begins at the documentary’s Persia chapter. Treat the destruction as historical evidence for the same empire that also intensified long-distance connection.'], ask: 'How can the same imperial system produce both greater connectivity and catastrophic local destruction?', listenFor: 'Effects vary by place and group; conquest and exchange can operate at the same time.' };
  }
})();
