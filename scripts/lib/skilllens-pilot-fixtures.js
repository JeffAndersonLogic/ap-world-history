'use strict';
// Authored examples for interface development, NEVER an evaluation holdout.
// Each judgment is deliberately explicit; this file performs no assessment.
module.exports = function fixtures(contract) {
  const responses = [
    ['S01', 'Sailors timed departures and returns around the seasonal reversal of monsoon winds. A compass showed direction, while larger ships carried more cargo. Planned voyages and these tools made long-distance trips more reliable and increased the amount of goods traded.'],
    ['S02', 'The winds switched with the seasons, so merchants waited for favorable winds to go out and return. They used a compass and an astrolabe. This helped trade grow.'],
    ['S03', 'Monsoon winds blew toward India all year, so ships could always go the same way. A compass helped sailors find direction and larger ships could carry more goods. More cargo meant more trade.'],
    ['S04', 'Merchants waited until the seasonal winds changed before sailing home. A direction-finding compass helped them stay on course; bigger hulls held more merchandise. By planning the trip around the winds and navigating with the compass, traders could make reliable journeys, while the bigger ships raised trade volume.'],
    ['S05', 'Monsoons helped boats. The compass told direction. There was also an astrolabe. Trade was important.'],
    ['S06', 'Merchants used seasonal wind reversals to plan outward and return trips, making regular trade journeys possible. Compasses controlled the winds and astrolabes made ships go faster.'],
    ['S07', 'They knew when to go. Better tools helped.'],
    ['S08', 'Knowing which season brought favorable monsoon winds allowed merchants to plan voyages out and back. A compass indicated direction and an astrolabe helped estimate latitude, making it easier to navigate across open water. Planned sailings and improved navigation allowed reliable exchange over longer distances.'],
    ['S09', 'Seasonal monsoon reversals let traders plan their departures and return voyages. Bigger ships held more cargo, so each successful trip moved more goods. Combining the wind schedule with that capacity expanded trade.'],
    ['S10', 'Monsoons changed direction seasonally. Merchants used compasses to find direction and larger ships to carry more cargo, increasing trade volume.'],
    ['S11', ''], ['S12', '']
  ].map(([id,text]) => ({id, label:'Synthetic student ' + id.slice(1), text, submission:id === 'S12' ? 'missing' : 'submitted', revision:1}));
  const analyses = [];
  function add(id, entries) {
    const response = responses.find(r => r.id === id);
    analyses.push({responseId:id, responseText:response.text, contractId:contract.contractId,
      provenance:{kind:'authored-synthetic', author:'Pilot fixture authors', version:'v1'},
      criteria:entries.map(([band, quote, reason],index) => {
        const start = quote ? response.text.indexOf(quote) : -1;
        if (quote && start < 0) throw new Error('Fixture quote missing: ' + id);
        return {criterionId:contract.criteria[index].id, band, reason, evidence:quote ? [{start,end:start+quote.length,quote}] : []};
      })});
  }
  add('S01', [
    ['meets','timed departures and returns around the seasonal reversal','Links seasonal reversal to scheduling both directions.'],
    ['meets','A compass showed direction, while larger ships carried more cargo.','Explains two distinct functions.'],
    ['meets','Planned voyages and these tools made long-distance trips more reliable and increased the amount of goods traded.','Connects the environmental and technological mechanisms to reliability and volume.']
  ]);
  add('S02', [
    ['meets','winds switched with the seasons, so merchants waited for favorable winds to go out and return','Explains the timing of outbound and return journeys.'],
    ['partial','They used a compass and an astrolabe.','Names two tools but does not explain either function.'],
    ['partial','This helped trade grow.','The preceding wind explanation gives a mechanism; the technological connection remains asserted.']
  ]);
  add('S03', [
    ['not_yet','Monsoon winds blew toward India all year','Contradicts the seasonal reversal needed for planning return voyages.'],
    ['meets','A compass helped sailors find direction and larger ships could carry more goods.','Both functions are historically appropriate despite the separate wind error.'],
    ['partial','More cargo meant more trade.','A valid cargo-to-volume link is present, but the environmental explanation is incorrect.']
  ]);
  add('S04', [
    ['meets','waited until the seasonal winds changed before sailing home','Accept the return-voyage wording as evidence of timing.'],
    ['meets','A direction-finding compass helped them stay on course; bigger hulls held more merchandise.','Varied wording describes direction and cargo capacity.'],
    ['meets','By planning the trip around the winds and navigating with the compass, traders could make reliable journeys, while the bigger ships raised trade volume.','Explains environmental and technological causes of reliability and volume.']
  ]);
  add('S05', [
    ['partial','Monsoons helped boats.','Identifies the environmental factor without explaining its seasonal use.'],
    ['partial','The compass told direction. There was also an astrolabe.','One function is explained; the second technology is only named.'],
    ['not_yet','Trade was important.','This is a statement of importance, not an explanation of growth.']
  ]);
  add('S06', [
    ['meets','seasonal wind reversals to plan outward and return trips','Explains environmental knowledge accurately.'],
    ['not_yet','Compasses controlled the winds and astrolabes made ships go faster.','Both stated tool functions are incorrect.'],
    ['partial','making regular trade journeys possible','The environmental mechanism is valid; the technological mechanism is not.']
  ]);
  add('S07', [
    ['review',null,'Too little detail to determine whether “when” refers to seasonal wind reversal. Ask the student to explain.'],
    ['review',null,'“Better tools” does not identify technologies or their functions. Ask for clarification before assigning a band.'],
    ['review',null,'The causal claim is too vague to interpret fairly.']
  ]);
  add('S08', [
    ['meets','plan voyages out and back','The full sentence connects timing to seasonally favorable winds.'],
    ['meets','A compass indicated direction and an astrolabe helped estimate latitude','Two navigation functions are explained.'],
    ['meets','Planned sailings and improved navigation allowed reliable exchange over longer distances.','Explicitly connects both causes to reliability and range.']
  ]);
  add('S09', [
    ['meets','Seasonal monsoon reversals let traders plan their departures and return voyages.','Explains wind knowledge and scheduling.'],
    ['partial','Bigger ships held more cargo','Explains one appropriate technology; the prompt requires two.'],
    ['meets','Combining the wind schedule with that capacity expanded trade.','Wind timing and the named technology are causally connected to volume. The missing second technology belongs in its own criterion.']
  ]);
  return {synthetic:true, fixtureVersion:'v1', classLabel:'Jeff’s sample AP World class', responses, analyses};
};
