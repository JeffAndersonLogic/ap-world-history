'use strict';

const fs = require('fs');

const ref = topic => `assets/data/lesson-${topic}-renderer-config.js`;

function stripDuplicateEvidenceLab(file) {
  let text = fs.readFileSync(file, 'utf8');
  const needle = 'lesson.evidenceLab';
  const starts = [];
  let pos = 0;
  while ((pos = text.indexOf(needle, pos)) !== -1) {
    starts.push(pos);
    pos += needle.length;
  }
  if (starts.length <= 1) return;
  const last = starts[starts.length - 1];
  const images = text.indexOf('lesson.images', last);
  if (images < 0) throw new Error(`No lesson.images after duplicate evidenceLab in ${file}`);
  text = text.slice(0, last) + text.slice(images);
  fs.writeFileSync(file, text);
}

function replaceImages(file, body) {
  let text = fs.readFileSync(file, 'utf8');
  const start = text.lastIndexOf('lesson.images');
  const close = text.lastIndexOf('})();');
  if (start < 0 || close < 0 || close <= start) throw new Error(`Could not replace evidence pool in ${file}`);
  text = text.slice(0, start) + `lesson.images = ${body};\n` + text.slice(close);
  fs.writeFileSync(file, text);
}

for (const topic of ['2-2','2-3','2-4','2-5','2-7']) stripDuplicateEvidenceLab(ref(topic));

replaceImages(ref('2-2'), `[
  { title: 'Mongol Empire and Khanates', url: '../assets/images/instructional-maps/topic-2-2.svg', sourceUrl: '../assets/images/instructional-maps/topic-2-2.svg', caption: 'Secondary geographic evidence. The map reconstructs the enormous territorial reach of Mongol rule and the later division into regional khanates.', prompt: 'NOTICE the scale and later political divisions. What can you INFER about state building, governing distance, and fragmentation? What can a map not establish about how Mongol rule worked locally?' },
  { title: 'Genghis Khan, Yuan-Era Portrait', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg', caption: 'Political-memory evidence. A later Yuan portrait represents Genghis Khan as founder of the Mongol imperial tradition.', prompt: 'NOTICE how the founder is represented. What can you INFER about later Mongol political memory or legitimacy? Why is this weak evidence for his actual appearance or battlefield methods?' },
  { title: 'Silk Roads Under Continental Empire', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Silk_route.jpg', caption: 'Secondary network evidence. A modern map reconstructs overland routes that crossed territories brought under Mongol control.', prompt: 'NOTICE how many routes crossed Mongol-ruled Eurasia. What can you INFER about why political protection and relay systems mattered? What does the map not prove about actual trade volume?' },
  { title: 'Transfer Evidence — Greco-Islamic Medical Knowledge', label: 'CED illustrative example · Topic 2.2', sourceText: ['Mongol-era contacts and conflicts helped connect scholarly traditions across Eurasia.', 'Greco-Islamic medical knowledge reached western Europe through wider patterns of interregional contact and transfer.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What does this example show about the relationship between political contact and knowledge transfer? What additional primary evidence would you want before making a claim about the exact route or people responsible?' },
  { title: 'Transfer Evidence — Numbering Systems', label: 'CED illustrative example · Topic 2.2', sourceText: ['Interregional contacts helped numerical knowledge circulate across Afro-Eurasia.', 'Numbering systems used in the Islamic world spread into Europe as part of broader mathematical and commercial exchange.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'How could a shared or more efficient numbering system affect scholarship or commerce? Why should you avoid claiming that Mongol rule alone caused this transfer?' },
  { title: 'Transfer Evidence — Uyghur Script', label: 'CED illustrative example · Topic 2.2', sourceText: ['Mongol rulers borrowed administrative practices from peoples they conquered or incorporated.', 'The Mongols adopted the Uyghur script for writing Mongolian, illustrating cultural borrowing within the empire.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What does adoption of the Uyghur script reveal about how conquerors governed? How does this complicate a story of conquest as one-way cultural imposition?' }
]`);

