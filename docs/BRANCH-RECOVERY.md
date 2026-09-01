# Branch recovery manifest

Every remote branch as of 2026-09-01 with its tip SHA, recorded before the
branch cleanup so any deletion is reversible.

Restore one with:

```bash
git push origin <SHA>:refs/heads/<BRANCH>
```

`absorbed` means `git merge-tree` against `main` produced main's own tree: merging the
branch changes nothing, so its work is already on main and deleting it loses nothing.

| Branch | Tip SHA | Last commit | Status |
|---|---|---|---|
| `accessibility/ebook-wcag-aa` | `8da7599ed396d2c050711e6e9601ebae5a90175a` | 2026-08-15 | absorbed |
| `add-1-2-sufism-video` | `f0a888055c8a2181421b61bb593db7217e75507e` | 2026-08-28 | absorbed |
| `agent/beintheroom-v2-expansion` | `464ef642eb16ea09476999cad9cbad3273cc65b2` | 2026-07-16 | carries unique content |
| `agent/standardize-first10-media` | `f3fbe0ad6218443f90559ed79825a4468a7a7638` | 2026-07-16 | carries unique content |
| `claude/admiring-noether-cvgZO` | `171fea8a022455c63fb83021b606a2cfdc8e1bc5` | 2026-05-25 | carries unique content |
| `claude/ap-history-repo-map-xngvsb` | `3abf87964787a5e33fb06d83d607cd79141b4382` | 2026-08-10 | carries unique content |
| `claude/ap-world-foundations-exam-0lzn02` | `d8114a3821a870ace63fb52ad2e5794778a41c7f` | 2026-08-17 | absorbed |
| `claude/ap-world-history-automation-90rdu6` | `6fc54226982c75e35090985e5d681f3d6ec39f94` | 2026-08-12 | carries unique content |
| `claude/b-historical-announcements-0cuwms` | `6b050b6d9ccb66afc1c03016bddd79302a890221` | 2026-08-10 | absorbed |
| `claude/be-in-room-module-response-6jwqvk` | `0b995f9a1610a0e1a8b046d133990618e27ab261` | 2026-08-26 | absorbed |
| `claude/behistorical-cards-nav-fq7t25` | `3a7ef1b001be0e03106c1cef07d920f850b4f3b8` | 2026-07-21 | carries unique content |
| `claude/behistorical-current-events-access-g9ld2c` | `cc912f10773d8354d762ab56ee7426cf57f9958d` | 2026-07-29 | carries unique content |
| `claude/behistorical-current-events-dcwd0q` | `7ea9da336aa684a714512f1da23ab4bea7c9d0cc` | 2026-07-29 | carries unique content |
| `claude/behistorical-ebook-stress-test-kcrlx2` | `bceea59b650d424a3bc6c8d9c66d092313a7edc7` | 2026-08-24 | absorbed |
| `claude/behistorical-ebook-unit-1-q2axu6` | `a454592511dc53ad0ecd1c783e4fcc5601ef4bb1` | 2026-08-16 | absorbed |
| `claude/behistorical-form-buttons-lr4nzy` | `822adf2c3edc7c83f01cf5b5cbe3692709775eaf` | 2026-08-04 | absorbed |
| `claude/behistorical-foundations-canvas-bibagu` | `bdb2818af0d8ecb1d1ccfd7488a575332b63d071` | 2026-08-06 | absorbed |
| `claude/behistorical-foundations-targets-xzlcyd` | `d63fa340dfc39b39a1df880f1ea1a97acda813e9` | 2026-08-19 | carries unique content |
| `claude/behistorical-google-form-sheet-jxtv4l` | `a1f9bb0979e354be75a220e9cfe4a5418336115a` | 2026-07-30 | carries unique content |
| `claude/behistorical-image-fixes-01tlyj` | `2c60d9d9686fd5423a8936093e5166c6d3e1bb17` | 2026-07-25 | absorbed |
| `claude/behistorical-instruction-manual-lzyu4y` | `13d8119961c8d8dbb4094db5a47913b88d5bc3a0` | 2026-07-28 | carries unique content |
| `claude/behistorical-lecture-images-6tsbzc` | `f682abaee8875f3d3a608f07456a274269c91e3e` | 2026-08-12 | absorbed |
| `claude/behistorical-lesson-build-MB44v` | `5819ffaf7477a31dacd28d2f13cc4f4fbceef00b` | 2026-06-07 | carries unique content |
| `claude/behistorical-looping-e998ne` | `7310c6adf27f1394498300f4e74d570f6c792b25` | 2026-07-23 | carries unique content |
| `claude/behistorical-monetization-readiness-784vh3` | `7e097f40bb47ffbaf77ee3128e2e601a684dab66` | 2026-08-08 | carries unique content |
| `claude/behistorical-pitch-deck-gr7w6a` | `3abebce36b0b5342845f28dd541790be27aceede` | 2026-07-21 | carries unique content |
| `claude/behistorical-productivity-strategy-qzrme6` | `4a5b41e5f6820a142e28994ed097f4ec56201ff5` | 2026-08-09 | absorbed |
| `claude/behistorical-project-access-ymg6ta` | `c39210eb8e94a3ed6a056ce439a2e0453430d4d2` | 2026-07-17 | absorbed |
| `claude/behistorical-push-main-ki0my9` | `f10787196ce44ae02d3d997039b4cac8adc6e1bb` | 2026-08-15 | absorbed |
| `claude/behistorical-remove-final-draft-zbyat6` | `485e208c1e6178c38265d09908033ca5e1ecd3e5` | 2026-06-19 | carries unique content |
| `claude/behistorical-socrates-redesign-5ytw1z` | `558da9afc849ae413dfc035fbf3b0a444fbff9b4` | 2026-09-01 | carries unique content |
| `claude/behistorical-status-review-x4thz6` | `daa3bf1d23771aab2049e9ac725c769547cf21ea` | 2026-07-12 | absorbed |
| `claude/behistorical-topic-1-2-q1m2as` | `72cacac58acfeb12aa351d9993cf69e213a7b61a` | 2026-08-28 | absorbed |
| `claude/behistorical-unit-6-f5fcqh` | `15968753e1f070a3ee847b0935047c4cd94dfe55` | 2026-08-16 | absorbed |
| `claude/behistorical-units-5-9-review-64445a` | `52f1ab1c60023bafe751b1dfa54ad1fe6ff92858` | 2026-08-16 | absorbed |
| `claude/behistorical-video-swap-8lm6b8` | `9fad7206a966ae15782d84d2ba76fd7282a2636a` | 2026-08-07 | absorbed |
| `claude/behistorical-washed-button-60md8f` | `a9f1a3b199b3b236f23bea4e9e43c1f33313dc99` | 2026-08-07 | absorbed |
| `claude/beintheroom-samarkand-scenario-OEhMa` | `f7a3008b5295525c752145b7223756c25ca746c7` | 2026-06-21 | carries unique content |
| `claude/beintheroom-topic-1-2-lo-f-WRTCm` | `877af10e3bcab28bcc7df861b7b5b0a8ffab1035` | 2026-06-06 | carries unique content |
| `claude/beinthroom-next-step-instructions-ib5z9a` | `d89fd2427c69f9e1725050640f98dc72415691b9` | 2026-08-26 | absorbed |
| `claude/brave-darwin-PnePn` | `3c7d0598ef99c2a53f5b741e5ca6bebc1a82eace` | 2026-05-23 | carries unique content |
| `claude/canvas-artifacts-docs-port-ef0sib` | `6ec17c2746334bec3339a753fc40d2e6ab7b8cc8` | 2026-08-10 | carries unique content |
| `claude/canvas-assignments-module-sort-lqlv73` | `bb21201f046f2622de2507b0d7497bc9715c1b46` | 2026-08-07 | absorbed |
| `claude/canvas-build-guide-docs-0kyndl` | `a2dd11b1e090cd4d338a415df73e364508f53307` | 2026-08-09 | absorbed |
| `claude/canvas-calendar-html-units-vvpjjv` | `b2b1d2a1b06f50f5ca32167732c8040f8035347e` | 2026-08-20 | carries unique content |
| `claude/ced-compliance-renderer-config-SS5ER` | `7546d166079006b7d2cf296702943081059db8e5` | 2026-06-06 | carries unique content |
| `claude/claude-md-docs-atzhky` | `ae98c32d13108e99b9f2605c7adee1d3dc02460f` | 2026-07-12 | carries unique content |
| `claude/confucianism-lecture-updates-8c5pn3` | `8f5a9ba886c5b3a508b21f9a952e99fdde5edacf` | 2026-08-11 | absorbed |
| `claude/constantinople-siege-html-5P7PK` | `e5742e77ad276969213945d7deeb6bd3ad4bdeb0` | 2026-06-06 | carries unique content |
| `claude/current-events-activity-access-lojpnv` | `2b3bd39dce90dae8c4a23cc720fc3d37636624c8` | 2026-08-06 | absorbed |
| `claude/current-events-activity-upgrade-ie6whn` | `e8905901073073e0e6c39d953218aba6a0578550` | 2026-08-06 | carries unique content |
| `claude/daily-error-resolution-r0rd3y` | `3786fdc32947624a7c9078c3ec321640274f2cd2` | 2026-08-18 | carries unique content |
| `claude/delete-old-foundations-PoSKa` | `7b0a5e6b7c9eda91f10b2ed4f46c48048821165c` | 2026-06-07 | carries unique content |
| `claude/descriptor-comma-placement-dvkewt` | `f7d4ee851339bb026be10533eb2f20b13dd32385` | 2026-08-25 | absorbed |
| `claude/ebook-units-disclaimer-removal-aoowdo` | `b8f3719ae673de38367b376ff1a7a7ecdb62df3e` | 2026-08-16 | absorbed |
| `claude/education-tools-ideas-dxhmzc` | `7555c4bda8825fe575fd736b0de2c6e47be1bc59` | 2026-07-18 | absorbed |
| `claude/festive-archimedes-cmwk8t` | `fecfd3659a6df7e8444f3a3d1a17ee816d1cc9a1` | 2026-08-06 | absorbed |
| `claude/festive-sagan-1U8rD` | `c58b17bb0853937e5d9c716046426e6d8545b5d7` | 2026-05-24 | absorbed |
| `claude/fix-card-image-issue-ukwirv` | `15205f6bbc4617426bb1d918eadbda8d69d746f5` | 2026-07-22 | absorbed |
| `claude/foundations-0-map-swap-oc1sfd` | `40304f739483028373a6cbb415ff8ed6008d52ea` | 2026-08-01 | absorbed |
| `claude/foundations-1-geography-jtqrt` | `7bd6b4435740e2c25d8be541a9698e8371ad318c` | 2026-05-30 | absorbed |
| `claude/foundations-1-video-swap` | `b9b36a78c101db51c35c09ceae87598ea4f30484` | 2026-08-10 | absorbed |
| `claude/foundations-2-buddhism-map-1a0swh` | `16c6974b4f4d76877b29efd3a00e8df98e790aa3` | 2026-08-12 | absorbed |
| `claude/foundations-3-coverage-628c5a` | `cb91cab21d4c92b348d9775d853836cf7f63ef24` | 2026-08-14 | absorbed |
| `claude/foundations-3-module-1-maps-8ngqsg` | `fe896f40819ca23c080818912389ac23220638df` | 2026-08-14 | absorbed |
| `claude/foundations-4-networks-notes-33hsw7` | `5a3d5d8711328d2eeffdb1da83c705f71dc399d4` | 2026-08-18 | absorbed |
| `claude/foundations-capture-parity-9tedg0` | `0007ab2ace1a000ee4cd1081199904f0639a8ac4` | 2026-08-01 | absorbed |
| `claude/foundations-card-contrast` | `32a10e59eaa394ac630aac3ab88de22a402afb7b` | 2026-08-10 | absorbed |
| `claude/foundations-content-audit-Nm4mp` | `679a841127cb2e03c7822c36d4e8a7162d671c13` | 2026-05-29 | carries unique content |
| `claude/foundations-exam-design-24m6ue` | `8f0e3bfd64b22cfb2eff61d8907ef4aaf8eb7cc3` | 2026-08-18 | carries unique content |
| `claude/foundations-exam-design-hodyb2` | `e22e57f0e8a3940aaa63667b84002206bdd7ce65` | 2026-08-13 | carries unique content |
| `claude/foundations-exam-review-72xlg9` | `457434856f7db5ac664a2aea34ddf24b61036580` | 2026-08-18 | carries unique content |
| `claude/foundations-first-and-10-reading-QnvkC` | `803cfa682e2c25945da2f9074954e5c7425b4535` | 2026-05-30 | carries unique content |
| `claude/foundations-learning-targets-60tm0j` | `be5e0925d842df35d97179db7f81dd328376b63c` | 2026-07-31 | absorbed |
| `claude/foundations-lecture-notes-86koy9` | `c0e4afee6700d95ac669ca05f9960c2d399cb65c` | 2026-08-06 | absorbed |
| `claude/foundations-modules-format-aQqFh` | `a2b23da3eb5005672b5378a760d74f4bcfb8e383` | 2026-05-31 | absorbed |
| `claude/grand-canal-map-lecture-wr0v6h` | `87b63804073ef34ee040064f84aa51d6ca233006` | 2026-08-26 | absorbed |
| `claude/historical-modulus-structure-vtz5jh` | `b419d02094316ee5337f8e99629097c3f576777c` | 2026-08-14 | carries unique content |
| `claude/historical-website-link-switch-q62an0` | `1e7daae7687b85f84494d69f8087197e119e15f1` | 2026-08-10 | absorbed |
| `claude/ilkhan-court-advisory-jslL8` | `0d3b7d2bfa0fc8cb416f9ba1afe84e933ef562bd` | 2026-06-05 | carries unique content |
| `claude/kilwa-harbor-scenario-b0z10` | `7dcea43e0e2c08547be94cfcb9da8595e056eb06` | 2026-06-05 | carries unique content |
| `claude/lecture-cards-video-placement-kq0c7i` | `10107eead97b54ea28909103adbf867c908ede7d` | 2026-08-10 | absorbed |
| `claude/listen-to-section-feature-amcnf6` | `3d2928d9261fa446478e2393b42fab9a115c26e9` | 2026-08-15 | absorbed |
| `claude/loving-newton-NGikG` | `365539683830c312b4cc1c4a0716a9263935a718` | 2026-05-26 | carries unique content |
| `claude/magic-school-socrates-file-liu4af` | `4056e2bf84f8789f8f5e5b81e033c60d9ba26f18` | 2026-08-29 | absorbed |
| `claude/modest-brahmagupta-VvWvM` | `16b1babb6231ac28a5bca5bb42da303a2b53916a` | 2026-05-24 | absorbed |
| `claude/module-7-tile-content-0kg8ez` | `4d1c795d443702b2fe5f8f4070d31651f0317b17` | 2026-08-24 | absorbed |
| `claude/notion-summaries-recovery-qrbcyi` | `0e8a74b3a6d62e6c4f9340b623dbf8709b050318` | 2026-08-17 | absorbed |
| `claude/personalized-study-guides-d7oand` | `fbccee3f12465f68ded211d51bcd4b46324af67e` | 2026-07-20 | carries unique content |
| `claude/remove-becurrent-link-wwz9rq` | `a8e7e4a51c33f47e1f666f6a1e1e1cb8ac503935` | 2026-08-17 | absorbed |
| `claude/remove-optional-deeper-read-x7gto4` | `e74fa2de3af09056f244faeaf877aba4b9c40ec2` | 2026-08-17 | carries unique content |
| `claude/separate-socrates-classrooms-ff9gp8` | `b5e18a043432a8a154d9e958564400de65c5060f` | 2026-08-26 | absorbed |
| `claude/sharp-meitner-rF1Ob` | `f87157f093115fbba74532b9bb39d631b730424c` | 2026-05-24 | carries unique content |
| `claude/skills-implementation-review-0g5lwz` | `d0e8f4dd0df4434d9f98be675cca68730463e515` | 2026-08-23 | carries unique content |
| `claude/skills-lens-over-time-zc4rrx` | `8419c52cc790c38bf975c793fb45284ab196f065` | 2026-08-23 | absorbed |
| `claude/skillslens-status-knmkh0` | `5976fcb00acea415117ac505d52122a6d2cbaa20` | 2026-08-21 | absorbed |
| `claude/socrates-multi-unit-expansion-map695` | `3059427c764a1084b090e4ac3c739566207f2543` | 2026-08-20 | absorbed |
| `claude/song-china-first-10-cTmqP` | `da17a757b32abb0fdae8a4d25966d4dec6590ef4` | 2026-05-27 | carries unique content |
| `claude/song-china-reading-section-IT8vT` | `23d69fe727e0233c99be5da16190246bbf8037d3` | 2026-05-27 | absorbed |
| `claude/student-response-workflow-6xurnm` | `4ca92f82b79aa84adb9a745899db1eee958485dd` | 2026-07-23 | carries unique content |
| `claude/taghaza-salt-road-build-2FEvY` | `7cf863ac4b03888b91cc802643f50d2bdbb9a6da` | 2026-06-05 | carries unique content |
| `claude/teacher-hub-apps-script-0qDGZ` | `34e90f34a6645cae972110979e9f756a7ca78f7a` | 2026-05-30 | carries unique content |
| `claude/topic-1-2-dar-al-islam-VI3jA` | `8378c720ae1ac37dad52dd98e953efcfedfb7a92` | 2026-05-29 | absorbed |
| `claude/topic-1-3-lesson-build-IGrEt` | `a182349083c388a51cc5099c7d0b3bb143d5d16a` | 2026-05-29 | absorbed |
| `claude/topic-1-5-africa-lesson-eKCFi` | `49cde4fe7262bec98cef740123a0d22a0fb56fc4` | 2026-05-29 | carries unique content |
| `claude/topic-1-6-medieval-europe-7ekfy` | `80e5fc2c9878705ee56e67078bcc4951776a0e94` | 2026-05-29 | carries unique content |
| `claude/topic-1-7-comparison-un2Dk` | `5907c36815177e84ad86e5a3eb95af500d0d8eed` | 2026-05-29 | carries unique content |
| `claude/topic-6-1-imperialism-ttftw8` | `6db01796d260fb9fc197ffa18550f85e17d4e755` | 2026-06-22 | carries unique content |
| `claude/topic-8-1-cold-war-lesson-gtlcp3` | `9f1e51fabcbfd7a1dc53ea58a67e56394ab8c85f` | 2026-06-24 | absorbed |
| `claude/unit-1-ebook-alignment-uut4d1` | `6a73f014dcda807a5f952e1e3dbf68997eef0c90` | 2026-08-24 | absorbed |
| `claude/unit-2-beintheroom-scenarios-dEUBm` | `3a251d5771a10d4fb8b874cd18b6936481e8b2f2` | 2026-06-06 | carries unique content |
| `claude/unit-2-beintheroom-scenarios-wdnz3t` | `d5084ce5ba25360ee6a6b29b217cab824a51b5e1` | 2026-06-15 | carries unique content |
| `claude/unit-3-build-gOgO5` | `15a46377347bf59d7bd88200f64d8ef875425909` | 2026-06-03 | absorbed |
| `claude/unit-4-5-f10-validators-CtTmA` | `9e3ca47237a1095d5c4b843213c7c9ec49ee647a` | 2026-06-07 | carries unique content |
| `claude/unit-4-critique-response-3due9t` | `cf680e10288b098078f28ed1bc9e58e0beb6cab7` | 2026-08-16 | absorbed |
| `claude/unit-5-ced-audit` | `942628434aa873b6290cc83d6540f5709e115b13` | 2026-06-16 | absorbed |
| `claude/unit-5-completion-jueU7` | `bdc717547db457976d52ebcbeed2eddc4aba5786` | 2026-06-04 | carries unique content |
| `claude/unit-8-404s-4bnsod` | `b5144ccc56c28fbee144f946297400426df84b17` | 2026-08-12 | carries unique content |
| `claude/unit-8-image-repair` | `cdd79b6d62b58dcbc597300eea295556cdba4841` | 2026-08-12 | carries unique content |
| `claude/unit4-5-first10-fixes-xm7xyy` | `5df2ed85d905cb55a3406f71d14a2d8a4763b37a` | 2026-07-04 | absorbed |
| `claude/units-2-4-ced-audit-vwovod` | `5b222e18d48d0ee5a09b535662cd7f6dc26d2940` | 2026-06-16 | absorbed |
| `codex/align-fall-2026-ced` | `77e1eb643ef94d04515cb9ccc34dc4e794cdf2d9` | 2026-08-27 | carries unique content |
| `codex/be-current-daily-headlines` | `55109fb0fbe7c6796ddb7c9f45453122b2ab78cf` | 2026-08-28 | carries unique content |
| `codex/topic-1-2-visual-summary` | `581342e4ccdd058990b6803663b7b1abc20d2ef1` | 2026-08-28 | carries unique content |
| `feature/ebook-listen-to-section` | `3d2928d9261fa446478e2393b42fab9a115c26e9` | 2026-08-15 | absorbed |
| `feature/ebook-listen-voice-quality` | `3f50768aa4eeecacb633ca866b6dfa225446ebe1` | 2026-08-16 | absorbed |
| `main` | `bb881f4b5c36f8c333d20a4518b3024bc795e410` | 2026-08-31 | default branch |
| `retrigger-pages-deploy` | `ff7736bf7b66b1ce2073b214031376873f9e8da3` | 2026-08-26 | absorbed |

