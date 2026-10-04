# Unit 1 visual atlas

The atlas is embedded above the topic cards on the Unit 1 hub. It opens to a world comparison and provides two regional views for each of seven topics. Locations and selected connections reveal explanatory notes immediately. There are no questions, submissions, scores, storage reads or writes, or changes to lesson modules.

Regional maps use the shared locally vendored Natural Earth geometry and accessible Unit 2 viewer. Frames and label positions are authored per view. Lines show schematic relationships, not itineraries, borders, or uniform cultural control. The comparison map has no intercontinental routes. Markers are selected examples across the period, not a snapshot of simultaneous states.

Content follows the Unit 1 CED spines recorded in `UNIT-1-DEEP-AUDIT.md`: Song governance, culture, and economy; Islamic states, belief communities, and scholarship; South and Southeast Asian belief and state formation; American state systems; Great Zimbabwe, Ethiopia, and Hausa states; European religion, decentralization, and agricultural labor; and comparison of state formation processes. Existing lesson and assessment audit findings remain outside this map-only change.

Earlier Song foundations, Champa rice transmission, Angkor Wat, Srivijaya, and earlier scholarship are qualified in the notes. Inca imperial expansion is located especially in the fifteenth century. Canonical lesson source material, attribution, and adaptation notes are reproduced in a collapsed reference panel. Topic 1.4's Bernal Diaz account describes 1519, after this unit's period; it is retrospective evidence, not a contemporary c. 1200 to c. 1450 account.

Author content in `scripts/lib/unit1-atlas-content.js`, then run `node scripts/build-unit1-atlas.js`. The generator imports canonical lesson sources, not a separate source transcription. Run `npm test` and `node scripts/run-tests.js browser --strict`. Tests include regional marker bounds, real connection clicks, keyboard focus, touch, hub resizing, mobile overflow, and negative controls. The Unit 2 suite protects the shared viewer's original behavior.
