(() => {
  console.log('1.7 renderer config loaded');
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  console.log('stableImages before:',
    lesson.stableImages && lesson.stableImages.map);

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/Angkor_Wat_001.JPG',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wall_of_the_great_enclosure%2C_Great_Zimbabwe.JPG',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_itza.JPG',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maqamat_hariri.jpg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/Laon_cathedral_notre_dame_002.JPG',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/Biet_Giorgis%2C_Lalibela%2C_Ethiopia_(24076354516).jpg',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Angkor_Wat_006.JPG',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/Al-Aqsa_mosque_(8682155875).jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chichen_Itza_52.JPG',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Side-View_of_Notre_Dame_Cathedral.JPG'
  };

  console.log('stableImages after:',
    lesson.stableImages && lesson.stableImages.map);
})();