## Cleanup: the 69 branches that are provably absorbed

For each of these, `git merge-tree` against `main` returns main's own tree, so merging
the branch is a no-op and deleting it loses nothing. Re-verified against `main` at
`bb881f4` on 2026-09-01.

Delete them all:

```bash
git push origin --delete \
accessibility/ebook-wcag-aa \
add-1-2-sufism-video \
claude/ap-world-foundations-exam-0lzn02 \
claude/b-historical-announcements-0cuwms \
claude/be-in-room-module-response-6jwqvk \
claude/behistorical-ebook-stress-test-kcrlx2 \
claude/behistorical-ebook-unit-1-q2axu6 \
claude/behistorical-form-buttons-lr4nzy \
claude/behistorical-foundations-canvas-bibagu \
claude/behistorical-image-fixes-01tlyj \
claude/behistorical-lecture-images-6tsbzc \
claude/behistorical-productivity-strategy-qzrme6 \
claude/behistorical-project-access-ymg6ta \
claude/behistorical-push-main-ki0my9 \
claude/behistorical-status-review-x4thz6 \
claude/behistorical-topic-1-2-q1m2as \
claude/behistorical-unit-6-f5fcqh \
claude/behistorical-units-5-9-review-64445a \
claude/behistorical-video-swap-8lm6b8 \
claude/behistorical-washed-button-60md8f \
claude/beinthroom-next-step-instructions-ib5z9a \
claude/canvas-assignments-module-sort-lqlv73 \
claude/canvas-build-guide-docs-0kyndl \
claude/confucianism-lecture-updates-8c5pn3 \
claude/current-events-activity-access-lojpnv \
claude/descriptor-comma-placement-dvkewt \
claude/ebook-units-disclaimer-removal-aoowdo \
claude/education-tools-ideas-dxhmzc \
claude/festive-archimedes-cmwk8t \
claude/festive-sagan-1U8rD \
claude/fix-card-image-issue-ukwirv \
claude/foundations-0-map-swap-oc1sfd \
claude/foundations-1-geography-jtqrt \
claude/foundations-1-video-swap \
claude/foundations-2-buddhism-map-1a0swh \
claude/foundations-3-coverage-628c5a \
claude/foundations-3-module-1-maps-8ngqsg \
claude/foundations-4-networks-notes-33hsw7 \
claude/foundations-capture-parity-9tedg0 \
claude/foundations-card-contrast \
claude/foundations-learning-targets-60tm0j \
claude/foundations-lecture-notes-86koy9 \
claude/foundations-modules-format-aQqFh \
claude/grand-canal-map-lecture-wr0v6h \
claude/historical-website-link-switch-q62an0 \
claude/lecture-cards-video-placement-kq0c7i \
claude/listen-to-section-feature-amcnf6 \
claude/magic-school-socrates-file-liu4af \
claude/modest-brahmagupta-VvWvM \
claude/module-7-tile-content-0kg8ez \
claude/notion-summaries-recovery-qrbcyi \
claude/remove-becurrent-link-wwz9rq \
claude/separate-socrates-classrooms-ff9gp8 \
claude/skills-lens-over-time-zc4rrx \
claude/skillslens-status-knmkh0 \
claude/socrates-multi-unit-expansion-map695 \
claude/song-china-reading-section-IT8vT \
claude/topic-1-2-dar-al-islam-VI3jA \
claude/topic-1-3-lesson-build-IGrEt \
claude/topic-8-1-cold-war-lesson-gtlcp3 \
claude/unit-1-ebook-alignment-uut4d1 \
claude/unit-3-build-gOgO5 \
claude/unit-4-critique-response-3due9t \
claude/unit-5-ced-audit \
claude/unit4-5-first10-fixes-xm7xyy \
claude/units-2-4-ced-audit-vwovod \
feature/ebook-listen-to-section \
feature/ebook-listen-voice-quality \
retrigger-pages-deploy
```

