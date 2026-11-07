#!/usr/bin/env python3
"""Record eBook sections in the BeHistorical narrator's voice, check every word,
and file each recording under its section's content fingerprint.

    python3 -I scripts/audio/narrate.py --sections sections.json \
        --audio-repo ../behistorical-audio [--limit 3] [--device cuda]

Input is the JSON written by scripts/audio/extract-narration.js. Output:

  - <audio-repo>/ebook/<volume>/<fingerprint>.mp3, one file per section
  - a new entry in scripts/audio/recordings.json for each section that passed
  - then run `node scripts/build-ebook-audio.js` to regenerate the list the
    player reads (this script does not touch assets/ itself)

Resumable: a section whose fingerprint is already in recordings.json, or whose
MP3 already exists, is skipped, so an interrupted run picks up where it stopped.

The rules this follows, and why:

1. One voice, locked. VoxCPM2 can design a voice from a description, but two
   generations from the same description are different people (measured
   2026-11-07: 0.29 to 0.58 on a speaker-similarity scale where the same person
   scores about 0.9). So every chunk is generated as a continuation of one fixed
   reference recording, scripts/audio/voice/narrator-a.flac, which is the take
   Jeff chose. Two locked generations measured 0.97.

2. Every chunk is checked by ear, by machine. Whisper transcribes each chunk,
   and the transcript is compared word by word with what was meant to be said,
   after both pass through the same text rules. A chunk that drops or adds a run
   of words is generated again with a new seed, up to RETRIES times. A section
   with a chunk that never passes is NOT recorded: it stays on the browser
   voice, which reads the right words, and the run reports it for a person to
   look at. A recording that skips a sentence sounds authoritative and is wrong,
   which is worse than no recording.

3. Reproducible. Each chunk's seed comes from the fingerprint and the chunk's
   position, so rerunning a section produces the same audio.

Needs: pip install voxcpm faster-whisper soundfile numpy, plus ffmpeg and node.
CPU works and is slow (about 3.4 seconds of work per second of audio, measured);
a graphics card is the practical way to record whole volumes.
"""

import argparse
import datetime
import difflib
import json
import os
import re
import subprocess
import sys
import tempfile

import numpy as np
import soundfile as sf

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
RECORDINGS = os.path.join(ROOT, "scripts", "audio", "recordings.json")
VOICE_WAV = os.path.join(HERE, "voice", "narrator-a.flac")
VOICE_TXT = os.path.join(HERE, "voice", "narrator-a.txt")
FIXER = os.path.join(ROOT, "scripts", "lib", "narration-text.js")

RETRIES = 3            # attempts per chunk, including the first
GAP_SECONDS = 0.35     # silence between chunks
MIN_MATCH = 0.85       # share of intended words the transcript must contain
MAX_MISSING_RUN = 3    # longest run of intended words allowed to go unheard
BITRATE = "48k"        # mono speech; the whole eBook at this rate is under 1 GB
FINGERPRINT = re.compile(r"^[0-9a-f]{16}$")
VOLUME = re.compile(r"^[a-z0-9-]+$")


def spoken(texts):
    """The history rules from scripts/lib/narration-text.js, one implementation."""
    out = subprocess.run(["node", FIXER, "--json"], input=json.dumps(texts),
                         capture_output=True, text=True, check=True).stdout
    return json.loads(out)


class Checker:
    """Did the narrator say what it was meant to say? Words, not sound."""

    def __init__(self, normalizer, device):
        from faster_whisper import WhisperModel
        self.whisper = WhisperModel("small.en", device=device,
                                    compute_type="int8" if device == "cpu" else "float16")
        self.normalizer = normalizer

    def words(self, text):
        text = self.normalizer.normalize(text).lower().replace("-", " ")
        return re.sub(r"[^a-z0-9' ]", " ", text).split()

    def check(self, audio, sr, intended):
        if sr != 16000:
            audio = subprocess.run(
                ["ffmpeg", "-loglevel", "error", "-f", "f32le", "-ar", str(sr), "-ac", "1", "-i", "-",
                 "-ar", "16000", "-f", "f32le", "-"],
                input=audio.astype(np.float32).tobytes(), capture_output=True, check=True).stdout
            audio = np.frombuffer(audio, np.float32)
        segments, _ = self.whisper.transcribe(audio, beam_size=5, language="en")
        heard_raw = " ".join(s.text for s in segments)
        want = self.words(intended)
        got = self.words(spoken([heard_raw])[0])
        sm = difflib.SequenceMatcher(None, want, got, autojunk=False)
        matched = sum(b.size for b in sm.get_matching_blocks())
        missing_run = max([a2 - a1 for op, a1, a2, b1, b2 in sm.get_opcodes() if op in ("delete", "replace")] or [0])
        extra_run = max([b2 - b1 for op, a1, a2, b1, b2 in sm.get_opcodes() if op in ("insert", "replace")] or [0])
        share = matched / max(1, len(want))
        ok = share >= MIN_MATCH and missing_run <= MAX_MISSING_RUN and extra_run <= MAX_MISSING_RUN + 2
        return ok, {"matched": matched, "of": len(want), "missing_run": missing_run,
                    "extra_run": extra_run, "heard": heard_raw.strip()}


