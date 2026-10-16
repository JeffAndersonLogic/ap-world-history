# Rate limiting is not a broken image

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.


Nightly went red two nights running with a list headed "pictures did not
resolve". Most of that list was HTTP 429, which is Commons rate-limiting a run
that fired six workers at one host across about 400 URLs. Four entries were
genuinely dead files, and they were buried in the noise.

**A check that is red for a reason nobody can fix in this repo gets skimmed,
and then the real failures underneath it get skimmed too.** That is worse than
the red itself, and it is the reason this was worth fixing rather than muting.

So the checker now answers two different questions separately:

- **Broken**, and the run fails. The host answered and the answer was that the
  picture is not there: a 404, or a page served where an image should be.
- **Not verified**, and the run does not fail. The host declined to answer: a
  429, a 5xx, a timeout, or an access refusal. These are named in their own
  section and checked again the next night.

**A proxy 403 is a decline, not a dead picture.** A filtering proxy answers 403
or 407 to everything, so classifying those as broken is how a blocked network
becomes a report that 400 images are missing. Access refusals are also never
retried, because they will refuse identically next time and retrying 400 of them
spends the whole nightly budget learning nothing.

**The honest cost, and it is deliberate:** a picture that is genuinely dead
behind a persistent throttle is not detected on that run. It appears in the
not-verified list instead. Calling it broken without evidence would be a guess,
and a guess sitting in the same list as the real failures is what made the list
worthless.

**The real fix was making fewer requests.** Pacing 386 separate fetches at one
host politely still meant 386 fetches, and a throttled run inside the budget
verified about 30 of them. Commons answers up to 50 file titles per API call, so
the sweep is now about eight requests plus a narrowed set of real fetches.

**The API answers a different question, so it narrows the work rather than
replacing it.** "Does this file exist on Commons" is not "does the URL a
student's browser hits return image bytes". So anything the API calls missing is
still fetched, and so is a rotating sample of what it vouches for, which is what
keeps the end-to-end path honest. A failing API answers about nothing and every
URL falls through to the direct path, rather than being guessed at.

**Skip a URL that still contains a template placeholder.** The video preview is
built as `img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`, and the collector was
reading that literally, fetching it, and reporting a broken picture nobody could
fix. Whatever the template renders to gets checked when it lands in a data file.

**Never hand-build an `upload.wikimedia.org/.../thumb/<hash>/<n>px-<name>` URL.**
That bakes in the file's storage hash, and a wrong prefix earns HTTP 400, which
reads as broken while the underlying file is fine. Three Unit 2 BeInTheRoom
scenarios did this. The canonical form is
`Special:FilePath/<EXACT_FILE_NAME>?width=1200`, which resolves whatever the hash
is.

**Retry-After is obeyed, not clamped to our own guess.** There are two ceilings
and they bound different things: `MAX_BACKOFF_MS` caps a delay this script
invented, and `MAX_RETRY_AFTER_MS` caps one the host asked for, at a much higher
value. Clamping the host's number down to ours means retrying before it said to,
which earns another 429. That bug was written and then caught by the test.

**A 429 pauses every worker on that host, not just the request that got it.**
Rate limiting is a property of the host, so the backoff has to be too. Backing
off one request while five others kept going is what turned one 429 into a
cascade.
