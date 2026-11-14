// Twisted Tar - Brand, Product Catalog & Knowledge Base
// Authentic Lucknowi Chikankari E-Commerce Data

export const BRAND = {
  name: "Twisted Tar",
  tagline: "The art of chikankari, woven into everyday elegance",
  description: "Authentic Lucknowi chikankari kurtis handcrafted by master artisans. Woven from gossamer mulmul cotton, handwoven chanderi silk, and pure georgette.",
  origin: "Lucknow, Awadh · Est. 2026",
  currency: {
    symbol: "₹",
    code: "INR",
    usdRate: 0.012, // For demo currency conversion
  },
  freeShippingThreshold: 1999,
  contact: {
    phone: "+91 522 492 8170",
    email: "concierge@twistedtar.com",
    address: "Studio 14, Heritage Lane, Hazratganj, Lucknow, Uttar Pradesh 226001",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM IST"
  }
};

export const CATEGORIES = [
  {
    id: "3-piece",
    name: "3-Piece Kurtis",
    tagline: "Complete Royal Ensembles",
    shortDesc: "Regal three-piece sets comprising an intricately embroidered kurti, handcrafted bottom, and an ethereal dupatta.",
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    artisanNote: "Each 3-piece set requires between 60 to 90 hours of delicate needlework by women artisans in rural Awadh.",
    productCount: 4
  },
  {
    id: "2-piece",
    name: "2-Piece Kurtis",
    tagline: "Effortless Silhouette Pairings",
    shortDesc: "Thoughtfully paired embroidered kurtis with tailored cigarette trousers, flared palazzos, or soft cotton bottoms.",
    heroImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
    artisanNote: "Engineered for graceful daily movement with deep shadow work (Bakhiya) that breathes effortlessly.",
    productCount: 4
  },
  {
    id: "short",
    name: "Short Kurtis",
    tagline: "Contemporary Everyday Tunics",
    shortDesc: "Modern, hip-length chikankari tunics designed to pair seamlessly with denim, linen trousers, or culottes.",
    heroImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    artisanNote: "A modern tribute to the classic 'Angarkha' and Lucknowi tunic, featuring delicate yoke and sleeve embroidery.",
    productCount: 4
  }
];

export const CRAFT_STITCHES = [
  {
    name: "Bakhiya (Shadow Work)",
    description: "Embroidered on the reverse side of gossamer fabrics like mulmul and georgette, creating a subtle, veiled shadow effect on the front with fine herringbone stitches.",
    origin: "Signature stitch of Lucknow",
    visual: "Delicate herringbone backstitch casting a gossamer veil."
  },
  {
    name: "Phanda (Millet Stitches)",
    description: "Tiny, compact French-knot style knots that resemble round millets, used to construct intricate floral centers and textured petal veins.",
    origin: "Embossed texture technique",
    visual: "Pebbled pearl-like knots raised on the fabric."
  },
  {
    name: "Murri (Rice-Grain Knots)",
    description: "Elongated French knots shaped specifically like grains of basmati rice, creating regal raised outlines that catch gentle light.",
    origin: "Nawabi court tradition",
    visual: "Oval Basmati-grain embossed stitchwork."
  },
  {
    name: "Keel Kangan & Tepchi",
    description: "Fine running stitches and curved petal outlines that trace the delicate floral vines (bels) across the neckline, hems, and sleeves.",
    origin: "Architectural lattice motifs",
    visual: "Graceful continuous thread line tracking petal contours."
  },
  {
    name: "Jaali (Lattice Openwork)",
    description: "Without cutting a single thread of fabric, warp and weft yarns are gently separated with the needle to form gossamer lace-like windows.",
    origin: "Inspired by Mughal jali screens",
    visual: "Pristine openwork mesh without cutting cloth."
  }
];

