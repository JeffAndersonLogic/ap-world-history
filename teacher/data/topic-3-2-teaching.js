/* Topic 3.2 canonical teaching pipeline.
 * Base = authored instructional content.
 * Presentation assets = data-only visual substitutions, safe for Node generation.
 * Visual assets = topic-specific slide composition only.
 * Teaching OS shared = common teacher-cockpit behavior/readability.
 */
document.write('<script src="data/topic-3-2-teaching-base.js"><\/script>');
document.write('<script src="data/topic-3-2-presentation-assets.js?v=data-v1"><\/script>');
document.write('<script src="data/topic-3-2-visual-assets.js?v=visuals-v1"><\/script>');
document.write('<script src="teaching-os-shared.js?v=shared-v1"><\/script>');
document.write('<script src="../assets/js/behistorical-slide-templates.js"><\/script>');
document.write('<script src="../assets/data/key-concepts.js"><\/script>');
