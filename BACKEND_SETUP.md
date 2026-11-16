# Twisted Tar — Atelier E-Commerce CMS & Backend Architecture

Welcome to the backend infrastructure for **Twisted Tar** (Luxury Lucknowi Chikankari Atelier). This architecture transforms the static storefront into a fully manageable, database-driven e-commerce platform with a professional administration dashboard and Rank Math-style SEO engine.

---

## 1. Quick Access Links

| Environment | Storefront URL | Admin Dashboard URL |
| :--- | :--- | :--- |
| **Production (GitHub Pages)** | [https://uditdave1993-afk.github.io/twistedtar/](https://uditdave1993-afk.github.io/twistedtar/) | [https://uditdave1993-afk.github.io/twistedtar/admin.html](https://uditdave1993-afk.github.io/twistedtar/admin.html) |
| **Local Development** | [http://localhost:8080/](http://localhost:8080/) | [http://localhost:8080/admin.html](http://localhost:8080/admin.html) |

### Super Admin Default Credentials
- **Admin Email:** `uditdave1993@gmail.com`
- **Security Key / Password:** `twistedtar2026`

---

## 2. Architecture & Dual-Mode Database Engine

The system uses a **Universal Dual-Mode Database Architecture** designed to run effortlessly on static hosting environments like **GitHub Pages** while offering immediate synchronization with **Supabase Cloud (PostgreSQL)**.

```
┌─────────────────────────────────────────────────────────────────┐
│                 STOREFRONT FRONTEND (index.html)                 │
│         React 18 Component Tree & Dynamic Schema Engine         │
└───────────────────────────────▲─────────────────────────────────┘
                                │ Live Event Bus ('tt_db_updated')
┌───────────────────────────────┴─────────────────────────────────┐
│                 UNIVERSAL DATA LAYER (js/db.js)                 │
│       TwistedTarDB: Products, Categories, CMS, SEO, Media       │
└──────────────┬──────────────────────────────────┬───────────────┘
               │                                  │
    [Mode A: Instant / Offline-First]    [Mode B: Supabase Cloud REST]
               │                                  │
┌──────────────▼────────────────┐       ┌─────────▼─────────────────┐
│     Client-Side LocalStorage   │       │  Supabase Cloud (Postgres)│
│  Instant zero-latency sync    │       │  Row Level Security (RLS) │
│  across browser tabs/windows  │       │  Multi-device persistence │
└───────────────────────────────┘       └───────────────────────────┘
```

1. **Mode A (Zero-Configuration Offline-First):** Out of the box on GitHub Pages, all changes made in `admin.html` (adding products, updating banners, editing copy, changing categories) save to the browser storage layer and dispatch a global `tt_db_updated` event. The live storefront immediately re-renders to display the new content.
2. **Mode B (Live Supabase Cloud PostgreSQL):** When you create a free Supabase project, simply paste your **Project URL** and **Anon Key** into **Website Settings &rarr; Supabase Cloud**. The data layer connects directly to your hosted PostgreSQL database using Supabase's secure REST interface and Row Level Security.

---

## 3. Database Schema (`supabase-schema.sql`)

The complete schema is located in [`supabase-schema.sql`](file:///d:/Arena%20Udit%20Website/supabase-schema.sql). It defines 10 core tables:

1. `admin_users` — Authenticated administrators, role-based access control (`super_admin`, `store_manager`, `content_editor`).
2. `product_categories` — Hierarchical catalog taxonomy (`3 Piece Suit`, `2 Piece Suit`, `Short Kurti`), slugs, and hero imagery.
3. `products` — Complete fashion product catalog with pricing (regular, sale, cost), SKU, status, fabric details, artisan notes, and care instructions.
4. `product_images` — Image gallery with sorting order and descriptive alt text.
5. `product_variations` — Fashion variations (Sizes XS–XXL, Colors, Fabric types, Variation SKUs, Stock counts).
6. `pages` — Content management for all site views (Home, Shop, Heritage, Craftsmanship, Reviews, Journal, Contact) with editable H1/H2/H3 headings, hero banners, and paragraphs.
7. `seo_metadata` — Granular meta titles, meta descriptions, focus keywords, canonical tags, and Open Graph attributes.
8. `media_library` — Centralized asset library storing dimensions, file sizes, MIME types, and alt tags.
9. `redirects` — 301 and 302 URL redirection table to preserve SEO authority.
10. `website_settings` — Brand identity, contact details, social links, announcement bar text, and promo codes.

### Row Level Security (RLS)
- **Public Visitors:** Granted `SELECT` permission strictly on published products, categories, pages, and active settings (`status = 'published'`).
- **Authenticated Admins:** Granted full `ALL` CRUD permissions across all tables.

---

## 4. Admin Dashboard Sections

### 1. Dashboard Overview
- Real-time KPI metric counters: Published Products, Draft Items, Active Categories, Visual CMS Pages.
- Quick navigation shortcuts: "+ New Kurti / Suit", "Add New Category", "Download XML Sitemap", "View Live Storefront".
- Recently updated CMS pages and newest catalog items.

### 2. Products Management (E-Commerce CMS)
- Full CRUD: Add, edit, duplicate, delete, and publish/unpublish.
- **Tabbed Editor:**
  - **General:** Product Title, SKU, Category assignment, Status (Published/Draft), Short Description, Full Editorial Description.
  - **Pricing:** Regular Price (₹), Sale Price (₹), Discount Percentage, Stock Quantity, Cost Price.
  - **Images:** Primary Image URL, Gallery Images, Alt Text.
  - **Variations:** Sizes (XS, S, M, L, XL, XXL), Fabric types (Pure Chanderi Silk, Mulmul Cotton, Scalloped Organza), Fit Type, Embroidery Technique (Bakhiya, Phanda, Murri, Tepchi).
  - **SEO:** Product Meta Title, Meta Description, Focus Keyword, Canonical URL.

### 3. Categories Management
- Pre-populated with:
  1. **3 Piece Suit** (Complete Royal Ensembles)
  2. **2 Piece Suit** (Effortless Silhouette Pairings)
  3. **Short Kurti** (Contemporary Everyday Tunics)
- Dynamic synchronization: Creating a category in the admin panel automatically populates it in the storefront navigation dropdown under **"Our Products"**.

### 4. Pages Management (Visual CMS)
- Edit all 7 store pages:
  - Homepage (`home`)
  - All Collections (`shop`)
  - Awadh Heritage & History (`heritage`)
  - 32-Stitch Craftsmanship (`craftsmanship`)
  - Royal Patrons & Reviews (`reviews`)
  - Atelier Journal (`journal`)
  - Concierge & Bespoke (`contact`)
- Visual form fields for page titles, H1 primary headings, H2 subheadings, hero subtitles, body text, and button CTAs.

### 5. Rank Math-Style SEO Suite
- **Dynamic SEO Scoring (0–100):** Real-time algorithm inspecting:
  - Focus keyword presence in SEO Title
  - Focus keyword presence in Meta Description
  - Focus keyword in URL slug
  - Focus keyword in primary H1 heading
  - Keyword density across content
  - Total content length (word count)
  - Image alt text coverage
  - Title tag length (ideal: 40–60 characters)
  - Meta description length (ideal: 120–160 characters)
- **SERP Snippet Simulator:** Live Google search preview showing how your page appears on mobile and desktop search results.
- **Sitemap & Robots.txt:** Single-click generation and download of valid XML sitemaps (`sitemap.xml`) and search-engine directives (`robots.txt`).
- **301/302 Redirects:** Automatic URL redirect management to eliminate 404 errors.

### 6. Media Library
- Central asset repository with file upload support for JPG, PNG, and WEBP.
- File dimensions, exact byte sizes, and editable alt text tags.
- Direct URL copying for immediate insertion into product galleries or page banners.

### 7. Website Settings
- Brand name, tagline, announcement bar notification banner text.
- Free shipping threshold (₹1,999) and active promo codes (`NOOR10`).
- Atelier phone, concierge email, and physical boutique address.
- Live Supabase Cloud API configuration (URL & Public Key).

---

## 5. Setting Up Supabase Cloud (Optional, for Multi-Device Sync)

1. Sign up for free at [supabase.com](https://supabase.com).
2. Create a new project named `twistedtar-backend`.
3. Open the **SQL Editor** tab in your Supabase dashboard.
4. Copy the entire contents of [`supabase-schema.sql`](file:///d:/Arena%20Udit%20Website/supabase-schema.sql) and click **Run**.
5. Navigate to **Project Settings &rarr; API**.
6. Copy your **Project URL** (`https://<project-ref>.supabase.co`) and **anon public key**.
7. Open the Twisted Tar Admin Dashboard at `/admin.html` &rarr; **Website Settings**.
8. Paste the URL and anon key into the **Supabase Cloud Configuration** section and click **Save Settings**.
9. Click **Test Cloud Connection** to verify live communication.

---

## 6. Frontend Storefront Integration

The storefront in `index.html` connects seamlessly to `js/db.js`:
- Initializes state from `TwistedTarDB.getCategories()` and `TwistedTarDB.getProducts()`.
- Updates dynamically in real-time when the admin updates products or categories.
- Dynamically updates `<title>`, `<meta name="description">`, Open Graph tags, and Schema.org JSON-LD structured data on route changes.
- Features a subtle "Atelier Admin Portal" link in the footer for one-click access to `/admin.html`.
