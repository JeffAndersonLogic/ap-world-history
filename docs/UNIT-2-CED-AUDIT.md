# Unit 2 CED Audit and Repair Record

**Scope:** AP World History: Modern, Unit 2 — Networks of Exchange, Topics 2.1–2.7  
**Governing source:** `CED - MASTER v.1.1 - Working Copy.pdf`  
**Standard:** 100% of each topic's locked instructional contract must be represented in required Key Concepts, illustrative examples, instructional content, and learning-target/success-criteria mapping.

## Final audit

| Topic | Pre-repair manual estimate | Final contract score | Primary drift repaired |
|---|---:|---:|---|
| 2.1 Silk Roads | 98% | 100% | Restored political stability/state protection as a supporting condition without displacing the economic causation spine. |
| 2.2 Mongol Empire | 82% | 100% | Restored state fragmentation and the required technological/cultural transfers; reduced conquest/plague drift. |
| 2.3 Indian Ocean | 88% | 100% | Restored astrolabe, larger ship designs, state-growth examples, diaspora examples, and Zheng He. |
| 2.4 Trans-Saharan | 97% | 100% | Reframed gold/salt as evidence inside transportation → increased volume/range and Mali → facilitated exchange causation. |
| 2.5 Cultural Consequences | 70% | 100% | Restored urban growth/decline and written travel accounts; removed crop diffusion from the core. |
| 2.6 Environmental Consequences | 75% | 100% | Restored bananas, new rice varieties, and citrus as central crop-diffusion evidence alongside plague. |
| 2.7 Comparison | 85% | 100% | Rebuilt comparison around Unit 2 mechanisms: geography, transportation, commercial practices, demand, nodes/states, productive capacity, and diffusion. |

## Topic 2.1 — Silk Roads

### Locked instructional spine

**Demand + transportation/commercial systems + lower political risk → expanded trade volume/range → trading-city growth + expanded production.**

Required evidence includes Kashgar, Samarkand, caravanserai, forms of credit, bills of exchange, banking houses, paper money, textiles, porcelain, and Chinese iron/steel production. Political stability/state protection is retained as a supporting condition and bridges to Topic 2.2 rather than becoming a separate Topic 2.1 unit.

## Topic 2.2 — Mongol Empire

### Locked instructional spine

**Build → Fragment → Connect → Transfer.**

The lesson must teach Mongol state building and successor khanates, the effect of Mongol expansion on trade and communication, and the required cultural/technological transfer examples: Greco-Islamic medical knowledge to western Europe, numbering systems to Europe, and adoption of the Uyghur script.

## Topic 2.3 — Indian Ocean

### Locked instructional spine

**Monsoon knowledge + maritime technology → expanded trade → stronger trading cities/states + diasporic communities + wider cultural/technological transfer.**

The lesson must explicitly teach compass, astrolabe, larger ship designs, monsoon winds, Swahili Coast city-states, Gujarat, Sultanate of Malacca, required diaspora examples, and Zheng He.

## Topic 2.4 — Trans-Saharan Trade

### Locked instructional spine

**Camel technology + caravan organization → greater trade volume/range → Mali facilitates and profits from wider exchange.**

Gold and salt remain important historical evidence but may not replace the CED causal relationship.

## Topic 2.5 — Cultural Consequences

### Locked instructional spine

**Connectivity diffuses cultural/technological traditions, changes urban fortunes, and produces more written travel accounts.**

Required evidence includes Buddhism, Hinduism, Islam, paper, gunpowder, Ibn Battuta, Margery Kempe, and Marco Polo. Crop diffusion belongs in Topic 2.6 rather than occupying a core Topic 2.5 strand.

## Topic 2.6 — Environmental Consequences

### Locked instructional spine

**Connectivity moves living things: crops and pathogens.**

Required crop evidence — bananas in Africa, new rice varieties in East Asia, and citrus in the Mediterranean — must remain central alongside the bubonic plague. Broad environmental material such as deforestation or invasive species may only be enrichment if it does not displace the CED crop/pathogen focus.

## Topic 2.7 — Comparison

### Locked instructional spine

Compare the major networks using the same analytic categories:

**Environment | Transportation | Commercial practices | Demand/goods | State/city effects | Productive capacity | Cultural/environmental diffusion**

The comparison lesson should synthesize the Unit 2 causal architecture rather than become a new collection of disconnected facts.

## Durable safeguard

The repository now contains:

- `scripts/lib/ced-unit2-contract.js` — locked Unit 2 instructional contract.
- `scripts/test/ced-unit2-contract.test.js` — automated topic-by-topic audit.
- `.github/workflows/ced-unit2.yml` — dedicated CI gate.
- `scripts/run-tests.js` — also runs the CED contract inside the normal offline validation suite.

The merge gate is now **100%**. A future Unit 2 content edit that removes a required KC, illustrative example, instructional evidence cluster, or target/success-criteria mapping will fail CI instead of silently drifting.
