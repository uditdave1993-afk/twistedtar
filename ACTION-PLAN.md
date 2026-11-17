# SEO Prioritized Action Plan: Twisted Tar

> **Target:** [https://uditdave1993-afk.github.io/twistedtar/](https://uditdave1993-afk.github.io/twistedtar/)  
> **Framework:** Agentic SEO Skill v3.0.1  
> **Status:** Ready for Implementation  
> **Execution Strategy:** Immediate Blockers → Quick Wins → Strategic Architecture

---

## Phase 1: Immediate Blockers (Sprint 1 — 24 to 48 Hours)

These items directly block search engines, invalidate structured data, or degrade Core Web Vitals.

### Task 1.1: Fix Robots.txt Directives
* **Impact:** High | **Effort:** Low (5 mins)
* **Action:**
  1. Remove all fragment rules (`Allow: /#shop`, `Allow: /#heritage`, etc.) from `robots.txt` (invalid under RFC 9309).
  2. Add explicit permissions for modern ethical AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
* **Expected Outcome:** Eliminates crawler warning flags and explicitly licenses LLM answer engines.

### Task 1.2: Remove Meta No-Cache Tags
* **Impact:** High | **Effort:** Low (2 mins)
* **Action:**
  1. Delete lines 9–11 from `index.html`:
     ```html
     <!-- DELETE THESE LINES -->
     <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
     <meta http-equiv="Pragma" content="no-cache">
     <meta http-equiv="Expires" content="0">
     ```
* **Expected Outcome:** Restores normal browser asset caching, dramatically improving repeat visit LCP and INP metrics.

### Task 1.3: Embed Static Brand Schema in `<head>`
* **Impact:** High | **Effort:** Low (15 mins)
* **Action:**
  1. Place an authoritative `ClothingStore` / `Organization` JSON-LD block directly into `index.html` `<head>` so non-JS bots discover it immediately.
  2. Correct the telephone number from `+91-9876543210` to `+91 522 492 8170`.
  3. Include physical atelier `PostalAddress` and social `sameAs` URLs:
     ```json
     <script type="application/ld+json">
     {
       "@context": "https://schema.org",
       "@type": "ClothingStore",
       "name": "Twisted Tar",
       "url": "https://uditdave1993-afk.github.io/twistedtar/",
       "logo": "https://uditdave1993-afk.github.io/twistedtar/assets/logo.svg",
       "description": "Authentic luxury Lucknowi Chikankari kurtis and artisanal ensembles handcrafted in Awadh.",
       "telephone": "+91-522-492-8170",
       "priceRange": "₹₹ - ₹₹₹",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "Studio 14, Heritage Arcade, Hazratganj",
         "addressLocality": "Lucknow",
         "addressRegion": "Uttar Pradesh",
         "postalCode": "226001",
         "addressCountry": "IN"
       },
       "sameAs": [
         "https://instagram.com/twistedtar",
         "https://facebook.com/twistedtar",
         "https://pinterest.com/twistedtar"
       ]
     }
     </script>
     ```
* **Expected Outcome:** Instant Google Knowledge Graph eligibility and Local SEO trust signals.

---

## Phase 2: Quick Wins (Sprint 2 — Days 3 to 7)

High impact optimizations that can be resolved quickly without architectural restructuring.

### Task 2.1: Add Missing Head Metadata
* **Impact:** Medium | **Effort:** Low (10 mins)
* **Action:**
  1. Add static `<link rel="canonical" href="https://uditdave1993-afk.github.io/twistedtar/">` to `index.html`.
  2. Add Twitter Card metadata tags (`twitter:card` set to `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`).
  3. Trim `<meta name="description">` from 177 characters to 155 characters for optimal display on mobile search results.
* **Expected Outcome:** Crisp SERP snippet preview and high CTR social share cards.

### Task 2.2: Deploy `llms.txt` for AI Search Engines (GEO)
* **Impact:** Medium | **Effort:** Low (15 mins)
* **Action:**
  1. Create `/llms.txt` in the root repository.
  2. Document the atelier's history, authentic embroidery stitches (Bakhiya, Phanda, Murri, Jaali, Keel Kangan), fabric types (mulmul, chanderi silk), and product categories.
* **Expected Outcome:** High citation likelihood when users query ChatGPT, Claude, or Perplexity for authentic Lucknowi chikankari recommendations.

### Task 2.3: Clean Sitemaps
* **Impact:** Medium | **Effort:** Low (15 mins)
* **Action:**
  1. Remove hash fragment URLs (`#shop`, `#product/...`) from `sitemap.xml`.
  2. Maintain verified clean canonical URLs with proper `lastmod` and image metadata.
* **Expected Outcome:** Resolves Google Search Console sitemap warning "URL contains a fragment identifier".

---

## Phase 3: Strategic Architecture (Sprint 3 — Month 1)

Foundational improvements for scaling indexation and long-term search dominance.

### Task 3.1: Prerender Static Landing Pages
* **Impact:** Very High | **Effort:** Medium
* **Action:**
  1. Create static HTML entry points or prerendered snapshot pages for top categories (`/3-piece/`, `/2-piece/`, `/short-kurtis/`) and bestsellers.
  2. Ensure each page serves pre-rendered HTML text and product cards directly to crawlers before hydrating React.
* **Expected Outcome:** Multiplies indexed page count by 15x–20x across targeted long-tail search queries (e.g., "authentic 3-piece chanderi chikankari set").

### Task 3.2: Build-Time JSX Compilation
* **Impact:** High | **Effort:** Medium
* **Action:**
  1. Replace client-side Babel transpilation (`babel.min.js`) with a lightweight pre-compilation build step (e.g., Babel CLI or esbuild).
* **Expected Outcome:** Removes ~2.5MB runtime overhead, cutting FCP and LCP by over 60%.

### Task 3.3: Rich Product & Review Schema Enrichment
* **Impact:** High | **Effort:** Medium
* **Action:**
  1. Enrich dynamic `Product` schema with `aggregateRating` (rating value + review count).
  2. Add `hasMerchantReturnPolicy` (10-day exchange window) and `shippingDetails` (free shipping > ₹1,999).
* **Expected Outcome:** Eligibility for Google Shopping rich badges (star ratings, free shipping annotations) on SERP.