replaceImages(ref('2-3'), `[
  { title: 'Indian Ocean and Monsoon Geography', url: '../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg', sourceUrl: '../assets/images/maps/foundations-4/indian-ocean-monsoon-trade.jpg', caption: 'Secondary environmental evidence. A classroom map shows seasonal wind directions and major maritime routes linking East Africa, Arabia, South Asia, Southeast Asia, and China.', prompt: 'NOTICE the reversal of wind directions. What can you INFER about round-trip voyage planning? What can the arrows explain about timing that they cannot prove about trade volume?' },
  { title: 'Borobudur Ship Relief', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur%20ship.JPG', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Borobudur_ship.JPG', caption: 'Maritime-technology baseline. This ship relief from Java predates c. 1200 and documents an established seafaring tradition in the Indian Ocean world.', prompt: 'NOTICE the hull, rigging, steering, or outrigger features. What can you INFER about maritime capability before c. 1200? How does that contextualize later intensification without proving it by itself?' },
  { title: 'Song Celadon Found at Kilwa', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Song_dynasty_bowl,_stoneware_with_celadon_glaze,_Honolulu_Museum_of_Art_3752.1.JPG', caption: 'Material evidence. Chinese celadon of the type produced under the Song has been excavated at Kilwa on the East African coast, thousands of kilometers from its place of manufacture.', prompt: 'NOTICE the object’s place of origin and place of discovery. What can you INFER about exchange across the Indian Ocean? What can one imported object not prove about how many merchants traveled the entire route?' },
  { title: 'State-Growth Evidence — Port States', label: 'CED historical development · Topic 2.3', sourceText: ['Indian Ocean exchange fostered the growth of states and commercial centers around the basin.', 'Illustrative examples include Swahili Coast city-states, Gujarat, and the Sultanate of Malacca.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What common economic opportunity links these otherwise different states? What additional evidence would you need to explain why one port grew faster than another?' },
  { title: 'Diaspora Evidence — Merchant Communities', label: 'CED illustrative examples · Topic 2.3', sourceText: ['Arab and Persian merchant communities developed in East Africa.', 'Chinese merchants settled in Southeast Asia, while Malay communities operated across the Indian Ocean basin.'], caption: 'CED-aligned evidence of diasporic communities and reciprocal cultural influence.', prompt: 'How could a permanent merchant community lower the cost or risk of long-distance exchange? What kinds of cultural evidence would help demonstrate reciprocal influence rather than simple settlement?' },
  { title: 'Zheng He — State-Backed Maritime Contact', label: 'CED illustrative example · Topic 2.3', sourceText: ['The Ming state sponsored the large maritime expeditions associated with Zheng He in the early fifteenth century.', 'The voyages linked China to ports across Southeast Asia, South Asia, the Persian Gulf, Arabia, and East Africa.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'What does state sponsorship add to the story of a network usually driven by merchants? Why should Zheng He be treated as evidence of intensified contact rather than as the origin of Indian Ocean trade?' }
]`);

replaceImages(ref('2-5'), `[
  { title: 'Great Buddha at the Mogao Caves, Dunhuang', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Buddha,_Cave_96,_Mogao_Caves.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Great_Buddha,_Cave_96,_Mogao_Caves.jpg', caption: 'Religious-diffusion evidence. The Mogao cave complex at the Silk Road oasis of Dunhuang preserves centuries of Buddhist patronage along an overland exchange corridor.', prompt: 'NOTICE the scale and religious imagery. What can you INFER about Buddhism’s presence at a trade-route oasis? What evidence would you need to prove how merchants, rulers, and monks each contributed to diffusion?' },
  { title: 'Jiaozi Paper Money in Song China', url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jiao%20zi.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jiao_zi.jpg', caption: 'Technology-origin evidence. Paper and printing were established technologies in China before their wider diffusion westward.', prompt: 'NOTICE the sophisticated use of paper. What does this establish about the technology at its eastern origin? What does it not prove about the route by which papermaking later spread?' },
  { title: 'Urban-Fortunes Evidence — Cities Rise and Decline', label: 'CED historical development · Topic 2.5', sourceText: ['The fate of cities varied as productivity, trade routes, political power, and conflict changed.', 'Some places experienced increased urbanization while others declined as networks and political conditions shifted.'], caption: 'CED-aligned historical-development anchor, paraphrased rather than quoted from a primary source.', prompt: 'Why can the same era of expanding interregional trade produce growth in some cities and decline in others? What city-level evidence would you seek to test the claim?' },
  { title: 'Travel-Account Evidence — A More Connected World', label: 'CED illustrative examples · Topic 2.5', sourceText: ['More travelers moved through intensified exchange networks and left written accounts of distant societies.', 'Ibn Battuta, Marco Polo, and Margery Kempe provide three different examples of travel writing from the wider period.'], caption: 'CED-aligned travel-account anchor. The wording is a synthesis, not a quotation from any traveler.', prompt: 'How does the growth of travel writing itself provide evidence of connectivity? What limits would you place on using one traveler’s account to generalize about an entire society?' }
]`);

for (const topic of ['2-1','2-2','2-3','2-4','2-5','2-6','2-7']) {
  const file = ref(topic);
  const text = fs.readFileSync(file, 'utf8');
  const evidenceCount = (text.match(/lesson\.evidenceLab/g) || []).length;
  const imagesCount = (text.match(/lesson\.images/g) || []).length;
  if (evidenceCount !== 1) throw new Error(`${topic}: expected one evidenceLab assignment, found ${evidenceCount}`);
  if (imagesCount !== 1) throw new Error(`${topic}: expected one lesson.images assignment, found ${imagesCount}`);
}