Restore any one of them from the table above with
`git push origin <SHA>:refs/heads/<BRANCH>`.

## Classification of the 58 branches that carry content not on `main`

Each was checked for work that never landed, the way
`claude/daily-error-resolution-r0rd3y` turned out to hold the fix for a nightly
that had been red for ten nights.

### Hold: real work that is not on `main` (10)

| Branch | What it has that main does not |
|---|---|
| `claude/foundations-exam-design-hodyb2` | 40-question Foundations exam, generated |
| `claude/foundations-exam-design-24m6ue` | the 40-question exam, second pass |
| `claude/foundations-exam-review-72xlg9` | exam rebuilt, with the cue that broke v2 gated |
| `claude/behistorical-foundations-targets-xzlcyd` | Foundations Exam 1 as a Canvas QTI package |
| `claude/historical-modulus-structure-vtz5jh` | Skills Lens keyboard reader, a spec, and three tests |
| `claude/beintheroom-samarkand-scenario-OEhMa` | `unit-2/samarkand-caravanserai.html` |
| `claude/kilwa-harbor-scenario-b0z10` | `unit-2/kilwa-harbor.html` |
| `claude/taghaza-salt-road-build-2FEvY` | four Unit 2 scenarios incl. the Cairo capstone |
| `claude/ilkhan-court-advisory-jslL8` | `unit-2/ilkhan-court.html` |
| `claude/ap-history-repo-map-xngvsb` | a visual repo map for `docs/` |

