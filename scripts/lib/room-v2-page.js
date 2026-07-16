'use strict';

function safeJson(value) {
  return JSON.stringify(value, null, 2).replace(/</g, '\\u003c');
}

function renderRoomPage(scenario) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>BeInTheRoom | ${scenario.title.replaceAll('*', '')} | BeHistorical</title>
  <link rel="stylesheet" href="../../assets/css/behistorical-brand-lock.css">
  <link rel="stylesheet" href="../../assets/css/behistorical-room-v2.css">
</head>
<body>
  <div id="room-app"></div>
  <script>window.BH_ROOM_SCENARIO = ${safeJson(scenario)};</script>
  <script src="../../assets/js/behistorical-room-v2.js"></script>
</body>
</html>
`;
}

module.exports = { renderRoomPage };
