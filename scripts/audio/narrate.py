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
Inside a section, every generated chunk is kept in <audio-repo>/.narration-cache/
(never published; the audio repository ignores it) until the section is filed,
so a run stopped mid-section, or a section refused and then rerun, re-checks the
audio it already made instead of making it again.

    python3 -I scripts/audio/narrate.py --self-test

proves the word check fails on a skip, an added run, a long swap and padded
audio, and passes the respelled names that refused sections on the first pilot.

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
   of words, or runs far longer than its words take to say, is generated again
   with a new seed, up to RETRIES times. A section with a chunk that never
   passes is NOT recorded: it stays on the browser voice, which reads the right
   words, and the run reports it for a person to look at. A recording that
   skips a sentence sounds authoritative and is wrong, which is worse than no
   recording.

   What the check does not judge is how a name is spelled back. Whisper is an
   English listener: on the first pilot run it heard Mohacs as "mohax",
   devshirme as "Dev Shirm", Qizilbash as "Quizzle Bash" and the Mughals as
   "the Moogles", and the check, reading those as missing words, refused two
   whole sections whose audio was fine. So a short swap (at most SWAP_WORDS
   words heard as at most SWAP_WORDS + 1) counts as heard, spelled differently.
   A skip, an added run, a long swap and a chunk padded with sound Whisper
   could not turn into words all still fail. compare() is the rule, and
   `--self-test` shows it failing on each of those.

3. Reproducible. Each chunk's seed comes from the fingerprint and the chunk's
   position, so rerunning a section produces the same audio.