export const PRODUCTS = [
  // --- 3-PIECE KURTIS ---
  {
    id: "tt-3p-01",
    slug: "hazratganj-noor-3-piece-chanderi-set",
    name: "Hazratganj Noor Chanderi Set",
    category: "3-piece",
    categoryName: "3-Piece Kurtis",
    tag: "Bestseller",
    badge: "Masterpiece",
    price: 6890,
    originalPrice: 8490,
    rating: 4.9,
    reviewCount: 38,
    isNew: false,
    inStock: true,
    shortDesc: "A timeless warm ivory Chanderi silk kurti with antique gold zari accents, pure cotton lining, tailored pants, and a scalloped organza dupatta.",
    description: "The Hazratganj Noor set is our quintessential festive tribute to the evening promenade of old Lucknow. Woven on handloom Chanderi with a fine metallic sheen, it showcases over 68 hours of intricate Bakhiya and Phanda work created by generational master artisans. The set includes a straight-cut kurti with gossamer mulmul lining, comfortable elasticated cotton-silk trousers, and an ethereal organza dupatta framed with hand-cut scalloped chikankari borders.",
    fabric: "Handwoven Chanderi Silk with 100% Breathable Mulmul Lining",
    embroidery: "Handcrafted Bakhiya (Shadow Work), Phanda, and delicate Ghaspatti",
    craftHours: "68 hours of hand needlework",
    fit: "Straight silhouette with side slits and comfortable ease",
    care: "Dry clean recommended for first two washes; subsequently gentle hand wash in cold water with mild silk detergent.",
    includedItems: "1 Kurti, 1 Tapered Bottom Pant, 1 Hand-embroidered Scalloped Dupatta (2.4m)",
    colors: [
      { name: "Warm Ivory & Gold", hex: "#FDFBF7", imageIndex: 0 },
      { name: "Pistachio Mist", hex: "#D8E3D8", imageIndex: 1 },
      { name: "Blush Champagne", hex: "#EFE3DA", imageIndex: 2 }
    ],
    sizes: [
      { size: "XS", stock: 3 },
      { size: "S", stock: 5 },
      { size: "M", stock: 8 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 2 },
      { size: "XXL", stock: 1 }
    ],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-3p-02",
    slug: "begum-akhtar-mulberry-silk-set",
    name: "Begum Akhtar Emerald Organza Set",
    category: "3-piece",
    categoryName: "3-Piece Kurtis",
    tag: "Artisan Edition",
    badge: "Heritage",
    price: 7490,
    originalPrice: 8990,
    rating: 5.0,
    reviewCount: 22,
    isNew: true,
    inStock: true,
    shortDesc: "Royal ink forest green organza kurti set adorned with pristine white silk-thread Murri and Jaali lattice embroidery.",
    description: "Named after the legendary ghazal queen of Awadh, this ensemble embodies poise and poetic grace. Tailored from premium sheer organza over a dyed soft cotton slip, the kurti radiates in deep forest emerald. Dense clusters of Murri basmati knots and handcrafted Jaali cutouts grace the yoke, echoed across the matching palazzo pants and sweeping 2.5m dupatta.",
    fabric: "Pure Sheer Organza Silk with Separate Mulmul Camisole Slip",
    embroidery: "Murri (Basmati grain knots), Daraz Jaali, and Keel Kangan",
    craftHours: "84 hours of master needlework",
    fit: "Fluid flared silhouette with relaxed palazzo",
    care: "Dry clean only to maintain silk thread tension and delicate lattice openwork.",
    includedItems: "1 Kurti, 1 Camisole Slip, 1 Flared Palazzo Pant, 1 Embroidered Organza Dupatta",
    colors: [
      { name: "Royal Forest Emerald", hex: "#142820", imageIndex: 0 },
      { name: "Midnight Ink Navy", hex: "#121A28", imageIndex: 1 }
    ],
    sizes: [
      { size: "S", stock: 4 },
      { size: "M", stock: 6 },
      { size: "L", stock: 5 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-3p-03",
    slug: "qaisar-bagh-pure-mulmul-set",
    name: "Qaisar Bagh Pure Mulmul Set",
    category: "3-piece",
    categoryName: "3-Piece Kurtis",
    tag: "Pure Cotton",
    badge: "Summer Essential",
    price: 5290,
    originalPrice: 6200,
    rating: 4.8,
    reviewCount: 45,
    isNew: false,
    inStock: true,
    shortDesc: "Whisper-soft 80s count unbleached cotton mulmul set in pastel peach with tone-on-tone Lucknowi shadow embroidery.",
    description: "Crafted for the balmy summer afternoons of Lucknow, the Qaisar Bagh set is tailored from whisper-soft 80s count hand-combed mulmul. White resham thread traces blooming floral paisleys across the front panel, balanced with gentle scalloped hems on the palazzo and a featherlight cotton dupatta that drapes like air.",
    fabric: "100% Certified 80s Count Hand-Combed Mulmul Cotton",
    embroidery: "Classic Bakhiya (Shadow Work), Tepchi, and Phanda butis",
    craftHours: "52 hours of artisan hand embroidery",
    fit: "Relaxed breezy fit with side slits",
    care: "Gentle machine wash in laundry bag on delicate cycle or hand wash cold. Dry in shade.",
    includedItems: "1 Kurti, 1 Straight Cotton Trouser, 1 Lightweight Mulmul Dupatta",
    colors: [
      { name: "Powder Peach", hex: "#FCECE4", imageIndex: 0 },
      { name: "Pristine Snow White", hex: "#FFFFFF", imageIndex: 1 },
      { name: "Sky Glaze", hex: "#E4F0F6", imageIndex: 2 }
    ],
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 7 },
      { size: "M", stock: 10 },
      { size: "L", stock: 8 },
      { size: "XL", stock: 5 },
      { size: "XXL", stock: 3 }
    ],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-3p-04",
    slug: "rumi-darwaza-viscose-georgette-set",
    name: "Rumi Darwaza Royal Georgette Set",
    category: "3-piece",
    categoryName: "3-Piece Kurtis",
    tag: "Festive Pick",
    badge: "Heavy Embroidery",
    price: 6990,
    originalPrice: 8200,
    rating: 4.9,
    reviewCount: 31,
    isNew: false,
    inStock: true,
    shortDesc: "Rich midnight ink navy viscose georgette 3-piece set with heavy all-over Lucknowi kashmiri jaal work and pearl buttons.",
    description: "Inspired by the monumental archway of Rumi Darwaza, this heavy bridal and festive set is crafted from fluid viscose georgette. Every inch of the front yolk is carpeted with dense Phanda, Murri, and Ghaspatti motifs. Accompanied by a matching silk-blend dyed inner, matching pants, and a 4-sided embroidered dupatta.",
    fabric: "Heavy 60g Viscose Georgette with Dye-to-Match Cotton Slip",
    embroidery: "All-Over Kashmiri Jaal, Phanda, Murri, and Fine Mukaish Badla Highlights",
    craftHours: "92 hours of painstaking needlework",
    fit: "Graceful kalidar flare with structured sleeves",
    care: "Dry clean only to protect delicate badla metallic highlights.",
    includedItems: "1 Kurti, 1 Modal Inner Slip, 1 Semi-elasticated Pant, 1 Embroidered Georgette Dupatta",
    colors: [
      { name: "Midnight Ink Navy", hex: "#121A28", imageIndex: 0 },
      { name: "Heritage Wine", hex: "#3B1824", imageIndex: 1 }
    ],
    sizes: [
      { size: "S", stock: 3 },
      { size: "M", stock: 5 },
      { size: "L", stock: 4 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ]
  },

  // --- 2-PIECE KURTIS ---
  {
    id: "tt-2p-01",
    slug: "chowk-heritage-modal-pant-set",
    name: "Chowk Heritage Modal Pant Set",
    category: "2-piece",
    categoryName: "2-Piece Kurtis",
    tag: "Bestseller",
    badge: "Silky Soft",
    price: 4490,
    originalPrice: 5490,
    rating: 4.9,
    reviewCount: 54,
    isNew: false,
    inStock: true,
    shortDesc: "Pistachio sage green pure modal kurti paired with tailored straight cigarette pants and subtle pearl neckline buttons.",
    description: "The Chowk Heritage pair brings modern structure to timeless craftsmanship. Woven from 100% organic natural modal yarn, this fabric has a butter-soft hand feel and a fluid, flattering drape that resists wrinkles. Hand-worked Bakhiya shadow stitches form subtle vines across the sleeves, side slits, and front yoke.",
    fabric: "100% Premium Eco-Modal with Natural Cotton Bottom",
    embroidery: "Fine Bakhiya, Phanda buttons, and Tepchi line detailing",
    craftHours: "44 hours of hand embroidery",
    fit: "Tailored straight kurti paired with cropped cigarette pants",
    care: "Gentle machine wash cold on delicate cycle or hand wash. Iron on reverse side.",
    includedItems: "1 Kurti, 1 Tapered Bottom Cigarette Pant",
    colors: [
      { name: "Pistachio Sage", hex: "#C2D4C2", imageIndex: 0 },
      { name: "Sand Dune Ivory", hex: "#F3ECE1", imageIndex: 1 },
      { name: "Muted Terracotta", hex: "#D6998A", imageIndex: 2 }
    ],
    sizes: [
      { size: "XS", stock: 4 },
      { size: "S", stock: 8 },
      { size: "M", stock: 12 },
      { size: "L", stock: 7 },
      { size: "XL", stock: 4 },
      { size: "XXL", stock: 2 }
    ],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-2p-02",
    slug: "dilkusha-garden-viscose-palazzo-set",
    name: "Dilkusha Garden Palazzo Set",
    category: "2-piece",
    categoryName: "2-Piece Kurtis",
    tag: "Trending",
    badge: "Artisan Co-ord",
    price: 4790,
    originalPrice: 5800,
    rating: 4.8,
    reviewCount: 29,
    isNew: true,
    inStock: true,
    shortDesc: "Sunlit mustard ochre viscose kurti paired with voluminous flared palazzo pants featuring dense scalloped hem embroidery.",
    description: "Evoking the flowering gardens of Dilkusha Kothi, this co-ord set radiates festive warmth. Sun-drenched mustard ochre serves as the backdrop for tone-on-tone silk thread flora. The flared palazzo pants feature a 4-inch deep embroidered hem border that sways gracefully with every step.",
    fabric: "High-Twist Viscose with Breathable Cotton Lining",
    embroidery: "Murri flower buds, Keel Kangan foliage, and Bakhiya stems",
    craftHours: "50 hours of hand embroidery",
    fit: "Easy A-line kurti with dramatic flared palazzo",
    care: "Dry clean first wash; subsequent cold hand wash with mild shampoo.",
    includedItems: "1 A-Line Kurti, 1 Flared Palazzo Pant with Deep Border",
    colors: [
      { name: "Sunlit Ochre", hex: "#D4A346", imageIndex: 0 },
      { name: "Forest Jade", hex: "#224034", imageIndex: 1 }
    ],
    sizes: [
      { size: "S", stock: 5 },
      { size: "M", stock: 9 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 3 }
    ],
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-2p-03",
    slug: "asafi-mahal-mulmul-trouser-set",
    name: "Asafi Mahal Cotton Trouser Set",
    category: "2-piece",
    categoryName: "2-Piece Kurtis",
    tag: "Limited Run",
    badge: "Hand-Dyed",
    price: 4190,
    originalPrice: 4990,
    rating: 4.7,
    reviewCount: 19,
    isNew: false,
    inStock: true,
    shortDesc: "Soft lavender mauve hand-dyed mulmul kurti and cropped cigarette trousers with intricate needlework collar and cuffs.",
    description: "An understated, minimalist ensemble tailored for desk-to-dinner sophistication. Hand-dyed in small artisan batches in soft lavender mauve, the kurti features a mandarin neckline bordered with Murri knots and delicate shadow-worked sleeves. Complemented by cropped ankle-length trousers with side slits.",
    fabric: "Hand-Dyed 80s Count Pure Mulmul Cotton",
    embroidery: "Subtle Tepchi geometry, Phanda collar, and sleeve Bakhiya",
    craftHours: "38 hours of artisan hand embroidery",
    fit: "Structured straight fit with 3/4 sleeves and ankle trousers",
    care: "Hand wash separately in cold water with mild liquid detergent. Shade dry.",
    includedItems: "1 Straight Kurti, 1 Cropped Cigarette Trouser",
    colors: [
      { name: "Lavender Mauve", hex: "#D8C9DC", imageIndex: 0 },
      { name: "Raw Ivory", hex: "#FDFBF7", imageIndex: 1 }
    ],
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 6 },
      { size: "M", stock: 7 },
      { size: "L", stock: 5 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-2p-04",
    slug: "wajid-ali-shah-chanderi-pant-set",
    name: "Wajid Ali Shah Ivory Chanderi Set",
    category: "2-piece",
    categoryName: "2-Piece Kurtis",
    tag: "Occasion Wear",
    badge: "Pearl Accents",
    price: 4990,
    originalPrice: 6200,
    rating: 5.0,
    reviewCount: 16,
    isNew: true,
    inStock: true,
    shortDesc: "Champagne ivory Chanderi kurti with natural mother-of-pearl buttons, fine zardozi-touched chikan, and silk pants.",
    description: "Inspired by the patron of Awadh's finest arts, Nawab Wajid Ali Shah. This champagne ivory set blends handloom Chanderi silk with delicate Chikankari and subtle micro-pearl beadwork nestled within the Phanda floral knots. The neckline is fastened with handcrafted mother-of-pearl buttons.",
    fabric: "Chanderi Silk Kurti with Cotton Silk Trousers",
    embroidery: "Phanda, Ghaspatti, and subtle hand-sewn Mother-of-Pearl accents",
    craftHours: "54 hours of master needlework",
    fit: "Regal A-line fit with structured shoulders",
    care: "Dry clean only to preserve mother-of-pearl buttons and silk luster.",
    includedItems: "1 Kurti with MOP buttons, 1 Cotton-Silk Tailored Pant",
    colors: [
      { name: "Champagne Ivory", hex: "#F7F2E7", imageIndex: 0 },
      { name: "Rose Water", hex: "#F3DFDB", imageIndex: 1 }
    ],
    sizes: [
      { size: "S", stock: 4 },
      { size: "M", stock: 8 },
      { size: "L", stock: 5 },
      { size: "XL", stock: 3 }
    ],
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ]
  },

  // --- SHORT KURTIS ---
  {
    id: "tt-sk-01",
    slug: "baradari-everyday-mulmul-short-kurti",
    name: "Baradari Everyday Mulmul Tunic",
    category: "short",
    categoryName: "Short Kurtis",
    tag: "Bestseller",
    badge: "Everyday Luxury",
    price: 2490,
    originalPrice: 3200,
    rating: 4.9,
    reviewCount: 67,
    isNew: false,
    inStock: true,
    shortDesc: "Pristine white hand-embroidered short kurti in breathable mulmul. Perfect for pairing with wide-leg jeans, trousers, or skirts.",
    description: "The Baradari Tunic is your effortless everyday luxury. Designed for effortless weekday rotation, it is hand-embroidered in white-on-white resham thread with fine Tepchi running stitches and floral Phanda butis on the front yoke and sleeve cuffs. Features a round neck with a delicate V-notch slit.",
    fabric: "100% Breathable High-Twist Mulmul Cotton",
    embroidery: "White-on-White Tepchi, Murri center, and sleeve cuffs",
    craftHours: "24 hours of hand needlework",
    fit: "Hip-length relaxed tunic with 3/4 sleeves and side vents",
    care: "Machine wash cold gentle cycle. Tumble dry low or dry in shade.",
    includedItems: "1 Short Kurti Tunic",
    colors: [
      { name: "Pristine White", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Sky Glaze", hex: "#E3EFF6", imageIndex: 1 },
      { name: "Petal Pink", hex: "#F8E7E7", imageIndex: 2 }
    ],
    sizes: [
      { size: "XS", stock: 5 },
      { size: "S", stock: 12 },
      { size: "M", stock: 15 },
      { size: "L", stock: 10 },
      { size: "XL", stock: 6 },
      { size: "XXL", stock: 4 }
    ],
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-sk-02",
    slug: "imambara-peplum-cotton-short-kurti",
    name: "Imambara Peplum Short Kurti",
    category: "short",
    categoryName: "Short Kurtis",
    tag: "Contemporary",
    badge: "Flattering Fit",
    price: 2790,
    originalPrice: 3490,
    rating: 4.8,
    reviewCount: 34,
    isNew: true,
    inStock: true,
    shortDesc: "Powder sky blue peplum-cut cotton kurti with cinched waist gathering and dense Lucknowi jaali lace yoke.",
    description: "A flattering contemporary silhouette that blends European peplum tailoring with traditional Awadhi needlework. Cut from featherlight powder sky blue cotton, the fitted bodice features intricate floral chikankari embroidery that cascades into a softly gathered waist flare.",
    fabric: "100% Lightweight Cambric Cotton",
    embroidery: "Bodice Bakhiya, Phanda floral cluster, and Jaali openwork",
    craftHours: "28 hours of artisan hand embroidery",
    fit: "Cinched empire-waist peplum flare with elbow sleeves",
    care: "Hand wash cold with similar colors. Line dry in shade.",
    includedItems: "1 Peplum Short Kurti",
    colors: [
      { name: "Powder Sky Blue", hex: "#DCEBF3", imageIndex: 0 },
      { name: "Warm Cream", hex: "#FDFBF7", imageIndex: 1 },
      { name: "Mint Sage", hex: "#D6E5D9", imageIndex: 2 }
    ],
    sizes: [
      { size: "XS", stock: 3 },
      { size: "S", stock: 7 },
      { size: "M", stock: 9 },
      { size: "L", stock: 6 },
      { size: "XL", stock: 2 }
    ],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-sk-03",
    slug: "shahi-tehzeeb-flared-aline-tunic",
    name: "Shahi Tehzeeb Flared Tunic",
    category: "short",
    categoryName: "Short Kurtis",
    tag: "Festive Ready",
    badge: "Vibrant Pastel",
    price: 2990,
    originalPrice: 3800,
    rating: 4.9,
    reviewCount: 41,
    isNew: false,
    inStock: true,
    shortDesc: "Blush peach modal tunic with bell sleeves and dense Chikankari shadow embroidery framing the split mandarin collar.",
    description: "The Shahi Tehzeeb Tunic is an ode to Awadhi refinement (*tehzeeb*). Made from butter-soft modal in a flattering blush peach hue, it features flowing 3/4 bell sleeves and a regal split mandarin collar adorned with raised Murri and Phanda knots. Pairs impeccably with ivory cigarette pants or distressed denim.",
    fabric: "Silky Eco-Modal Blend with Substantial Drape",
    embroidery: "Split-Collar Bakhiya, Bell Sleeve Scalloping, and Phanda Yoke",
    craftHours: "32 hours of hand embroidery",
    fit: "A-Line flared tunic hitting mid-thigh with bell sleeves",
    care: "Gentle hand wash cold or machine wash in delicate wash bag. Steam iron.",
    includedItems: "1 Flared Short Kurti",
    colors: [
      { name: "Blush Peach", hex: "#FBE6DC", imageIndex: 0 },
      { name: "Ochre Sunlight", hex: "#E9CA7E", imageIndex: 1 },
      { name: "Ink Emerald", hex: "#1D3A2F", imageIndex: 2 }
    ],
    sizes: [
      { size: "S", stock: 6 },
      { size: "M", stock: 10 },
      { size: "L", stock: 8 },
      { size: "XL", stock: 4 },
      { size: "XXL", stock: 2 }
    ],
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "tt-sk-04",
    slug: "gomti-riverbank-straight-cotton-tunic",
    name: "Gomti Riverbank Straight Tunic",
    category: "short",
    categoryName: "Short Kurtis",
    tag: "Eco Friendly",
    badge: "Pure Khadi Cotton",
    price: 2390,
    originalPrice: 2990,
    rating: 4.7,
    reviewCount: 28,
    isNew: false,
    inStock: true,
    shortDesc: "Natural unbleached raw ivory khadi cotton short kurti featuring tonal vine embroidery and wooden coconut shell buttons.",
    description: "Rooted in the organic spirit of the Gomti riverbank where Lucknow's artisans gather to wash freshly embroidered cloth. This tunic is tailored from handspun organic khadi cotton. The textured fabric provides natural cooling and character, highlighted by coconut-shell buttons and minimalist floral branch needlework.",
    fabric: "100% Handspun Organic Khadi Cotton",
    embroidery: "Minimalist Floral Vines in Natural Linen-Toned Thread",
    craftHours: "22 hours of hand needlework",
    fit: "Classic straight-cut hip length tunic with button placket",
    care: "Hand wash cold with eco-detergent. The khadi cotton softens delightfully with each wash.",
    includedItems: "1 Straight Khadi Tunic",
    colors: [
      { name: "Natural Unbleached Khadi", hex: "#F3ECE1", imageIndex: 0 },
      { name: "Olive Sage", hex: "#CBD8C6", imageIndex: 1 }
    ],
    sizes: [
      { size: "XS", stock: 2 },
      { size: "S", stock: 8 },
      { size: "M", stock: 11 },
      { size: "L", stock: 7 },
      { size: "XL", stock: 3 }
    ],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ]
  }
];

