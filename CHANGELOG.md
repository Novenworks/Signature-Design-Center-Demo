# CHANGELOG.md — Signature Design Center Redesign

This changelog records all significant decisions, architectural rules, factual verifications, asset plans, and delivery milestones for the clean rebuild of the Signature Design Center demo.

## [2026-09-13] — Clean Rebuild Initialization & Research Verification

### Verified Facts & Agency Sanity Check
- **Agency Credit**: Checked original site source and footer. No agency credit found. Site footer declares "© 2019 All Rights Reserved. By Signature Design Center | Contractor’s License: 924506".
- **Business History**: Founded in 1986 in Anaheim; family-owned and operated for 40 years.
- **Licensing**: California CSLB General Contractor License #924506 verified.
- **Physical Facility**: Physical showroom at 329 N. State College Blvd, Anaheim, CA 92806; in-house cabinet fabrication facility.
- **Contact Channels**: Phone `(714) 462-2980` (primary campaign line) and `(714) 533-9595` (showroom line); Email `signature-design@sbcglobal.net`.
- **2026 Active Offers**: Verified through TheHomeMag Orange County circular:
  - \$25,990 10'x12' Full Kitchen Remodel (Granite/Quartz, stainless sink, American-made cabinets)
  - \$14,999 5'x9' Full Bath Remodel (Walk-in shower or tub, floor-to-ceiling tile, vanity up to 36", frameless sliding door)
  - 10-Year Labor Warranty & Limited Lifetime Material Warranties
  - 10% Competitor Price Beat Guarantee
  - 10% Senior, Military & First Responder Discount
  - Free In-Home Consultation & 3D Computer-Generated Elevations
- **Reputation & Proof**: A+ BBB Rating; 6 traceable customer reviews with verified names & cities (Sandra E. Fullerton, Sherry D. Los Angeles, Eileen N. Anaheim, Joanne M. Orange County, Rachael K. Chino, Yamen S. Mission Viejo).

### Architectural & Process Decisions
- **Starting Directory**: `c:\Projects\Signature-Design-Center-Demo-2` confirmed empty before start.
- **GitHub Target**: Inspected `Novenworks/Signature-Design-Center-Demo`. Existing remote contains previous history, so per prompt rules, this clean rebuild will be pushed to a dedicated branch `cursor-clean-rebuild` without overwriting or force-pushing.
- **Framework Stack**: Next.js App Router (15+), TypeScript, Tailwind CSS, Lucide React icons.
- **Asset Acquisition Strategy**: Direct acquisition of 15+ authentic first-party high-resolution images from `ocremodel.com` covering hero displays, showroom showcases, real kitchen and bath remodels, living spaces, brand partners, and the authentic logo.
