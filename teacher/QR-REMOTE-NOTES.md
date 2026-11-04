# BeHistorical iPad Remote QR Pairing

The laptop and the iPad talk through BeHistorical's own Firebase project (since
2026-11-04). The old public relay, ntfy.sh, allowed 250 messages a day for the
whole school's internet address, which is why the remote stopped working later in
the day. The full explanation is under "The two-device connection" in
`docs/TEACHING-OS.md`.

## Teacher workflow
1. Open `teacher/remote-host.html?topic=X-X` on the Windows laptop.
2. The first time only, press **Sign In** and choose your `zcs.k12.in.us` staff
   account. The laptop remembers it after that.
3. The QR card shows the code once the session has started.
4. Scan the QR code with the iPad Camera. Safari opens `teacher/ipad-remote.html`
   with the topic and session already in the address.
5. The iPad connects by itself. No sign-in on the iPad.
6. Use **Open Projection** on the laptop to keep the student-facing presentation on
   the projector.

## If it will not connect
- Press **Retry Connection** on either device.
- If Firebase itself is unreachable, the QR card has a link to **use the backup
  relay** (ntfy.sh). The new QR code carries that choice to the iPad. The backup
  still runs out later in the day.
- A Bluetooth presentation clicker on the laptop needs no internet at all and is a
  good thing to keep in the desk.

The six-character session label and Copy iPad Link remain as fallbacks to the QR.