export const REVIEWS = [
  {
    id: "rev-01",
    author: "Ananya Deshmukh",
    city: "Mumbai",
    rating: 5,
    date: "November 4, 2026",
    verified: true,
    productName: "Hazratganj Noor Chanderi Set",
    headline: "Exceeded my highest expectations — true Awadhi craft",
    content: "I ordered the Hazratganj Noor set for my sister's mehendi. The Chanderi has a regal, subtle sheen that isn't gaudy, and the shadow work (Bakhiya) is breathtakingly fine. You can immediately tell it was stitched by hand and not stamped by an automated embroidery machine. The mulmul lining is so comfortable in Mumbai humidity!"
  },
  {
    id: "rev-02",
    author: "Meera Sen",
    city: "Kolkata",
    rating: 5,
    date: "October 29, 2026",
    verified: true,
    productName: "Chowk Heritage Modal Pant Set",
    headline: "Butter soft modal with impeccable tailoring",
    content: "The modal fabric feels like second skin. I wore this for a 10-hour day of festive travel and meetings, and it didn't crease at all. The cigarette pants are tailored with just the right amount of ease around the calf. Twisted Tar is now my go-to for authentic chikan."
  },
  {
    id: "rev-03",
    author: "Zainab Ali",
    city: "Lucknow",
    rating: 5,
    date: "October 18, 2026",
    verified: true,
    productName: "Begum Akhtar Emerald Organza Set",
    headline: "As a Lucknow native, I can vouch for the authentic stitches",
    content: "Growing up in Lucknow, my grandmother taught me how to identify genuine Phanda and Murri knots from cheap machine knockoffs. Twisted Tar's work is the real deal. The knots are tight, basmati-shaped, and the green organza is ethereal. Worth every single rupee."
  },
  {
    id: "rev-04",
    author: "Dr. Radhika Iyer",
    city: "Bangalore",
    rating: 5,
    date: "October 12, 2026",
    verified: true,
    productName: "Baradari Everyday Mulmul Tunic",
    headline: "The perfect everyday chikankari short kurti",
    content: "Paired this with high-waisted linen trousers for work and got endless compliments. It's airy, modest, and washes beautifully on the gentle cycle. I will definitely be ordering the Sky Glaze color next!"
  }
];