Needs: pip install voxcpm faster-whisper soundfile numpy, plus ffmpeg and node.
CPU works and is slow (about 3.4 seconds of work per second of audio, measured);
a graphics card is the practical way to record whole volumes.
"""

import argparse
import datetime
import difflib
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import unicodedata

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
SWAP_WORDS = 2         # a swap this short is a respelled name, not a skip (see rule 2)
SECONDS_PER_WORD = 0.8 # about twice the narrator's measured pace (0.38 s a word)
SECONDS_SLACK = 2.0    # plus this, for the pause around a one-word heading
BITRATE = "48k"        # mono speech; the whole eBook at this rate is under 1 GB
FINGERPRINT = re.compile(r"^[0-9a-f]{16}$")
VOLUME = re.compile(r"^[a-z0-9-]+$")


def spoken(texts):
    """The history rules from scripts/lib/narration-text.js, one implementation."""
    out = subprocess.run(["node", FIXER, "--json"], input=json.dumps(texts),
                         capture_output=True, text=True, check=True).stdout
    return json.loads(out)


def compare(want, got, seconds=None):
    """Did `got` (the words heard) say `want` (the words meant)? Rule 2 above.

    Pure, so --self-test can prove each way it fails without a speech model."""
    sm = difflib.SequenceMatcher(None, want, got, autojunk=False)
    matched = missing_run = extra_run = 0
    respelled = []
    for op, a1, a2, b1, b2 in sm.get_opcodes():
        if op == "equal":
            matched += a2 - a1
        elif op == "replace" and a2 - a1 <= SWAP_WORDS and b2 - b1 <= SWAP_WORDS + 1:
            matched += a2 - a1
            respelled.append((" ".join(want[a1:a2]), " ".join(got[b1:b2])))
        else:
            if op in ("delete", "replace"):
                missing_run = max(missing_run, a2 - a1)
            if op in ("insert", "replace"):
                extra_run = max(extra_run, b2 - b1)
    share = matched / max(1, len(want))
    too_long = seconds is not None and seconds > SECONDS_SLACK + SECONDS_PER_WORD * len(want)
    ok = (share >= MIN_MATCH and missing_run <= MAX_MISSING_RUN
          and extra_run <= MAX_MISSING_RUN + 2 and not too_long)
    return ok, {"matched": matched, "of": len(want), "missing_run": missing_run,
                "extra_run": extra_run, "respelled": respelled, "too_long": too_long}


def words(text, normalizer=None):
    """Lowercase words with accents folded (Mohács -> mohacs), so a name is one word."""
    if normalizer:
        text = normalizer.normalize(text)
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    text = text.lower().replace("-", " ")
    return re.sub(r"[^a-z0-9' ]", " ", text).replace("'", "").split()


def heard_as_written(raw):
    """Whisper writes a spoken range as "1453-1699"; the page says "1453 to 1699"."""
    return re.sub(r"\b(\d{3,4})\s*[-\u2013]\s*(\d{3,4})\b", r"\1 to \2", raw)


class Checker:
    """Did the narrator say what it was meant to say? Words, not sound."""

    def __init__(self, normalizer, device):
        from faster_whisper import WhisperModel
        self.whisper = WhisperModel("small.en", device=device,
                                    compute_type="int8" if device == "cpu" else "float16")
        self.normalizer = normalizer

    def check(self, audio, sr, intended):
        seconds = len(audio) / sr
        if sr != 16000:
            audio = subprocess.run(
                ["ffmpeg", "-loglevel", "error", "-f", "f32le", "-ar", str(sr), "-ac", "1", "-i", "-",
                 "-ar", "16000", "-f", "f32le", "-"],
                input=audio.astype(np.float32).tobytes(), capture_output=True, check=True).stdout
            audio = np.frombuffer(audio, np.float32)
        segments, _ = self.whisper.transcribe(audio, beam_size=5, language="en")
        heard_raw = " ".join(s.text for s in segments)
        want = words(intended, self.normalizer)
        got = words(spoken([heard_as_written(heard_raw)])[0], self.normalizer)
        ok, info = compare(want, got, seconds)
        info["heard"] = heard_raw.strip()
        return ok, info


def self_test():
    """Each way compare() must fail, and the real respellings it must pass."""
    meant = ("the janissaries were drawn from the devshirme a levy of christian boys "
             "who were trained as soldiers and administrators").split()
    cases = [
        # The first pilot's refusals: respelled names and terms, audio fine.
        ("respelled one-word heading", ["mohacs"], ["mohax"], 1.2, True),
        ("respelled two-word heading", ["the", "mughals"], ["the", "moogles"], 1.5, True),
        ("name heard as two words", ["qizilbash"], ["quizzle", "bash"], 1.4, True),
        ("short term heard as a word", ["kul"], ["cool"], 1.0, True),
        ("respelled name mid-sentence", meant, meant[:6] + ["dev", "shirm"] + meant[7:], 7.0, True),
        ("clean sentence", meant, meant, 7.0, True),
        # What the check exists to catch.
        ("skipped four words", meant, meant[:6] + meant[10:], 7.0, False),
        ("added six words", meant, meant[:8] + "and so on and so forth".split() + meant[8:], 7.0, False),
        ("swapped three words", meant, meant[:4] + ["x", "y", "z"] + meant[7:], 7.0, False),
        ("silent one-word chunk", ["mohacs"], [], 1.0, False),
        ("heading babbled", ["mohacs"], "mohacs and then the sultan of the empire".split(), 4.0, False),
        ("heading padded with sound", ["mohacs"], ["mohacs"], 6.0, False),
        ("sentence padded with sound", meant, meant, 30.0, False),
    ]
    wrong = 0
    for name, want, got, seconds, expect in cases:
        ok, info = compare(want, got, seconds)
        mark = "ok  " if ok == expect else "WRONG"
        wrong += ok != expect
        print(f"{mark} {'passes' if ok else 'fails '}  {name}")
    for raw, meant_text in [("1453-1699, Constantinople", "1453 to 1699, Constantinople"),
                            ("Mohács.", "Mohacs")]:
        same = words(heard_as_written(raw)) == words(meant_text)
        wrong += not same
        print(f"{'ok  ' if same else 'WRONG'} {'matches' if same else 'differs'}  {raw!r} read as {meant_text!r}")
    print("self-test:", "every case behaved" if not wrong else f"{wrong} case(s) wrong")
    return 1 if wrong else 0


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
    ap.add_argument("--sections", help="JSON from scripts/audio/extract-narration.js")
    ap.add_argument("--audio-repo", help="checkout of the behistorical-audio repository")
    ap.add_argument("--self-test", action="store_true", help="prove the word check can fail, then exit")
    ap.add_argument("--limit", type=int, default=0, help="record at most this many sections")
    ap.add_argument("--device", default="cpu", help="cpu or cuda")
    args = ap.parse_args()
    if args.self_test:
        sys.exit(self_test())
    if not args.sections or not args.audio_repo:
        ap.error("--sections and --audio-repo are required")

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
        cache = os.path.join(args.audio_repo, ".narration-cache", s["hash"])
        os.makedirs(cache, exist_ok=True)
        for i, chunk in enumerate(s["chunks"]):
            intended = normalizer.normalize(chunk)
            best = None
            for attempt in range(RETRIES):
                # Keyed by the chunk's own words as well as its place, so a cached
                # take can never be reused for different text.
                key = hashlib.sha256(f"{i}\n{attempt}\n{intended}".encode()).hexdigest()[:16]
                kept = os.path.join(cache, key + ".flac")
                if os.path.exists(kept):
                    wav, _ = sf.read(kept, dtype="float32")
                else:
                    torch.manual_seed(int(s["hash"][:8], 16) + 1000 * i + attempt)
                    wav = np.asarray(model.generate(text=intended, prompt_wav_path=VOICE_WAV,
                                                    prompt_text=voice_text, reference_wav_path=VOICE_WAV),
                                     dtype=np.float32)
                    sf.write(kept + ".part.flac", wav, sr)
                    os.replace(kept + ".part.flac", kept)
                ok, info = checker.check(wav, sr, intended)
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
        shutil.rmtree(cache, ignore_errors=True)   # filed; the takes are no longer needed
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
