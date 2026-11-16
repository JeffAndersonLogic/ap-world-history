'use strict';

// The page shell for a live-mode BeInTheRoom scenario. See
// assets/js/behistorical-room-live.js for what live mode is.

function safeJson(value) {
  return JSON.stringify(value, null, 2).replace(/</g, '\\u003c');
}

function renderLiveRoomPage(scenario) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>BeInTheRoom | ${scenario.title.replaceAll('*', '')} | BeHistorical</title>
  <link rel="stylesheet" href="../../assets/css/behistorical-brand-lock.css">
  <link rel="stylesheet" href="../../assets/css/behistorical-room-live.css">
</head>
<body>
  <div id="room-app"></div>
  <script>window.BH_LIVE_ROOM = ${safeJson(scenario)};</script>
  <script src="../../assets/js/behistorical-classroom.js"></script>
  <script src="../../assets/js/behistorical-beintheroom-capture.js"></script>
  <script src="../../assets/js/behistorical-room-live.js"></script>
</body>
</html>
`;
}

module.exports = { renderLiveRoomPage, safeJson };
