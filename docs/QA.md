# QA.md — Responsive & Functional Verification Report

This document records the verification results for the **Signature Design Center** Next.js speculative redesign.

## Test Environment
- **Node.js**: v26.4.0
- **Framework**: Next.js 15.5.25 (App Router)
- **CSS**: Tailwind CSS 3.4.17 + Autoprefixer
- **Testing Engine**: Playwright Chromium (v1.63.0) headless automation

---

## Responsive Viewport Matrix

| Viewport Target | Resolution | HTTP Status | Horizontal Overflow | Broken Images | Console Errors | Network Failures | Result |
|---|---|---|---|---|---|---|---|
| **Desktop** | 1440 × 900 | 200 OK | None (`false`) | 0 | 0 | 0 | **PASS** |
| **Laptop / iPad Pro** | 1024 × 768 | 200 OK | None (`false`) | 0 | 0 | 0 | **PASS** |
| **Tablet** | 768 × 1024 | 200 OK | None (`false`) | 0 | 0 | 0 | **PASS** |
| **Mobile (iPhone 14/15/16)** | 390 × 844 | 200 OK | None (`false`) | 0 | 0 | 0 | **PASS** |
| **Operator Route (`/outreach`)** | 1440 × 900 | 200 OK | None (`false`) | 0 | 0 | 0 | **PASS** |

---

## Functional & Interactive Checks

1. **Sticky Header & Top Bar**:
   - Showroom notice, hours (Mon-Sat 9am-5pm), and license CSLB #924506 render legibly.
   - Click-to-call link `tel:7144622980` verified functional.
   - Mobile menu toggles smoothly with >= 48px tap targets and closes on navigation click.

2. **Hero Section**:
   - Authentic 1920x755 luxury kitchen background renders with clean contrast overlay.
   - Headline *"See the Remodel Before You Commit to the Project"* wraps gracefully across mobile and desktop.
   - Primary and secondary CTAs link directly to `#estimate` and `#work`.

3. **2026 Transparent Remodel Packages**:
   - $25,990 Kitchen Package and $14,999 Bath Package cards display all verified inclusions, 10-year warranty badges, and price-beat guarantees.

4. **Filterable Portfolio**:
   - Filter tabs (All, Kitchens, Bathrooms, Living Spaces) switch dynamically with zero layout shifts.
   - All 8 real project images load with natural dimensions and location badges.

5. **Anaheim Showroom & Heritage Spotlight**:
   - 3-image mosaic renders cleanly without aspect ratio distortion.
   - Fred Jarrah ACE certification and UCLA lecturing background clearly highlighted.

6. **Truthful 4-Step Process**:
   - Authentic process step icons (Meet, Concept, Design, Build) display in inverted monochrome circle badges.

7. **Traceable Testimonial Wall**:
   - Verbatim customer quotes from real homeowners with names and cities (Sandra E. Fullerton, Sherry D. Los Angeles, Eileen N. Anaheim, etc.).

8. **Location & Showroom Map**:
   - Embedded Google Maps iframe points accurately to `329 N. State College Blvd, Anaheim, CA 92806`.
   - Driving directions link opens Google Maps in a new tab.

9. **Interactive Estimate Form**:
   - Validates required fields (Name & Phone).
   - Shows instant confirmation state with direct showroom phone number.

10. **Footer Compliance**:
    - Discloses CSLB Contractor's License #924506.
    - Discloses Novenworks speculative redesign notice.