def load_records():
    with open(RECORDINGS, encoding="utf-8") as f:
        return json.load(f)


def save_records(data):
    with open(RECORDINGS, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")


def to_mp3(audio, sr, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
        sf.write(tmp.name, audio, sr)
    try:
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", tmp.name, "-ac", "1", "-ar", "24000",
                        "-b:a", BITRATE, path + ".part.mp3"], check=True)
        os.replace(path + ".part.mp3", path)      # never leave a half-written file under the real name
    finally:
        os.unlink(tmp.name)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--sections", required=True, help="JSON from scripts/audio/extract-narration.js")
    ap.add_argument("--audio-repo", required=True, help="checkout of the behistorical-audio repository")
    ap.add_argument("--limit", type=int, default=0, help="record at most this many sections")
    ap.add_argument("--device", default="cpu", help="cpu or cuda")
    args = ap.parse_args()

    import torch
    from voxcpm import VoxCPM
    from voxcpm.utils.text_normalize import TextNormalizer

    torch.set_num_threads(os.cpu_count() or 4)
    with open(args.sections, encoding="utf-8") as f:
        sections = json.load(f)
    records = load_records()
    voice_text = open(VOICE_TXT, encoding="utf-8").read().strip()

    todo = []
    for s in sections:
        if not FINGERPRINT.match(s["hash"]) or not VOLUME.match(s["volume"]):
            sys.exit(f"refusing malformed section entry: {s.get('section')}")
        mp3 = os.path.join(args.audio_repo, "ebook", s["volume"], s["hash"] + ".mp3")
        if s["hash"] in records["recordings"] or os.path.exists(mp3):
            continue
        todo.append((s, mp3))
    if args.limit:
        todo = todo[: args.limit]
    print(f"{len(todo)} section(s) to record", flush=True)
    if not todo:
        return

    model = VoxCPM.from_pretrained("openbmb/VoxCPM2", load_denoiser=False, optimize=args.device != "cpu",
                                   device=args.device)
    sr = model.tts_model.sample_rate
    normalizer = TextNormalizer()
    checker = Checker(normalizer, args.device)
    gap = np.zeros(int(sr * GAP_SECONDS), dtype=np.float32)
    refused = []

    for s, mp3 in todo:
        parts, notes, failed = [], [], False
        started = datetime.datetime.now()
        for i, chunk in enumerate(s["chunks"]):
            intended = normalizer.normalize(chunk)
            best = None
            for attempt in range(RETRIES):
                torch.manual_seed(int(s["hash"][:8], 16) + 1000 * i + attempt)
                wav = model.generate(text=intended, prompt_wav_path=VOICE_WAV, prompt_text=voice_text,
                                     reference_wav_path=VOICE_WAV)
                ok, info = checker.check(np.asarray(wav, dtype=np.float32), sr, intended)
                if best is None or info["matched"] > best[1]["matched"]:
                    best = (wav, info)
                if ok:
                    break
                print(f"  retry {s['section']} chunk {i}: heard {info['matched']}/{info['of']} "
                      f"(missing run {info['missing_run']}): {info['heard'][:90]}", flush=True)
            wav, info = best
            if not ok:
                failed = True
                notes.append({"chunk": i, "text": chunk, **info})
            parts += [np.asarray(wav, dtype=np.float32), gap]

        if failed:
            refused.append({"section": s["section"], "hash": s["hash"], "problems": notes})
            print(f"REFUSED {s['section']}: {len(notes)} chunk(s) never matched; left on the browser voice", flush=True)
            continue

        audio = np.concatenate(parts[:-1])
        to_mp3(audio, sr, mp3)
        seconds = round(len(audio) / sr, 1)
        records = load_records()
        records["recordings"][s["hash"]] = {
            "file": f"ebook/{s['volume']}/{s['hash']}.mp3",
            "seconds": seconds,
            "section": s["section"],
            "label": s.get("label", ""),
            "chunks": len(s["chunks"]),
            "made": datetime.date.today().isoformat(),
        }
        save_records(records)
        took = (datetime.datetime.now() - started).total_seconds()
        print(f"recorded {s['section']}: {seconds}s of audio in {took:.0f}s, every chunk checked", flush=True)

    if refused:
        out = os.path.join(args.audio_repo, "refused.json")
        with open(out, "w", encoding="utf-8") as f:
            json.dump(refused, f, indent=2, ensure_ascii=False)
        print(f"{len(refused)} section(s) refused; details in {out}", flush=True)
    print("now run: node scripts/build-ebook-audio.js", flush=True)


if __name__ == "__main__":
    main()
