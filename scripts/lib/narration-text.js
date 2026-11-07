'use strict';

/**
 * How a recorded narrator says a historian's numbers and names.
 *
 * Recorded eBook narration is made offline by a speech model, and a speech
 * model reads digits the way a calculator would. Tested on 2026-11-07 against
 * VoxCPM2 and its own text normalizer, the eBook as written would have been
 * narrated with:
 *
 *   - "the 1490s" as "one thousand four hundred and ninety seconds", because
 *     the normalizer reads a trailing s as the unit. The eBook has 294 decades.
 *   - "Mehmed II" as letters, and "Louis XIV" as whatever the model guessed.
 *     The eBook has 97 names with a regnal numeral.
 *   - "9600 BCE" as "nine thousand six hundred BCE", where a historian says
 *     "ninety-six hundred B C E", and "c. 1598" with the c. read as a letter.
 *
 * So this runs first, on the text the browser's narration extractor produced,
 * and the speech model's own normalizer runs after it on what is left (plain
 * years such as 1453, which it already reads as "fourteen fifty three").
 *
 * This changes how the words are spoken, never which words they are, the same
 * rule clean() follows in assets/js/behistorical-listen.js.
 *
 * ── The numeral list is reviewed, not inferred ──────────────────────────────
 *
 * "Abbas I" is "Abbas the First" and "Am I" is the pronoun. "Chapter VII" is
 * "Chapter Seven", "World War II" is "World War Two", and "Double V" is the name
 * of a campaign. No rule tells those apart, so every capitalized word followed
 * by a Roman numeral in the eBook is listed in NUMERALS below with how it is
 * said. scripts/test/narration-text.test.js fails the push when a chapter gains
 * one that is not listed, and the fix is one line here, made by a person.
 *
 * Used by scripts/audio/ (the narration generator) and by the push gate. It is
 * deliberately dependency-free.
 */

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function twoDigits(n) {
  if (n < 20) return ONES[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : '');
}

/**
 * A year as a historian says it: 1453 "fourteen fifty three", 1900 "nineteen
 * hundred", 1905 "nineteen oh five", 830 "eight thirty", 500 "five hundred",
 * 3500 "thirty five hundred", 2008 "two thousand eight".
 */
function spokenYear(n) {
  if (!Number.isInteger(n) || n < 0 || n > 9999) throw new RangeError(`not a year: ${n}`);
  if (n < 100) return twoDigits(n);
  if (n >= 2000 && n < 2010) return 'two thousand' + (n === 2000 ? '' : ' ' + ONES[n % 10]);
  if (n % 1000 === 0) return ONES[n / 1000] + ' thousand';
  const hi = Math.floor(n / 100);
  const lo = n % 100;
  const head = twoDigits(hi);
  if (lo === 0) return head + ' hundred';
  if (lo < 10) return head + ' oh ' + ONES[lo];
  return head + ' ' + twoDigits(lo);
}

/** A decade: 1490 "fourteen nineties", 1900 "nineteen hundreds", 830 "eight thirties". */
function spokenDecade(n) {
  const words = spokenYear(n).split(' ');
  const last = words.pop();
  words.push(last.endsWith('y') ? last.slice(0, -1) + 'ies' : last + 's');
  return words.join(' ');
}

const ORDINAL = {
  I: 'the First', II: 'the Second', III: 'the Third', IV: 'the Fourth', V: 'the Fifth',
  VI: 'the Sixth', VII: 'the Seventh', VIII: 'the Eighth', IX: 'the Ninth', X: 'the Tenth',
  XI: 'the Eleventh', XII: 'the Twelfth', XIII: 'the Thirteenth', XIV: 'the Fourteenth',
  XV: 'the Fifteenth', XVI: 'the Sixteenth'
};
const CARDINAL = {
  I: 'One', II: 'Two', III: 'Three', IV: 'Four', V: 'Five', VI: 'Six', VII: 'Seven',
  VIII: 'Eight', IX: 'Nine', X: 'Ten'
};

/**
 * Every capitalized word that is followed by a Roman numeral somewhere in the
 * eBook, and how the pair is said. 'ordinal' is a ruler ("Abbas the First"),
 * 'cardinal' is a count ("Chapter Seven"), 'leave' is not a numeral at all.
 */
