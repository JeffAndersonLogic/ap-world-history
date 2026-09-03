#!/usr/bin/env bash
# Renders the print packets in canvas/print/ to PDFs in canvas/.
# Run after scripts/build-canvas-packets.js.
#
# Chromium is looked up in the usual places; override with CHROME=/path/to/chrome.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [ -z "${CHROME:-}" ]; then
  for c in \
    /opt/pw-browsers/chromium-*/chrome-linux/chrome \
    "$(command -v google-chrome || true)" \
    "$(command -v chromium || true)" \
    "$(command -v chromium-browser || true)" \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  do
    [ -x "$c" ] && CHROME="$c" && break
  done
fi

if [ -z "${CHROME:-}" ] || [ ! -x "$CHROME" ]; then
  echo "No Chrome or Chromium found. Set CHROME=/path/to/chrome and re-run." >&2
  exit 1
fi

shopt -s nullglob
for src in "$ROOT"/canvas/print/*-print.html; do
  base="$(basename "$src" -print.html)"
  out="$ROOT/canvas/${base}-packet.pdf"
  "$CHROME" --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
    --run-all-compositor-stages-before-draw --virtual-time-budget=15000 \
    --print-to-pdf="$out" "file://$src" 2>/dev/null
  printf '  %-52s %s KB\n' "canvas/${base}-packet.pdf" "$(( $(wc -c <"$out") / 1024 ))"
done
