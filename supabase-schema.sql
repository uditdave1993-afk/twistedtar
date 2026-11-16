-- ==============================================================================
-- TWISTED TAR — SUPABASE POSTGRESQL DATABASE SCHEMA & MIGRATIONS
-- Authentic Lucknowi Chikankari E-Commerce Store & CMS Engine
-- ==============================================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ADMIN USERS TABLE
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('super_admin', 'admin', 'editor')),
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. PRODUCT CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS product_categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    tagline TEXT,
    description TEXT,
    hero_image TEXT,
    artisan_note TEXT,
    sort_order INT DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'draft')),
    seo_title TEXT,
    meta_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    sku TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category_id TEXT REFERENCES product_categories(id) ON DELETE SET NULL,
    tag TEXT DEFAULT 'Handcrafted',
    badge TEXT,
    price NUMERIC(10,2) NOT NULL,
    original_price NUMERIC(10,2),
    cost_price NUMERIC(10,2),
    currency TEXT DEFAULT 'INR',
    rating NUMERIC(2,1) DEFAULT 5.0,
    review_count INT DEFAULT 0,
    is_new BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    in_stock BOOLEAN DEFAULT TRUE,
    stock_quantity INT DEFAULT 20,
    low_stock_threshold INT DEFAULT 5,
    allow_backorders BOOLEAN DEFAULT FALSE,
    status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
    short_desc TEXT NOT NULL,
    description TEXT NOT NULL,
    fabric TEXT,
    embroidery TEXT,
    craft_hours TEXT,
    fit TEXT,
    care TEXT,
    included_items TEXT,
    occasion TEXT,
    delivery_info TEXT,
    return_info TEXT,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. PRODUCT IMAGES TABLE
CREATE TABLE IF NOT EXISTS product_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    sort_order INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. PRODUCT VARIATIONS TABLE (Sizes, Colors, SKUs, Stock)
CREATE TABLE IF NOT EXISTS product_variations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
    size TEXT NOT NULL,
    color_name TEXT NOT NULL,
    color_hex TEXT,
    sku TEXT,
    price_override NUMERIC(10,2),
    stock INT DEFAULT 5,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. CMS PAGES TABLE
CREATE TABLE IF NOT EXISTS pages (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content_json JSONB NOT NULL DEFAULT '{}'::jsonb,
    status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'draft')),
    seo_title TEXT,
    meta_description TEXT,
    focus_keyword TEXT,
    author TEXT DEFAULT 'Twisted Tar Atelier',
    published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. SEO METADATA TABLE (Rank Math Engine)
CREATE TABLE IF NOT EXISTS seo_metadata (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type TEXT NOT NULL CHECK (entity_type IN ('page', 'product', 'category', 'global')),
    entity_id TEXT NOT NULL,
    seo_title TEXT,
    meta_description TEXT,
    focus_keyword TEXT,
    secondary_keywords TEXT[] DEFAULT '{}',
    canonical_url TEXT,
    robots_index BOOLEAN DEFAULT TRUE,
    robots_follow BOOLEAN DEFAULT TRUE,
    og_title TEXT,
    og_description TEXT,
    og_image TEXT,
    schema_type TEXT DEFAULT 'Product',
    schema_custom_json JSONB,
    seo_score INT DEFAULT 85,
    seo_issues JSONB DEFAULT '[]'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(entity_type, entity_id)
);