const NUMERALS = {
  // Rulers and popes
  Abbas: 'ordinal', Abdulhamid: 'ordinal', Afonso: 'ordinal', Alexander: 'ordinal',
  Bayezid: 'ordinal', Cyrus: 'ordinal', Darius: 'ordinal', Edward: 'ordinal',
  Elizabeth: 'ordinal', Henry: 'ordinal', Innocent: 'ordinal', Ivan: 'ordinal',
  James: 'ordinal', Jayavarman: 'ordinal', Leopold: 'ordinal', Louis: 'ordinal',
  Mahmud: 'ordinal', Manuel: 'ordinal', Mehmed: 'ordinal', Menelik: 'ordinal',
  Murad: 'ordinal', Nicholas: 'ordinal', Peter: 'ordinal', Philip: 'ordinal',
  Prempeh: 'ordinal', Selim: 'ordinal', Suryavarman: 'ordinal',
  // Counts
  Chapter: 'cardinal', War: 'cardinal',
  // Not numerals: "Am I", "While X" (a variable), the Double V campaign
  Am: 'leave', While: 'leave', Double: 'leave'
};

const ROMAN = 'XVI|XIV|XIII|XII|XI|XV|X|VIII|VII|VI|IV|IX|V|III|II|I';
const NUMERAL_PAIR = new RegExp(`\\b([A-Z][a-z]+) (${ROMAN})\\b(?!\\.\\w)`, 'g');

/** Every [word, numeral] pair in a text, for the review test. */
function numeralPairs(text) {
  const out = [];
  let m;
  NUMERAL_PAIR.lastIndex = 0;
  while ((m = NUMERAL_PAIR.exec(text))) out.push([m[1], m[2]]);
  return out;
}

function eraWords(raw) {
  const n = Number(String(raw).replace(/,/g, ''));
  // Above 9999 a year is a count ("twelve thousand"), and the speech model's own
  // normalizer already says it that way.
  return n <= 9999 && /^\d{1,4}$/.test(String(raw)) ? spokenYear(n) : raw;
}

const ERA = { BCE: 'B C E', CE: 'C E', BC: 'B C', AD: 'A D' };

/**
 * Text as the narrator should say it. Idempotent, so running it twice (once in
 * the generator, once on a transcript in the word check) changes nothing more.
 */
function forSpeech(text) {
  let t = String(text);

  // Regnal and counting numerals, from the reviewed list only.
  t = t.replace(NUMERAL_PAIR, (whole, word, numeral) => {
    const how = NUMERALS[word];
    if (how === 'ordinal' && ORDINAL[numeral]) return `${word} ${ORDINAL[numeral]}`;
    if (how === 'cardinal' && CARDINAL[numeral]) return `${word} ${CARDINAL[numeral]}`;
    return whole;
  });

  // "c. 1598", "ca. 3500 BCE": the letter is not spoken.
  t = t.replace(/\b(?:c|ca)\.\s?(?=\d)/g, 'around ');

  // A range that ends in an era marker: both ends are years in that era.
  t = t.replace(/\b(\d{1,4}) (to|and) (\d{1,4}) (BCE|CE|BC|AD)\b(\.?)/g,
    (w, a, joiner, b, era, stop) => `${eraWords(a)} ${joiner} ${eraWords(b)} ${ERA[era]}${stop}`);

  // A single year with an era marker. The marker is spelled out as letters,
  // because the speech model's normalizer strips the periods from "B.C.E." and
  // then swallows the sentence's own full stop after "CE".
  t = t.replace(/\b(\d{1,3}(?:,\d{3})+|\d{1,4}) (BCE|CE|BC|AD)\b(\.?)/g,
    (w, num, era, stop) => `${eraWords(num)} ${ERA[era]}${stop}`);

  // Decades: "the 1490s". Without this the model says "ninety seconds".
  t = t.replace(/\b(\d{3,4})s\b/g, (w, num) => spokenDecade(Number(num)));
  t = t.replace(/\b(\d{3,4})'s\b/g, (w, num) => spokenDecade(Number(num)));

  return t;
}

module.exports = { forSpeech, spokenYear, spokenDecade, numeralPairs, NUMERALS };

// CLI: text on stdin, spoken form on stdout. The Python generator calls this so
// there is one implementation of these rules, not one per language.
if (require.main === module) {
  let input = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => { input += chunk; });
  process.stdin.on('end', () => {
    // --json: a JSON array of strings in, the same array spoken out, so the
    // narration generator can send a whole batch in one call.
    if (process.argv.includes('--json')) process.stdout.write(JSON.stringify(JSON.parse(input).map(forSpeech)));
    else process.stdout.write(forSpeech(input));
  });
}