export const BLOG_ARTICLES = [
  {
    id: "beginners-guide-lucknowi-chikankari",
    title: "A Beginner’s Guide to Lucknowi Chikankari: Demystifying the 32 Stitches",
    slug: "beginners-guide-lucknowi-chikankari",
    category: "Craft & Heritage",
    readTime: "6 min read",
    date: "November 8, 2026",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    excerpt: "From the gossamer veil of Bakhiya shadow work to basmati-grained Murri knots, learn how to identify authentic hand embroidery from modern machine duplicates.",
    content: `
      <p class="lead">For over four centuries, the historic city of Lucknow on the banks of the Gomti river has been the beating heart of India's most delicate textile art: <em>Chikankari</em> (चिकनकारी). What began in the royal Mughal courts as a meditative practice of unadorned white-on-white embroidery has evolved into an enduring symbol of timeless elegance.</p>

      <h3>The Sacred Vocabulary of the Needle</h3>
      <p>True Lucknowi chikankari encompasses an intricate repertoire of up to 32 distinct stitches. While contemporary fast-fashion labels often lump these together, a connoisseur recognizes the distinct personality of each needle gesture:</p>
      
      <ul>
        <li><strong>Bakhiya (Shadow Work):</strong> The crown jewel of Chikankari. Stitched on the reverse side of sheer fabrics in a herringbone pattern, it casts an ethereal, opaque shadow on the front while preserving a delicate silhouette.</li>
        <li><strong>Phanda:</strong> Tiny, circular knots shaped like round millets. They provide tactile dimension to flower centers and geometric borders.</li>
        <li><strong>Murri:</strong> Perhaps the most demanding stitch, where resham thread is manipulated into an embossed, elongated grain reminiscent of fragrant Basmati rice.</li>
        <li><strong>Jaali:</strong> An architectural feat where the artisan never cuts the fabric, but instead uses the needle tip to gently tease warp and weft yarns apart, forming miniature lattice windows like those of the Mughal palaces.</li>
      </ul>

      <blockquote>"In an era obsessed with digital haste, Chikankari demands the one currency machines cannot replicate: unhurried human devotion."</blockquote>

      <h3>How to Spot Authentic Hand Embroidery</h3>
      <p>When shopping for authentic pieces, observe the reverse side of the garment. Genuine hand embroidery features minute, organic variations in stitch spacing, delicate tension adjustments, and tiny anchoring knots. Machine-replicated embroidery, by contrast, is unnaturally uniform, stiff to the touch, and backed by synthetic tear-away stabilizers.</p>
      
      <p>At <strong>Twisted Tar</strong>, every piece is traced by hand onto natural textiles before our artisan collectives begin their meditative work. Each kurti is a living, breathing canvas of Awadhi culture.</p>
    `
  },
  {
    id: "how-to-style-chikankari-kurti",
    title: "How to Style a Chikankari Kurti for Every Occasion: From Boardroom to Sangeet",
    slug: "how-to-style-chikankari-kurti",
    category: "Style Guides",
    readTime: "5 min read",
    date: "October 24, 2026",
    author: "Styling Desk",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Discover versatile styling formulas to effortlessly transition your chikankari pieces from morning office meetings to glamorous evening celebrations.",
    content: `
      <p class="lead">One of the greatest virtues of authentic Lucknowi chikankari is its remarkable sartorial versatility. Whether tailored from crisp cotton mulmul or lustrous Chanderi silk, a well-crafted kurti adapts fluidly to modern lifestyles.</p>

      <h3>1. The Contemporary Workwear Aesthetic</h3>
      <p>Pair a crisp, pastel short kurti—such as our <em>Baradari Everyday Mulmul Tunic</em>—with tailored high-waisted cigarette trousers or relaxed linen wide-leg culottes. Complete the look with minimalist leather loafers and understated silver jhumkis for a polished, confident boardroom presence that remains featherlight throughout an 8-hour workday.</p>

      <h3>2. Weekend Casual & Cafe Strolls</h3>
      <p>Chikankari looks sublime paired with contemporary denim. Slip into a relaxed A-line short kurti or a soft modal 2-piece set, rolling up the sleeves slightly to highlight the hand-embroidered cuffs. Add handcrafted leather kolhapuris, a woven jute tote, and oversized sunglasses.</p>

      <h3>3. Regal Festive Evenings</h3>
      <p>For intimate weddings, festive dinners, or sangeet soirees, elevate our <em>Hazratganj Noor 3-Piece Chanderi Set</em> with heritage antique gold chaandbaalis, a potli bag woven with zari threads, and embellished mojris. Drape the scalloped organza dupatta over one shoulder to let the intricate yoke embroidery take center stage.</p>
    `
  },
  {
    id: "caring-for-hand-embroidered-clothing",
    title: "Caring for Hand-Embroidered Clothing: A Master Artisan's Longevity Guide",
    slug: "caring-for-hand-embroidered-clothing",
    category: "Care & Longevity",
    readTime: "4 min read",
    date: "October 14, 2026",
    author: "Care Specialists",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Proven rituals to wash, press, and store your delicate chikankari heirlooms so they remain pristine for generations to come.",
    content: `
      <p class="lead">Hand-embroidered garments are not mere clothing; they are heirloom textiles that grow softer and more endearing with age. With thoughtful care, your Twisted Tar pieces will retain their structural integrity and resham thread luster for decades.</p>

      <h3>Washing Rituals: Gentle Touch Over Harsh Agitation</h3>
      <p>For Chanderi silks, pure organza, and pieces with Mukaish metallic highlights, dry cleaning is always recommended for the first two cycles. For pure mulmul cotton and modal kurtis:</p>
      <ul>
        <li>Always use cold water and a pH-neutral, gentle liquid silk/wool detergent. Avoid granular detergents that can lodge beneath fine stitches.</li>
        <li>Never wring or aggressively scrub the embroidered panels. Gently swirl the garment in soapy water and rinse thoroughly.</li>
        <li>If machine washing everyday cotton tunics, place the garment inside an organic cotton laundry mesh bag and select the delicate cycle.</li>
      </ul>

      <h3>Drying & Ironing Guidelines</h3>
      <p>Never expose damp embroidered garments to direct, harsh midday sunlight, which can weaken fine cotton threads over time. Instead, lay the kurti flat on a clean towel in a shaded, well-ventilated area.</p>
      <p>When ironing, <strong>always iron the garment on the reverse side</strong> over a padded surface. This preserves the 3D embossed relief of Phanda knots and prevents flattening the delicate shadow work.</p>
    `
  }
];