**There is no Foundations exam on `main` at all.** Four branches built one across
six days in August and none landed. Whether to land it is a teaching decision, not a
cleanup one, so all four are held.

The seven Unit 2 scenarios are held for the same reason: `main` carries six different
Unit 2 scenarios covering 2.1 to 2.6, so these are most likely superseded drafts, but
"superseded" is a judgment about teaching that the blueprint gate in
`docs/beintheroom-scenario-blueprint.md` should make, not a merge-tree comparison.

### Harvested, then safe to delete

Two branches were read for what they knew before being listed for deletion:

- `claude/daily-error-resolution-r0rd3y` established 65 verified Commons names. Its
  corrections are now on this branch, applied to `main` as it stands.
- `claude/canvas-artifacts-docs-port-ef0sib` reported four student-visible lines still
  naming the retired Google Form on 10 August. Three were still there today, and are
  now fixed at their source.

### Stale, safe to delete (43)

Superseded: `main` has rewritten the files they touch, or the direction was abandoned
(the BeCurrent work moved to its own repository, the Teacher Hub was retired, and
`remove-optional-deeper-read` retires the standalone deep readings, which CLAUDE.md
documents as current).

```bash
git push origin --delete \
agent/beintheroom-v2-expansion \
agent/standardize-first10-media \
claude/admiring-noether-cvgZO \
claude/ap-world-history-automation-90rdu6 \
claude/behistorical-cards-nav-fq7t25 \
claude/behistorical-current-events-access-g9ld2c \
claude/behistorical-current-events-dcwd0q \
claude/behistorical-google-form-sheet-jxtv4l \
claude/behistorical-instruction-manual-lzyu4y \
claude/behistorical-lesson-build-MB44v \
claude/behistorical-looping-e998ne \
claude/behistorical-monetization-readiness-784vh3 \
claude/behistorical-pitch-deck-gr7w6a \
claude/behistorical-remove-final-draft-zbyat6 \
claude/beintheroom-topic-1-2-lo-f-WRTCm \
claude/brave-darwin-PnePn \
claude/canvas-artifacts-docs-port-ef0sib \
claude/canvas-calendar-html-units-vvpjjv \
claude/ced-compliance-renderer-config-SS5ER \
claude/claude-md-docs-atzhky \
claude/constantinople-siege-html-5P7PK \
claude/current-events-activity-upgrade-ie6whn \
claude/daily-error-resolution-r0rd3y \
claude/delete-old-foundations-PoSKa \
claude/foundations-content-audit-Nm4mp \
claude/foundations-first-and-10-reading-QnvkC \
claude/loving-newton-NGikG \
claude/personalized-study-guides-d7oand \
claude/remove-optional-deeper-read-x7gto4 \
claude/sharp-meitner-rF1Ob \
claude/song-china-first-10-cTmqP \
claude/student-response-workflow-6xurnm \
claude/teacher-hub-apps-script-0qDGZ \
claude/topic-1-5-africa-lesson-eKCFi \
claude/topic-1-6-medieval-europe-7ekfy \
claude/topic-1-7-comparison-un2Dk \
claude/topic-6-1-imperialism-ttftw8 \
claude/unit-2-beintheroom-scenarios-dEUBm \
claude/unit-2-beintheroom-scenarios-wdnz3t \
claude/unit-4-5-f10-validators-CtTmA \
claude/unit-5-completion-jueU7 \
claude/unit-8-404s-4bnsod \
claude/unit-8-image-repair
```
