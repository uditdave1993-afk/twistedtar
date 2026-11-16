// ==============================================================================
// TWISTED TAR — DATABASE & CMS DATA ENGINE (Supabase + Local Dual-Mode)
// ==============================================================================

(function(window) {
  'use strict';

  // --- INITIAL SEED DATA ---
  const DEFAULT_CATEGORIES = [
    {
      id: "3-piece",
      name: "3 Piece Suit",
      slug: "3-piece-suit",
      tagline: "Complete Royal Ensembles",
      description: "Regal three-piece sets comprising an intricately embroidered kurti, handcrafted bottom, and an ethereal dupatta.",
      heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      artisanNote: "Each 3-piece set requires between 60 to 90 hours of delicate needlework by women artisans in rural Awadh.",
      sortOrder: 1,
      status: "published",
      productCount: 4,
      seoTitle: "3 Piece Chikankari Suits | Authentic Lucknowi Sets | Twisted Tar",
      metaDescription: "Shop luxury handcrafted 3 piece Lucknowi chikankari suit sets in pure chanderi and mulmul cotton with scalloped organza dupattas."
    },
    {
      id: "2-piece",
      name: "2 Piece Suit",
      slug: "2-piece-suit",
      tagline: "Effortless Silhouette Pairings",
      description: "Thoughtfully paired embroidered kurtis with tailored cigarette trousers, flared palazzos, or soft cotton bottoms.",
      heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
      artisanNote: "Engineered for graceful daily movement with deep shadow work (Bakhiya) that breathes effortlessly.",
      sortOrder: 2,
      status: "published",
      productCount: 4,
      seoTitle: "2 Piece Chikankari Suits & Sets | Kurti & Palazzo Pairings | Twisted Tar",
      metaDescription: "Discover effortless 2 piece chikankari kurta sets paired with cigarette pants and palazzos hand-embroidered by Awadh artisans."
    },
    {
      id: "short",
      name: "Short Kurti",
      slug: "short-kurti",
      tagline: "Contemporary Everyday Tunics",
      description: "Modern, hip-length chikankari tunics designed to pair seamlessly with denim, linen trousers, or culottes.",
      heroImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
      artisanNote: "A modern tribute to the classic 'Angarkha' and Lucknowi tunic, featuring delicate yoke and sleeve embroidery.",
      sortOrder: 3,
      status: "published",
      productCount: 4,
      seoTitle: "Short Chikankari Kurtis & Tunics | Daily Luxury | Twisted Tar",
      metaDescription: "Handcrafted short chikankari kurtis and tunics for women. Lightweight breathable mulmul cotton for contemporary elegance."
    }
  ];

  const DEFAULT_PRODUCTS = [
    {
      id: "tt-3p-01",
      slug: "hazratganj-noor-3-piece-chanderi-set",
      sku: "TT-3P-001",
      name: "Hazratganj Noor Chanderi Set",
      category: "3-piece",
      categoryName: "3 Piece Suit",
      tag: "Bestseller",
      badge: "Masterpiece",
      price: 6890,
      originalPrice: 8490,
      costPrice: 3200,
      currency: "INR",
      rating: 4.9,
      reviewCount: 38,
      isNew: false,
      isFeatured: true,
      inStock: true,
      stockQuantity: 18,
      status: "published",
      shortDesc: "A timeless warm ivory Chanderi silk kurti with antique gold zari accents, pure cotton lining, tailored pants, and a scalloped organza dupatta.",
      description: "The Hazratganj Noor set is our quintessential festive tribute to the evening promenade of old Lucknow. Woven on handloom Chanderi with a fine metallic sheen, it showcases over 68 hours of intricate Bakhiya and Phanda work created by generational master artisans. The set includes a straight-cut kurti with gossamer mulmul lining, comfortable elasticated cotton-silk trousers, and an ethereal organza dupatta framed with hand-cut scalloped chikankari borders.",
      fabric: "Handwoven Chanderi Silk with 100% Breathable Mulmul Lining",
      embroidery: "Handcrafted Bakhiya (Shadow Work), Phanda, and delicate Ghaspatti",
      craftHours: "68 hours of hand needlework",
      fit: "Straight silhouette with side slits and comfortable ease",
      care: "Dry clean recommended for first two washes; subsequently gentle hand wash in cold water with mild silk detergent.",
      includedItems: "1 Kurti, 1 Tapered Bottom Pant, 1 Hand-embroidered Scalloped Dupatta (2.4m)",
      occasion: "Festive, Wedding, Evening Soirée",
      colors: [
        { name: "Warm Ivory & Gold", hex: "#FDFBF7", imageIndex: 0 },
        { name: "Pistachio Mist", hex: "#D8E3D8", imageIndex: 1 },
        { name: "Blush Champagne", hex: "#EFE3DA", imageIndex: 2 }
      ],
      sizes: [
        { size: "XS", stock: 3, sku: "TT-3P-001-XS" },
        { size: "S", stock: 5, sku: "TT-3P-001-S" },
        { size: "M", stock: 8, sku: "TT-3P-001-M" },
        { size: "L", stock: 4, sku: "TT-3P-001-L" },
        { size: "XL", stock: 2, sku: "TT-3P-001-XL" },
        { size: "XXL", stock: 1, sku: "TT-3P-001-XXL" }
      ],
      images: [
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
      ],
      seo: {
        focusKeyword: "3 piece chikankari suit",
        title: "Hazratganj Noor 3 Piece Chanderi Suit Set | Twisted Tar",
        description: "Buy Hazratganj Noor authentic Lucknowi 3 piece chikankari suit set in pure Chanderi silk with scalloped organza dupatta. Handcrafted in Lucknow.",
        score: 92
      }
    },
    {
      id: "tt-3p-02",
      slug: "begum-akhtar-mulberry-silk-set",
      sku: "TT-3P-002",
      name: "Begum Akhtar Mulberry Silk 3-Piece",
      category: "3-piece",
      categoryName: "3 Piece Suit",
      tag: "Heritage",
      badge: "Artisan Select",
      price: 8950,
      originalPrice: 10990,
      costPrice: 4200,
      currency: "INR",
      rating: 5.0,
      reviewCount: 22,
      isNew: true,
      isFeatured: true,
      inStock: true,
      stockQuantity: 12,
      status: "published",
      shortDesc: "Royal forest green pure mulberry silk 3-piece set adorned with antique gold Murri knots and fine Jaali openwork.",
      description: "Inspired by the legendary ghazal maestro of Lucknow, the Begum Akhtar ensemble radiates quiet nobility. Crafted on rich, fluid mulberry silk, its neckline and hemlines feature master-level Murri (grain knots) and painstakingly constructed Jaali needle windows made without severing warp or weft yarns. Includes handloom silk palazzo bottoms and a floating tissue-silk dupatta.",
      fabric: "100% Pure Mulberry Silk with Silk Crepe Lining",
      embroidery: "Murri, Keel Kangan, and Needle Openwork Jaali",
      craftHours: "84 hours of master needlework",
      fit: "Classic Awadh Angarkha-cut with gentle flared hem",
      care: "Strictly dry clean only. Store in muslin cloth with cedar balls.",
      includedItems: "1 Mulberry Silk Kurti, 1 Palazzo Pant, 1 Hand-embroidered Tissue Silk Dupatta",
      occasion: "Festive Gala, Royal Weddings, Traditional Evenings",
      colors: [
        { name: "Royal Forest Green", hex: "#142820", imageIndex: 0 },
        { name: "Raw Silk Ochre", hex: "#C5A262", imageIndex: 1 }
      ],
      sizes: [
        { size: "S", stock: 3, sku: "TT-3P-002-S" },
        { size: "M", stock: 4, sku: "TT-3P-002-M" },
        { size: "L", stock: 3, sku: "TT-3P-002-L" },
        { size: "XL", stock: 2, sku: "TT-3P-002-XL" }
      ],
      images: [
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
      ],
      seo: {
        focusKeyword: "mulberry silk chikankari suit",
        title: "Begum Akhtar Mulberry Silk 3-Piece Chikankari Suit | Twisted Tar",
        description: "Regal forest green mulberry silk 3 piece chikankari suit set featuring authentic Murri and Jaali needlework. Shop Twisted Tar.",
        score: 88
      }
    },
    {
      id: "tt-2p-01",
      slug: "noor-e-awadh-2-piece-kurti-set",
      sku: "TT-2P-001",
      name: "Noor-e-Awadh 2-Piece Kurti Set",
      category: "2-piece",
      categoryName: "2 Piece Suit",
      tag: "Popular",
      badge: "Daily Luxury",
      price: 4450,
      originalPrice: 5200,
      costPrice: 2100,
      currency: "INR",
      rating: 4.8,
      reviewCount: 45,
      isNew: false,
      isFeatured: true,
      inStock: true,
      stockQuantity: 24,
      status: "published",
      shortDesc: "Breathable pure mulmul cotton kurti with delicate all-over Bakhiya shadow work paired with tapered cigarette trousers.",
      description: "Designed for balmy afternoons and sophisticated cultural dinners, the Noor-e-Awadh coordinate set balances ancestral needlework with modern mobility. Spun from featherlight 80-count Indian mulmul, the kurti displays graceful paisley motifs (Kalka) worked on the reverse side to project a soft shadowy outline on the front.",
      fabric: "Pure 80s Count Breathable Mulmul Cotton",
      embroidery: "Fine Bakhiya, Tepchi, and Pechni border stitches",
      craftHours: "42 hours of needlecraft",
      fit: "Relaxed regular fit with front button placket and side slits",
      care: "Machine wash on delicate cold cycle or hand wash with mild liquid soap; line dry in shade.",
      includedItems: "1 Long Kurti, 1 Cigarette Trouser with elasticated waist",
      occasion: "Workwear, Casual Lunches, Festive Visits",
      colors: [
        { name: "Pale Mint", hex: "#E2ECE9", imageIndex: 0 },
        { name: "Ivory Whisper", hex: "#FDFBF7", imageIndex: 1 },
        { name: "Powder Blue", hex: "#D6E4EE", imageIndex: 2 }
      ],
      sizes: [
        { size: "XS", stock: 4, sku: "TT-2P-001-XS" },
        { size: "S", stock: 8, sku: "TT-2P-001-S" },
        { size: "M", stock: 10, sku: "TT-2P-001-M" },
        { size: "L", stock: 6, sku: "TT-2P-001-L" },
        { size: "XL", stock: 3, sku: "TT-2P-001-XL" }
      ],
      images: [
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
      ],
      seo: {
        focusKeyword: "2 piece chikankari kurti set",
        title: "Noor-e-Awadh 2 Piece Mulmul Chikankari Kurti Set | Twisted Tar",
        description: "Handcrafted 2 piece chikankari kurti set in pure mulmul cotton with cigarette pants. Lightweight everyday luxury from Lucknow.",
        score: 90
      }
    },
    {
      id: "tt-sk-01",
      slug: "gulmarg-whispers-modal-short-kurti",
      sku: "TT-SK-001",
      name: "Gulmarg Whispers Short Kurti",
      category: "short",
      categoryName: "Short Kurti",
      tag: "New Arrival",
      badge: "Trending",
      price: 2690,
      originalPrice: 3290,
      costPrice: 1100,
      currency: "INR",
      rating: 4.9,
      reviewCount: 31,
      isNew: true,
      isFeatured: true,
      inStock: true,
      stockQuantity: 30,
      status: "published",
      shortDesc: "Contemporary hip-length Chikankari tunic handcrafted in buttery modal silk with tonal floral yoke embroidery.",
      description: "Our signature contemporary silhouette designed for the modern lifestyle. The Gulmarg Whispers tunic falls gracefully at the mid-hip, pairing effortlessly with denim, wide-leg linen trousers, or skirts. Spun from sustainable Lenzing modal silk that drapes like liquid, it features dense Phanda work on the collar, neckline, and cuffs.",
      fabric: "Pure Eco-Lenzing Modal Silk with fluid drape",
      embroidery: "Dense Phanda, Ghaspatti, and floral neckline yoke work",
      craftHours: "28 hours of artisan handcraft",
      fit: "Modern hip-length tunic with curved hemline and three-quarter sleeves",
      care: "Hand wash cold with organic detergent or gentle machine cycle. Cool iron on reverse.",
      includedItems: "1 Hand-embroidered Short Tunic",
      occasion: "Office Wear, Weekend Brunches, Travel, Daily Chic",
      colors: [
        { name: "Sage Jade", hex: "#C8D6C9", imageIndex: 0 },
        { name: "Warm Ivory", hex: "#FDFBF7", imageIndex: 1 },
        { name: "Dusty Terracotta", hex: "#DFB8A6", imageIndex: 2 }
      ],
      sizes: [
        { size: "XS", stock: 5, sku: "TT-SK-001-XS" },
        { size: "S", stock: 9, sku: "TT-SK-001-S" },
        { size: "M", stock: 12, sku: "TT-SK-001-M" },
        { size: "L", stock: 8, sku: "TT-SK-001-L" },
        { size: "XL", stock: 4, sku: "TT-SK-001-XL" }
      ],
      images: [
        "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
      ],
      seo: {
        focusKeyword: "short chikankari kurti tunic",
        title: "Gulmarg Whispers Short Chikankari Kurti Tunic | Twisted Tar",
        description: "Contemporary short chikankari kurti in modal silk with dense floral yoke embroidery. Pairs effortlessly with denim and trousers.",
        score: 94
      }
    }
  ];

  const DEFAULT_PAGES = [
    {
      id: "page-home",
      title: "Home — Twisted Tar Atelier",
      slug: "home",
      status: "published",
      updatedAt: new Date().toISOString(),
      seoTitle: "Twisted Tar — Authentic Lucknowi Chikankari Kurtis & Suits",
      metaDescription: "Discover Twisted Tar's luxury collection of handcrafted Lucknowi chikankari kurtis, 3-piece suit sets, 2-piece sets, and short tunics in pure mulmul and chanderi.",
      focusKeyword: "lucknowi chikankari kurtis",
      content: {
        h1: "The Art of Chikankari, Woven into Everyday Elegance",
        h2: "Curated Awadh Collections",
        heroSubtitle: "Handcrafted by master women needlecraft artisans in Lucknow. Woven in gossamer mulmul cotton, handloom Chanderi silk, and organic modal.",
        heroButtonText: "Explore Collections",
        heroButtonLink: "#shop",
        secondaryButtonText: "Our Craft Journey",
        secondaryButtonLink: "#about",
        bannerPromoText: "Complimentary Insured Shipping Across India on Orders Above ₹1,999",
        promoCode: "TWISTED10"
      }
    },
    {
      id: "page-shop",
      title: "Shop Collection — All Kurtis & Ensembles",
      slug: "shop",
      status: "published",
      updatedAt: new Date().toISOString(),
      seoTitle: "Shop Lucknowi Chikankari Kurtis & Suits | Twisted Tar Catalog",
      metaDescription: "Browse all 12 authentic hand-embroidered Lucknowi chikankari ensembles. Filter by size, 3-piece, 2-piece, and short kurti collections.",
      focusKeyword: "buy chikankari kurtis online",
      content: {
        h1: "The Chikankari Atelier Catalog",
        description: "Every ensemble in our catalog represents 28 to 90 hours of painstaking hand needlecraft. Browse by silhouette, size, and Awadh heritage palette."
      }
    },
    {
      id: "page-about",
      title: "Our Story & Heritage — Twisted Tar",
      slug: "about",
      status: "published",
      updatedAt: new Date().toISOString(),
      seoTitle: "Our Craft Journey & Artisans | Twisted Tar Lucknow",
      metaDescription: "Learn about Twisted Tar's mission to preserve ancestral Lucknowi chikankari, empower generational women artisans, and sustain authentic court stitches.",
      focusKeyword: "chikankari artisans lucknow",
      content: {
        h1: "Preserving the Whispering Thread of Awadh",
        storyParagraph1: "In Old Lucknow, embroidery is not merely an embellishment—it is a spoken dialect passed down from mother to daughter across courtyard verandahs.",
        storyParagraph2: "Twisted Tar was born out of deep reverence for the thirty-two court stitches of Awadh. In an era dominated by high-speed machine imitations that sever fabric fibres, our atelier remains stubbornly rooted in patient, slow needlecraft.",
        artisanStat: "120+ Generational Women Needlecraft Artisans in Rural Lucknow",
        craftGuarantee: "100% Genuine Hand Needlework — Never Machine Stamped"
      }
    },
    {
      id: "page-contact",
      title: "Contact Atelier Concierge",
      slug: "contact",
      status: "published",
      updatedAt: new Date().toISOString(),
      seoTitle: "Contact Twisted Tar | Lucknow Atelier & Client Concierge",
      metaDescription: "Reach Twisted Tar's client concierge for custom bridal sizing, order tracking, and fabric inquiries in Hazratganj, Lucknow.",
      focusKeyword: "contact twisted tar",
      content: {
        h1: "Atelier Concierge",
        address: "Studio 14, Heritage Arcade, Hazratganj, Lucknow, UP 226001",
        phone: "+91 522 492 8170",
        email: "concierge@twistedtar.com",
        hours: "Monday – Saturday: 10:00 AM – 7:00 PM IST"
      }
    }
  ];

  const DEFAULT_MEDIA = [
    {
      id: "med-1",
      fileName: "logo.svg",
      fileUrl: "assets/logo.svg",
      fileSize: 4200,
      dimensions: "240 x 60",
      mimeType: "image/svg+xml",
      altText: "Twisted Tar Insignia Logo",
      folder: "branding",
      createdAt: new Date().toISOString()
    },
    {
      id: "med-2",
      fileName: "hazratganj-noor-1.jpg",
      fileUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      fileSize: 145000,
      dimensions: "1200 x 800",
      mimeType: "image/jpeg",
      altText: "Hazratganj Noor 3-Piece Chanderi Kurti in Warm Ivory",
      folder: "products",
      createdAt: new Date().toISOString()
    },
    {
      id: "med-3",
      fileName: "begum-akhtar-silk.jpg",
      fileUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
      fileSize: 158000,
      dimensions: "1200 x 800",
      mimeType: "image/jpeg",
      altText: "Begum Akhtar Pure Mulberry Silk Ensemble",
      folder: "products",
      createdAt: new Date().toISOString()
    },
    {
      id: "med-4",
      fileName: "gulmarg-modal-tunic.jpg",
      fileUrl: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80",
      fileSize: 132000,
      dimensions: "1200 x 800",
      mimeType: "image/jpeg",
      altText: "Gulmarg Whispers Modal Silk Short Kurti",
      folder: "products",
      createdAt: new Date().toISOString()
    }
  ];

  const DEFAULT_SETTINGS = {
    general: {
      siteName: "Twisted Tar",
      tagline: "The art of chikankari, woven into everyday elegance",
      origin: "Lucknow, Awadh · Est. 2026",
      freeShippingThreshold: 1999,
      currencyCode: "INR",
      currencySymbol: "₹",
      logoUrl: "assets/logo.svg",
      faviconUrl: "assets/logo-icon.svg",
      announcementText: "Complimentary Insured Shipping Across India on Orders Above ₹1,999 · Worldwide Courier Available",
      promoCode: "TWISTED10",
      promoDiscount: "10% Off"
    },
    contact: {
      phone: "+91 522 492 8170",
      email: "concierge@twistedtar.com",
      address: "Studio 14, Heritage Arcade, Hazratganj, Lucknow, UP 226001",
      hours: "Monday – Saturday: 10:00 AM – 7:00 PM IST",
      whatsapp: "+915224928170"
    },
    social: {
      instagram: "https://instagram.com/twistedtar",
      facebook: "https://facebook.com/twistedtar",
      pinterest: "https://pinterest.com/twistedtar",
      youtube: "https://youtube.com/@twistedtar"
    },
    supabase: {
      url: "",
      anonKey: "",
      status: "Local Storage Mode (Enter Supabase credentials to sync with cloud)"
    }
  };

  // --- LOCAL PERSISTENCE STORAGE HELPER ---
  const Storage = {
    get(key, fallback) {
      try {
        const item = localStorage.getItem(`tt_db_${key}`);
        return item ? JSON.parse(item) : fallback;
      } catch (e) {
        console.warn(`Storage get error for ${key}:`, e);
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(`tt_db_${key}`, JSON.stringify(value));
        // Also fire storage event for cross-tab or cross-window instant sync
        window.dispatchEvent(new CustomEvent('tt_db_updated', { detail: { key, value } }));
        return true;
      } catch (e) {
        console.error(`Storage set error for ${key}:`, e);
        return false;
      }
    }
  };

  // --- REAL-TIME SEO AUDIT & CONTENT OPTIMIZATION ENGINE ---
  function calculateSeoScore({ title, metaDescription, focusKeyword, slug, contentText, headings = [], images = [] }) {
    if (!focusKeyword || focusKeyword.trim() === "") {
      return {
        score: 40,
        status: "bad",
        tests: [
          { label: "Focus Keyword Defined", pass: false, desc: "Add a focus keyword to evaluate search optimization." }
        ]
      };
    }

    const kw = focusKeyword.trim().toLowerCase();
    const t = (title || "").toLowerCase();
    const d = (metaDescription || "").toLowerCase();
    const s = (slug || "").toLowerCase();
    const c = (contentText || "").toLowerCase();

    const tests = [];
    let score = 0;

    // 1. Keyword in SEO Title (12 pts)
    const kwInTitle = t.includes(kw);
    tests.push({
      label: "Keyword in SEO Title",
      pass: kwInTitle,
      weight: 12,
      desc: kwInTitle ? "Focus keyword found in SEO title." : "Add your focus keyword near the beginning of your SEO Title."
    });
    if (kwInTitle) score += 12;

    // 2. Keyword at beginning of Title (8 pts)
    const kwAtStartTitle = t.startsWith(kw) || t.indexOf(kw) < 15;
    tests.push({
      label: "Keyword Near Start of Title",
      pass: kwAtStartTitle,
      weight: 8,
      desc: kwAtStartTitle ? "Focus keyword appears near the beginning of the title." : "Move the keyword closer to the start of the title."
    });
    if (kwAtStartTitle) score += 8;

    // 3. SEO Title Length (50-60 chars) (10 pts)
    const titleLen = (title || "").length;
    const titleLenPass = titleLen >= 45 && titleLen <= 65;
    tests.push({
      label: "Title Length (45-65 characters)",
      pass: titleLenPass,
      weight: 10,
      desc: titleLenPass ? `Optimal length (${titleLen} characters).` : `Current title length is ${titleLen} characters. Aim for 50-60.`
    });
    if (titleLenPass) score += 10;
    else if (titleLen > 25 && titleLen < 80) score += 5;

    // 4. Keyword in Meta Description (12 pts)
    const kwInDesc = d.includes(kw);
    tests.push({
      label: "Keyword in Meta Description",
      pass: kwInDesc,
      weight: 12,
      desc: kwInDesc ? "Focus keyword found in meta description." : "Include your focus keyword in the meta description."
    });
    if (kwInDesc) score += 12;

    // 5. Meta Description Length (120-160 chars) (10 pts)
    const descLen = (metaDescription || "").length;
    const descLenPass = descLen >= 115 && descLen <= 165;
    tests.push({
      label: "Meta Description Length (120-160 characters)",
      pass: descLenPass,
      weight: 10,
      desc: descLenPass ? `Great length (${descLen} characters).` : `Current description is ${descLen} characters. Aim for 120-160.`
    });
    if (descLenPass) score += 10;
    else if (descLen > 60 && descLen < 200) score += 5;

    // 6. Keyword in URL / Slug (10 pts)
    const kwSlugPart = kw.replace(/\s+/g, "-");
    const kwInSlug = s.includes(kwSlugPart) || s.includes(kw.split(" ")[0]);
    tests.push({
      label: "Keyword in URL Slug",
      pass: kwInSlug,
      weight: 10,
      desc: kwInSlug ? "Focus keyword present in the URL slug." : `Include "${kwSlugPart}" in the URL slug.`
    });
    if (kwInSlug) score += 10;

    // 7. Keyword in H1 / Subheadings (10 pts)
    const kwInHeadings = headings.some(h => (h || "").toLowerCase().includes(kw));
    tests.push({
      label: "Keyword in H1 or Subheadings",
      pass: kwInHeadings,
      weight: 10,
      desc: kwInHeadings ? "Keyword appears in major headings." : "Add your focus keyword to an H1 or H2 heading."
    });
    if (kwInHeadings) score += 10;

    // 8. Keyword in Content & Density (15 pts)
    const words = c.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const kwOccurrences = (c.match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    const density = wordCount > 0 ? ((kwOccurrences * kw.split(" ").length) / wordCount) * 100 : 0;
    const densityPass = kwOccurrences >= 2 && density >= 0.7 && density <= 3.0;

    tests.push({
      label: "Keyword Density in Content (0.7% - 3.0%)",
      pass: densityPass,
      weight: 15,
      desc: densityPass
        ? `Ideal keyword density (${density.toFixed(1)}%, used ${kwOccurrences} times).`
        : `Keyword density is ${density.toFixed(1)}% (${kwOccurrences} occurrences in ${wordCount} words). Aim for 1-2.5%.`
    });
    if (densityPass) score += 15;
    else if (kwOccurrences >= 1) score += 8;

    // 9. Content Length (100+ for products, 300+ for pages) (13 pts)
    const contentLenPass = wordCount >= 100;
    tests.push({
      label: "Comprehensive Content Length",
      pass: contentLenPass,
      weight: 13,
      desc: contentLenPass ? `Substantial content (${wordCount} words).` : `Content is brief (${wordCount} words). Add more artisan and fabric details.`
    });
    if (wordCount >= 250) score += 13;
    else if (wordCount >= 100) score += 8;
    else score += 3;

    // 10. Image Alt Attributes (10 pts)
    const totalImages = images.length;
    const imagesWithAlt = images.filter(img => typeof img === 'object' ? img.altText && img.altText.trim() : true).length;
    const imgAltPass = totalImages > 0 && imagesWithAlt === totalImages;
    tests.push({
      label: "Image Alt Attributes",
      pass: imgAltPass,
      weight: 10,
      desc: imgAltPass ? `All ${totalImages} image(s) have descriptive alt attributes.` : "Add descriptive alt text to all product and gallery images."
    });
    if (imgAltPass) score += 10;
    else if (imagesWithAlt > 0) score += 5;

    // Normalize final score
    score = Math.min(100, Math.max(0, score));

    const status = score >= 80 ? "good" : score >= 50 ? "ok" : "poor";

    return {
      score,
      status,
      density: density.toFixed(2),
      wordCount,
      kwOccurrences,
      tests
    };
  }

  // --- XML SITEMAP & ROBOTS.TXT GENERATOR ---
  function generateXmlSitemap(baseUrl = "https://uditdave1993-afk.github.io/twistedtar") {
    const categories = Storage.get("categories", DEFAULT_CATEGORIES);
    const products = Storage.get("products", DEFAULT_PRODUCTS);
    const pages = Storage.get("pages", DEFAULT_PAGES);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
    xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

    // Root URL
    xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

    // Pages
    pages.forEach(p => {
      if (p.status === 'published' && p.slug !== 'home') {
        xml += `  <url>\n    <loc>${baseUrl}/#${p.slug}</loc>\n    <lastmod>${p.updatedAt ? p.updatedAt.split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
      }
    });

    // Categories
    categories.forEach(c => {
      if (c.status === 'published') {
        xml += `  <url>\n    <loc>${baseUrl}/#shop/${c.id}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
      }
    });

    // Products
    products.forEach(prod => {
      if (prod.status === 'published') {
        xml += `  <url>\n    <loc>${baseUrl}/#product/${prod.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n`;
        if (prod.images && prod.images.length > 0) {
          xml += `    <image:image>\n      <image:loc>${prod.images[0]}</image:loc>\n      <image:title>${prod.name.replace(/&/g, '&amp;')}</image:title>\n    </image:image>\n`;
        }
        xml += `  </url>\n`;
      }
    });

    xml += `</urlset>`;
    return xml;
  }

  function generateRobotsTxt(baseUrl = "https://uditdave1993-afk.github.io/twistedtar") {
    return `# Twisted Tar Robots.txt
User-agent: *
Allow: /
Disallow: /admin.html
Disallow: /admin

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;
  }

  // --- PUBLIC API OBJECT ---
  const TwistedTarDB = {
    // Categories CRUD
    getCategories() {
      return Storage.get("categories", DEFAULT_CATEGORIES);
    },
    saveCategory(category) {
      const list = this.getCategories();
      const idx = list.findIndex(c => c.id === category.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...category, updatedAt: new Date().toISOString() };
      } else {
        list.push({ ...category, id: category.id || `cat-${Date.now()}`, createdAt: new Date().toISOString() });
      }
      Storage.set("categories", list);
      return list;
    },
    deleteCategory(id) {
      const list = this.getCategories().filter(c => c.id !== id);
      Storage.set("categories", list);
      return list;
    },

    // Products CRUD
    getProducts() {
      return Storage.get("products", DEFAULT_PRODUCTS);
    },
    getProductById(id) {
      return this.getProducts().find(p => p.id === id || p.slug === id) || null;
    },
    saveProduct(product) {
      const list = this.getProducts();
      const idx = list.findIndex(p => p.id === product.id);
      let updated;
      if (idx >= 0) {
        updated = { ...list[idx], ...product, updatedAt: new Date().toISOString() };
        list[idx] = updated;
      } else {
        const newId = product.id || `tt-prod-${Date.now()}`;
        updated = {
          ...product,
          id: newId,
          slug: product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        list.unshift(updated);
      }
      Storage.set("products", list);
      return updated;
    },
    deleteProduct(id) {
      const list = this.getProducts().filter(p => p.id !== id);
      Storage.set("products", list);
      return list;
    },

    // Pages CRUD
    getPages() {
      return Storage.get("pages", DEFAULT_PAGES);
    },
    getPageById(id) {
      return this.getPages().find(p => p.id === id || p.slug === id) || null;
    },
    savePage(page) {
      const list = this.getPages();
      const idx = list.findIndex(p => p.id === page.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...page, updatedAt: new Date().toISOString() };
      } else {
        list.push({ ...page, id: page.id || `page-${Date.now()}`, updatedAt: new Date().toISOString() });
      }
      Storage.set("pages", list);
      return list;
    },

    // Media Library CRUD
    getMedia() {
      return Storage.get("media", DEFAULT_MEDIA);
    },
    saveMedia(item) {
      const list = this.getMedia();
      const newItem = {
        ...item,
        id: item.id || `med-${Date.now()}`,
        createdAt: new Date().toISOString()
      };
      list.unshift(newItem);
      Storage.set("media", list);
      return newItem;
    },
    deleteMedia(id) {
      const list = this.getMedia().filter(m => m.id !== id);
      Storage.set("media", list);
      return list;
    },

    // Settings
    getSettings() {
      return Storage.get("settings", DEFAULT_SETTINGS);
    },
    saveSettings(newSettings) {
      const current = this.getSettings();
      const merged = { ...current, ...newSettings };
      Storage.set("settings", merged);
      return merged;
    },

    // Redirects
    getRedirects() {
      return Storage.get("redirects", [
        { id: "red-1", sourcePath: "/collection/3-piece", targetPath: "#shop/3-piece", statusCode: 301, hits: 14 },
        { id: "red-2", sourcePath: "/suits", targetPath: "#shop", statusCode: 301, hits: 42 }
      ]);
    },
    saveRedirect(item) {
      const list = this.getRedirects();
      const idx = list.findIndex(r => r.id === item.id);
      if (idx >= 0) list[idx] = item;
      else list.push({ ...item, id: item.id || `red-${Date.now()}`, hits: 0 });
      Storage.set("redirects", list);
      return list;
    },
    deleteRedirect(id) {
      const list = this.getRedirects().filter(r => r.id !== id);
      Storage.set("redirects", list);
      return list;
    },

    // Utilities
    calculateSeoScore,
    generateXmlSitemap,
    generateRobotsTxt
  };

  window.TwistedTarDB = TwistedTarDB;
})(window);