export const FAQS = [
  {
    category: "Sizing & Fit",
    items: [
      {
        q: "How do I choose the right size for Twisted Tar kurtis?",
        a: "Our kurtis are designed with a relaxed, elegant drape that honors traditional Indian tailoring while ensuring modern comfort. We recommend referring to our comprehensive Size Guide on any product page. For straight-cut kurtis, we include a 2.5 to 3-inch ease allowance over your actual body bust measurement for effortless mobility. If you fall between sizes, we recommend sizing up."
      },
      {
        q: "Do you offer custom hemming or alterations?",
        a: "Yes! We offer complimentary sleeve and hem adjustment consultations. Simply note your preferred length specifications in the Order Notes field during checkout, or reach out to our concierge at concierge@twistedtar.com within 12 hours of placing your order."
      }
    ]
  },
  {
    category: "Craft & Authenticity",
    items: [
      {
        q: "Are Twisted Tar kurtis 100% handcrafted?",
        a: "Absolutely. Every stitch—from the delicate reverse shadow work (Bakhiya) to the raised French knots (Phanda and Murri)—is stitched entirely by hand by certified women artisans across Lucknow and Awadh. We do not sell machine-stamped or computer-embroidered replicas."
      },
      {
        q: "Why do I see slight variations in the embroidery stitches?",
        a: "Because each piece is individually hand-embroidered over 20 to 90 hours, minor variations in thread tension, motif spacing, and knot height are natural and celebrated hallmarks of human craftsmanship. No two Twisted Tar kurtis are ever identical."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        q: "What are your shipping timelines across India?",
        a: "Orders are dispatched within 24–48 hours from our Lucknow studio. Metro cities typically receive deliveries within 2–4 business days, while non-metro locations take 4–6 business days. Express shipping is also available during checkout."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship worldwide via DHL Express. International orders typically reach destinations in the US, UK, Canada, UAE, Singapore, and Australia within 5–8 business days."
      },
      {
        q: "Is shipping free?",
        a: "We offer complimentary standard insured shipping across all pin codes in India on orders above ₹1,999. For orders below ₹1,999, a flat shipping charge of ₹120 applies."
      }
    ]
  },
  {
    category: "Exchanges & Returns",
    items: [
      {
        q: "What is your return and exchange policy?",
        a: "We want you to treasure your Twisted Tar purchase. If you need a different size or wish to exchange an item, we offer a hassle-free 7-day exchange window from the date of delivery. Items must be unworn, unwashed, and in their original packaging with all artisan tags intact."
      },
      {
        q: "How do I initiate an exchange?",
        a: "Simply visit our Returns Portal or email concierge@twistedtar.com with your Order Number and preferred replacement size. Our courier partner will arrange a doorstep reverse pickup."
      }
    ]
  }
];

