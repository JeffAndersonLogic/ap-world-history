# BeHistorical iPad Remote QR Pairing

The laptop remote host now generates a QR code after its PeerJS pairing ID is ready.

## Teacher workflow
1. Open `teacher/remote-host.html?topic=X-X` on the Windows laptop.
2. The QR pairing card opens automatically.
3. Scan the QR code with the iPad Camera app.
4. Safari opens `teacher/ipad-remote.html` with both the topic and pairing code embedded in the URL.
5. The iPad remote auto-connects; no URL or code entry is required.
6. Use **Open Projection** on the laptop to keep the student-facing presentation on the projector.

The six-character pairing code and Copy Link controls remain as fallbacks.