-- 8. MEDIA LIBRARY TABLE
CREATE TABLE IF NOT EXISTS media_library (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    file_name TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_size INT,
    dimensions TEXT,
    mime_type TEXT,
    alt_text TEXT,
    folder TEXT DEFAULT 'general',
    uploaded_by TEXT DEFAULT 'admin',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. URL REDIRECTS TABLE (301/302 Redirect Engine)
CREATE TABLE IF NOT EXISTS redirects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_path TEXT UNIQUE NOT NULL,
    target_path TEXT NOT NULL,
    status_code INT DEFAULT 301 CHECK (status_code IN (301, 302)),
    is_active BOOLEAN DEFAULT TRUE,
    hits INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10. WEBSITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS website_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variations ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE redirects ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_settings ENABLE ROW LEVEL SECURITY;

-- PUBLIC READ POLICIES (Storefront visitors can view published items)
CREATE POLICY "Public can view published categories" ON product_categories
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view published products" ON products
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view product images" ON product_images
    FOR SELECT USING (true);

CREATE POLICY "Public can view active product variations" ON product_variations
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view published pages" ON pages
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view seo metadata" ON seo_metadata
    FOR SELECT USING (true);

CREATE POLICY "Public can view active redirects" ON redirects
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view website settings" ON website_settings
    FOR SELECT USING (true);

CREATE POLICY "Public can view media library" ON media_library
    FOR SELECT USING (true);

-- AUTHENTICATED ADMIN FULL ACCESS POLICIES
CREATE POLICY "Authenticated admins have full access to admin_users" ON admin_users
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to categories" ON product_categories
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to products" ON products
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to product_images" ON product_images
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to variations" ON product_variations
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to pages" ON pages
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to seo_metadata" ON seo_metadata
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to media_library" ON media_library
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to redirects" ON redirects
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated admins have full access to website_settings" ON website_settings
    FOR ALL USING (auth.role() = 'authenticated');

-- ==============================================================================
-- INITIAL SEED DATA
-- ==============================================================================

-- 1. Initial Categories
INSERT INTO product_categories (id, name, slug, tagline, description, hero_image, sort_order, status, seo_title, meta_description)
VALUES
('3-piece', '3 Piece Suit', '3-piece-suit', 'Complete Royal Ensembles', 'Regal three-piece sets comprising an intricately embroidered kurti, handcrafted bottom, and an ethereal dupatta.', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80', 1, 'published', '3 Piece Chikankari Suits | Authentic Lucknowi Sets | Twisted Tar', 'Shop luxury handcrafted 3 piece Lucknowi chikankari suit sets in pure chanderi and mulmul cotton with scalloped organza dupattas.'),
('2-piece', '2 Piece Suit', '2-piece-suit', 'Effortless Silhouette Pairings', 'Thoughtfully paired embroidered kurtis with tailored cigarette trousers, flared palazzos, or soft cotton bottoms.', 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80', 2, 'published', '2 Piece Chikankari Suits & Sets | Kurti & Palazzo Pairings | Twisted Tar', 'Discover effortless 2 piece chikankari kurta sets paired with cigarette pants and palazzos hand-embroidered by Awadh artisans.'),
('short', 'Short Kurti', 'short-kurti', 'Contemporary Everyday Tunics', 'Modern, hip-length chikankari tunics designed to pair seamlessly with denim, linen trousers, or culottes.', 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80', 3, 'published', 'Short Chikankari Kurtis & Tunics | Daily Luxury | Twisted Tar', 'Handcrafted short chikankari kurtis and tunics for women. Lightweight breathable mulmul cotton for contemporary elegance.')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, slug = EXCLUDED.slug, sort_order = EXCLUDED.sort_order;

-- 2. Initial Website Settings
INSERT INTO website_settings (key, value)
VALUES
('general', '{
    "site_name": "Twisted Tar",
    "tagline": "The art of chikankari, woven into everyday elegance",
    "origin": "Lucknow, Awadh · Est. 2026",
    "free_shipping_threshold": 1999,
    "currency_code": "INR",
    "currency_symbol": "₹",
    "logo_url": "assets/logo.svg",
    "favicon_url": "assets/logo-icon.svg",
    "announcement_text": "Complimentary Insured Shipping Across India on Orders Above ₹1,999 · Worldwide Courier Available",
    "promo_banner_code": "TWISTED10",
    "promo_banner_discount": "10% Off"
}'::jsonb),
('contact', '{
    "phone": "+91 522 492 8170",
    "email": "concierge@twistedtar.com",
    "address": "Studio 14, Heritage Arcade, Hazratganj, Lucknow, UP 226001",
    "hours": "Monday – Saturday: 10:00 AM – 7:00 PM IST",
    "whatsapp": "+915224928170"
}'::jsonb),
('social', '{
    "instagram": "https://instagram.com/twistedtar",
    "facebook": "https://facebook.com/twistedtar",
    "pinterest": "https://pinterest.com/twistedtar",
    "youtube": "https://youtube.com/@twistedtar"
}'::jsonb),
('navigation', '[
    { "id": "nav-home", "label": "Home", "type": "link", "target": "home" },
    { "id": "nav-products", "label": "Our Products", "type": "dropdown", "items": [
        { "id": "cat-3p", "label": "3 Piece Suit", "target": "shop", "param": "3-piece" },
        { "id": "cat-2p", "label": "2 Piece Suit", "target": "shop", "param": "2-piece" },
        { "id": "cat-sk", "label": "Short Kurti", "target": "shop", "param": "short" }
    ]},
    { "id": "nav-story", "label": "Our Story", "type": "link", "target": "about" },
    { "id": "nav-journal", "label": "Journal", "type": "link", "target": "blog" },
    { "id": "nav-contact", "label": "Contact", "type": "link", "target": "contact" }
]'::jsonb)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
