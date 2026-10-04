# Unit 2 visual Network Atlas

The atlas is a visual reference on the Unit 2 hub, not a lesson module or assignment. All three networks appear immediately. Students click or tap a route, numbered location, or seasonal-wind connection to read information in one panel. Topic and view controls cover 2.1 to 2.7. No reveal gate, questions, response boxes, notebook, scoring, or submission workflow remains.

The hub embeds the same graphic served by `unit-2/network-atlas.html`. Its height adjusts to the content, including mobile layouts and expanded references. A standalone link remains available. The Map & Geography modules retain their original maps and prompts; atlas links and import wiring have been removed from them.

## Historical scope

The graphic uses Natural Earth coastlines and selected approximate corridors, not political boundaries or exact itineraries. Topic views preserve the course's commercial, political, cultural, and environmental distinctions. Monsoon arrows describe the Arabian Sea seasonal pattern only. Crop views use regional markers without invented voyage arrows. The plague connections do not establish one origin or every transmission route. Older origins, later expansion, early-fifteenth-century Malacca, and Zheng He's 1405 to 1433 chronology remain explicit. The Manding heartland marker is a broad regional example, not Niani or a verified capital site.

The October 4 accuracy corrections route the shared Indian Ocean corridor around northern Sumatra and through the Strait of Malacca, relabel the southern Mali regional marker, and date Bar Sauma's conversation with the Roman cardinals to his first visit in 1287. The source date is corrected in the canonical course data and propagated through the atlas generator. The maps remain selected references rather than complete inventories of every CED example.

Place and route notes are labeled course explanations. Optional historical sources, attribution, adaptation notes, and links are generated from the canonical course source objects, not maintained as a second transcription. The full topic lesson remains the reference for complete coverage.

## Interaction and privacy

The visual has no dependency on local or session storage and makes no changes to existing student writing. Previously saved atlas records and Map Check responses are left untouched. There is no new Canvas capture slot, Firestore client, teacher database, or analytics endpoint.

Routes have wide click targets; locations have 44-pixel targets. Where location targets overlap, taps select the nearest marker rather than whichever target was drawn last. Map targets support Enter and Space. Native location menus, clickable connection legends, and the text map provide equivalent access without relying on hover or color alone. Keyboard focus is preserved when a map selection redraws the graphic.

The embedded height message is accepted only from the expected iframe, the same origin, and a bounded numeric height. It carries dimensions only.

## Authoring and checks

Edit geographic selections and explanatory notes in `scripts/lib/unit2-atlas-content.js`, then run `node scripts/build-unit2-atlas.js`. Generated data contains no assignment fields. `--check` detects drift.

Offline checks cover all seven views, explanatory route notes, canonical sources, the absence of assignment controls/storage writes, and hub-only integration. Browser checks exercise immediate display, actual route and location clicks, keyboard selection, seasonal reversal, topic views, touch interaction, retained student data, blocked storage, responsive layouts, and embedded height changes. Negative controls must expose a reintroduced writing box and a removed map-click handler.
