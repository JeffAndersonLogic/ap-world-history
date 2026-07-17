'use strict';

/**
 * Authored, gold-standard "First & 10" reading content, keyed by topic id.
 *
 * Each entry is the rich `f10` object consumed by renderFirst10Page (see
 * scripts/lib/first10-page.js): { deck, skillTags, support, vocab, sections,
 * takeaway, questions }. Section paragraphs, callout html, support cards, and
 * the takeaway are trusted, author-controlled HTML (they may use <span class="kt">,
 * <strong>, and <em>). When a topic has no entry here, the build scripts fall
 * back to their inline `topic.f10` (if any) and then to the generic template.
 *
 * Populated by scripts/build-unit6.js and scripts/build-unit9.js.
 */

module.exports = {};