export const SIZE_CHART = {
  unit: "inches",
  headers: ["Size", "Bust (Body)", "Kurti Chest", "Waist", "Hip", "Length"],
  rows: [
    { size: "XS", bust: "32\"", chest: "35\"", waist: "30\"", hip: "36\"", length: "44\"" },
    { size: "S",  bust: "34\"", chest: "37\"", waist: "32\"", hip: "38\"", length: "44\"" },
    { size: "M",  bust: "36\"", chest: "39\"", waist: "34\"", hip: "40\"", length: "45\"" },
    { size: "L",  bust: "38\"", chest: "41\"", waist: "36\"", hip: "42\"", length: "45\"" },
    { size: "XL", bust: "40\"", chest: "43\"", waist: "38\"", hip: "44\"", length: "46\"" },
    { size: "XXL",bust: "42\"", chest: "45\"", waist: "40\"", hip: "46\"", length: "46\"" }
  ]
};

export const PROMO_CODES = [
  { code: "TWISTED10", discountPercent: 10, minSpend: 2000, description: "10% off on your luxury order above ₹2,000" },
  { code: "LUCKNOWFIRST", flatDiscount: 500, minSpend: 3500, description: "₹500 welcome discount on orders above ₹3,500" },
  { code: "CHIKAN15", discountPercent: 15, minSpend: 5000, description: "15% off festive treat on orders above ₹5,000" }
];
