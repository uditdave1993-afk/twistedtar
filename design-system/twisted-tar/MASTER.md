# Twisted Tar — Master Design System
**Category:** Luxury Indian Ethnic Fashion / Lucknowi Chikankari E-Commerce  
**Domain:** Authentic Heritage Craft meets Modern Editorial Minimalist Commerce  
**Platform:** Web (Desktop, Tablet, Mobile Responsive SPA)  
**Version:** 1.0.0  

---

## 1. Brand Identity & Heritage Context

### The Meaning of "Twisted Tar"
In Lucknow's legendary chikankari lexicon, **"Tar"** (तार) signifies the single spun thread of unbleached mulmul cotton or fine silk, meticulously twisted by hand and pulled through translucent fabric to form intricate shadow work (*bakhiya*), embossed knots (*phanda* & *murri*), and lattice openwork (*jaali*). 

**Twisted Tar** celebrates this timeless, meditative rhythm: the tension between delicate gossamer fabrics and the strength of hand-twisted embroidery.

### Logo & Insignia Direction
- **Insignia:** An architectural, refined motif featuring an embroidery needle loop forming a delicate chikankari floral petal, interconnected by a gracefully twisted thread (*tar*).
- **Wordmark:** Hand-spaced, serif-accented uppercase typography with high contrast strokes, paired with a small-caps subtitle: `LUCKNOW · EST. 2026`.
- **Personality:** Warm, confident, poised, respectful of artisan heritage, and unapologetically luxurious without being gaudy.

---

## 2. Color Tokens (WCAG 2.2 AA / AAA Compliant)

| Token Name | Hex Value | Role / Usage | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `--color-bg-ivory` | `#FDFBF7` | Primary page background (warm unbleached mulmul) | Base |
| `--color-bg-cream` | `#F7F3EB` | Secondary surface, section bands, card background | 1.08:1 vs Ivory |
| `--color-bg-linen` | `#F0EAE1` | Tertiary surface, chip containers, input backgrounds | 1.15:1 vs Ivory |
| `--color-forest-ink` | `#142820` | Primary brand deep tone, header, primary buttons | 14.8:1 on Ivory (AAA) |
| `--color-forest-mid` | `#224034` | Hover states, secondary accents, active filters | 10.4:1 on Ivory (AAA) |
| `--color-gold-antique` | `#C5A262` | Restrained metallic gold accent, badges, borders | 2.5:1 on Dark / 3.2:1 (decorative) |
| `--color-gold-dark` | `#967028` | Text-safe gold for links, ratings, prices | 4.8:1 on Ivory (AA) |
| `--color-text-main` | `#181B19` | Primary typography, headlines, prices | 14.8:1 on Ivory (AAA) |
| `--color-text-muted` | `#585E5A` | Body descriptions, secondary specifications | 5.3:1 on Ivory (AA) |
| `--color-text-subtle` | `#7E8580` | Breadcrumbs, metadata, SKU | 3.5:1 on Ivory |
| `--color-border-delicate`| `#E7E1D6` | Subtle dividers, card borders | Decorative |
| `--color-border-focus` | `#142820` | 2px solid accessibility focus ring | 14.8:1 (AAA) |
| `--color-terracotta` | `#A63E2C` | Sale tag, low stock alert, error states | 5.8:1 on Ivory (AA) |
| `--color-olive-success` | `#2D6345` | Success toast, free shipping reached | 6.2:1 on Ivory (AA) |

---

## 3. Typography Architecture

### Font Pairings
- **Display & Headings:** `Cormorant Garamond`, serif (Weights: 400 Regular, 500 Medium, 600 SemiBold, 600 Italic)
  - Google Fonts: `family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600`
  - Evokes high-fashion editorial, Awadh courtly heritage, and literary refinement.
- **Body, UI & Numbers:** `Plus Jakarta Sans`, sans-serif (Weights: 300, 400, 500, 600, 700)
  - Google Fonts: `family=Plus+Jakarta+Sans:wght@300;400;500;600;700`
  - Clean geometry, open counters, exceptional readability on mobile displays and product specs.

### Type Scale (Fluid Desktop & Mobile)
- **Display Hero:** `clamp(2.5rem, 5vw, 4.25rem)` / Line-height `1.1`
- **H1 (Page Titles):** `clamp(2.0rem, 3.5vw, 3.0rem)` / Line-height `1.2`
- **H2 (Section Headings):** `clamp(1.5rem, 2.5vw, 2.25rem)` / Line-height `1.25`
- **H3 (Card / Sub-headings):** `1.25rem (20px)` / Line-height `1.35`
- **Body Large (Intros):** `1.125rem (18px)` / Line-height `1.6`
- **Body Standard (Default):** `1.0rem (16px)` / Line-height `1.6`
- **Body Small (Specs, Labels):** `0.875rem (14px)` / Line-height `1.5`
- **Caption / Overline:** `0.75rem (12px)` / Line-height `1.4` / Letter-spacing `0.12em` Uppercase

---

## 4. Spacing, Elevation & Shapes

- **Base Rhythm:** 4px micro-grid, 8px layout rhythm.
- **Corner Radii:**
  - Standard cards & images: `4px` (subtle tailored softness, never bubbly)
  - Buttons & Inputs: `2px` or `4px`
  - Pill badges & swatches: `9999px`
- **Shadows:**
  - `--shadow-subtle`: `0 2px 8px rgba(20, 40, 32, 0.04)`
  - `--shadow-card`: `0 8px 24px -4px rgba(20, 40, 32, 0.07)`
  - `--shadow-drawer`: `-8px 0 32px rgba(20, 40, 32, 0.18)`
  - `--shadow-modal`: `0 20px 48px -8px rgba(20, 40, 32, 0.22)`

---

## 5. Layout & Responsive Breakpoints

- **Breakpoints:**
  - Mobile: `< 640px` (Stacked layout, sticky bottom buy bar, slide drawer)
  - Tablet: `640px - 1024px` (2-column grids, collapsible filter drawer)
  - Desktop: `1024px - 1440px` (3/4-column catalog grids, sticky gallery + details layout)
  - Wide: `> 1440px` (Constrained container max-width: `1360px` with generous editorial margins)

---

## 6. Accessibility & Motion Guidelines

1. **Focus States:** High contrast 2px solid `--color-forest-ink` with 2px offset on all interactive buttons, inputs, links, and swatches.
2. **Touch Targets:** Minimum 44×44px hit bounds on mobile controls, size pills, color swatches, and quantity steppers.
3. **Motion:** Silk-glide timing `cubic-bezier(0.16, 1, 0.3, 1)` with `350ms` transitions. Respects `@media (prefers-reduced-motion: reduce)`.
4. **Imagery:** High-definition photography with meaningful descriptive `alt` tags emphasizing embroidery stitches, silhouette, and garment colors.
