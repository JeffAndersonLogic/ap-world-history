# Module 07 Units 5–7 Implementation Notes

The live Evidence Lab renderer consumes `lesson.images`; older `evidenceLab.items` blocks remain in lesson data but are not the active evidence gallery. This batch therefore supplies the active gallery before the shared renderer boots.

Load order on Topics 5.1–7.9:

1. topic base data
2. topic renderer config
3. unit-specific Module 07 evidence registry
4. Module 07 evidence runtime
5. shared topic renderer

The runtime only acts when the current topic exists in the Units 5–7 registry. It does not alter other units and does not change the shared renderer.

Generated evidence-card SVGs are unique per card, include the evidence title and source/type label, and are passed to the existing Evidence Lab/lightbox code as `data:` URLs. The repository validator explicitly permits `data:` image URLs.
