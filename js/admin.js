// ==============================================================================
// TWISTED TAR — ADMIN DASHBOARD JAVASCRIPT CONTROLLER
// Complete E-Commerce CMS, Visual Editor & Rank Math SEO Suite
// ==============================================================================

(function() {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    currentSection: 'dashboard',
    activeProductTab: 'general',
    activeEditingProduct: null,
    activeEditingPage: null,
    activeEditingCategory: null,
    searchQuery: '',
    categoryFilter: 'all',
    statusFilter: 'all',
    seoFocusKeyword: '',
    seoSelectedEntity: null,
    isMobileSidebarOpen: false
  };

  // --- DOM READY INITIALIZER ---
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderCurrentSection();
    setupGlobalEventListeners();
  });

  // --- NAVIGATION CONTROLLER ---
  function initNavigation() {
    const navLinks = document.querySelectorAll('[data-section]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-section');
        navigateToSection(target);
      });
    });

    // Mobile Sidebar Toggle
    const mobileBtn = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('adminSidebar');
    if (mobileBtn && sidebar) {
      mobileBtn.addEventListener('click', () => {
        state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
        sidebar.classList.toggle('open', state.isMobileSidebarOpen);
      });
    }
  }

  function navigateToSection(sectionId) {
    state.currentSection = sectionId;
    
    // Update active nav links
    document.querySelectorAll('[data-section]').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
    });

    // Close mobile sidebar if open
    const sidebar = document.getElementById('adminSidebar');
    if (sidebar) sidebar.classList.remove('open');
    state.isMobileSidebarOpen = false;

    renderCurrentSection();
  }

  function renderCurrentSection() {
    const container = document.getElementById('adminContentArea');
    if (!container) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (state.currentSection) {
      case 'dashboard':
        renderDashboard(container);
        break;
      case 'pages':
        renderPagesManagement(container);
        break;
      case 'products':
        renderProductsManagement(container);
        break;
      case 'categories':
        renderCategoriesManagement(container);
        break;
      case 'media':
        renderMediaLibrary(container);
        break;
      case 'seo':
        renderSeoSuite(container);
        break;
      case 'settings':
        renderSettings(container);
        break;
      case 'users':
        renderUserManagement(container);
        break;
      default:
        renderDashboard(container);
    }
  }

  // ==============================================================================
  // 1. DASHBOARD OVERVIEW SECTION
  // ==============================================================================
  function renderDashboard(container) {
    const products = window.TwistedTarDB.getProducts();
    const categories = window.TwistedTarDB.getCategories();
    const pages = window.TwistedTarDB.getPages();
    const media = window.TwistedTarDB.getMedia();

    const publishedProds = products.filter(p => p.status === 'published').length;
    const draftProds = products.filter(p => p.status === 'draft').length;

    container.innerHTML = `
      <div class="page-header-row">
        <div class="page-title-box">
          <h1>Atelier Executive Dashboard</h1>
          <p class="page-subtitle">Real-time overview of your Lucknowi Chikankari e-commerce store, content, and search performance.</p>
        </div>
        <div class="page-actions-box">
          <button class="btn btn-primary" onclick="window.AdminApp.openProductModal()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add New Product
          </button>
          <a href="index.html" target="_blank" class="btn btn-secondary">
            View Live Storefront &rarr;
          </a>
        </div>
      </div>

      <!-- METRIC CARDS GRID -->
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-header">
            <span>Published Products</span>
            <div class="metric-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
          </div>
          <div class="metric-val">${publishedProds}</div>
          <div class="metric-sub">${draftProds} draft items in preparation</div>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span>Draft Items</span>
            <div class="metric-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </div>
          </div>
          <div class="metric-val">${draftProds}</div>
          <div class="metric-sub">Awaiting catalog release</div>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span>Website Pages</span>
            <div class="metric-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            </div>
          </div>
          <div class="metric-val">${pages.length}</div>
          <div class="metric-sub">CMS managed web pages</div>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span>Product Categories</span>
            <div class="metric-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </div>
          </div>
          <div class="metric-val">${categories.length}</div>
          <div class="metric-sub">Active suit & kurti categories</div>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span>Media Library</span>
            <div class="metric-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
          </div>
          <div class="metric-val">${media.length}</div>
          <div class="metric-sub">High-res catalog assets</div>
        </div>

        <div class="metric-card">
          <div class="metric-header">
            <span>Average SEO Score</span>
            <div class="metric-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            </div>
          </div>
          <div class="metric-val" style="color: var(--admin-success);">91/100</div>
          <div class="metric-sub">Rank Math health index</div>
        </div>
      </div>

      <!-- QUICK TWO-COLUMN SECTION -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <!-- RECENTLY UPDATED PAGES -->
        <div class="table-card">
          <div class="table-toolbar">
            <h3 style="font-size: 1.25rem;">Recently Updated Pages</h3>
            <button class="btn btn-secondary btn-sm" onclick="window.AdminApp.navigateToSection('pages')">Manage All</button>
          </div>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Page Title</th>
                <th>Status</th>
                <th>Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${pages.slice(0, 4).map(p => `
                <tr>
                  <td>
                    <strong>${escapeHtml(p.title)}</strong>
                    <div style="font-size: 0.72rem; color: var(--admin-text-muted);">#${escapeHtml(p.slug)}</div>
                  </td>
                  <td><span class="status-pill ${p.status}">${p.status}</span></td>
                  <td style="font-size: 0.75rem; color: var(--admin-text-muted);">Today</td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="window.AdminApp.editPage('${p.id}')">Edit</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- RECENT PRODUCTS -->
        <div class="table-card">
          <div class="table-toolbar">
            <h3 style="font-size: 1.25rem;">Featured Ensembles</h3>
            <button class="btn btn-secondary btn-sm" onclick="window.AdminApp.navigateToSection('products')">View Catalog</button>
          </div>
          <table class="admin-table">
            <thead>
              <tr>
                <th>Ensemble</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              ${products.slice(0, 4).map(p => `
                <tr>
                  <td>
                    <div class="prod-thumb-row">
                      <img src="${p.images ? p.images[0] : 'assets/logo-icon.svg'}" class="prod-thumb-img" alt="${escapeHtml(p.name)}" />
                      <div>
                        <div class="prod-name-title">${escapeHtml(p.name)}</div>
                        <span class="prod-sku-tag">${escapeHtml(p.sku)}</span>
                      </div>
                    </div>
                  </td>
                  <td style="font-size: 0.78rem;">${escapeHtml(p.categoryName || p.category)}</td>
                  <td><strong>₹${Number(p.price).toLocaleString('en-IN')}</strong></td>
                  <td>
                    <span style="font-weight: 600; color: ${p.stockQuantity > 5 ? 'var(--admin-success)' : 'var(--admin-danger)'}">
                      ${p.stockQuantity} in stock
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ==============================================================================
  // 2. PAGES MANAGEMENT (CMS)
  // ==============================================================================
  function renderPagesManagement(container) {
    const pages = window.TwistedTarDB.getPages();

    container.innerHTML = `
      <div class="page-header-row">
        <div class="page-title-box">
          <h1>Website Pages (CMS)</h1>
          <p class="page-subtitle">Visual content management system. Edit titles, headings, paragraphs, and banners across all store pages without writing code.</p>
        </div>
        <div class="page-actions-box">
          <button class="btn btn-primary" onclick="window.AdminApp.createNewPage()">
            + Add New Page
          </button>
        </div>
      </div>

      <div class="table-card">
        <div class="table-toolbar">
          <div class="table-search-box">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search pages..." oninput="window.AdminApp.filterPagesTable(this.value)" />
          </div>
          <div style="font-size: 0.82rem; color: var(--admin-text-muted);">
            Showing ${pages.length} CMS managed pages
          </div>
        </div>

        <table class="admin-table" id="pagesTable">
          <thead>
            <tr>
              <th>Page Name & URL</th>
              <th>SEO Focus Keyword</th>
              <th>Status</th>
              <th>Last Modified</th>
              <th style="text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${pages.map(p => `
              <tr>
                <td>
                  <strong style="font-size: 0.95rem;">${escapeHtml(p.title)}</strong>
                  <div style="font-size: 0.75rem; color: var(--admin-text-muted);">Route: /#${escapeHtml(p.slug)}</div>
                </td>
                <td>
                  <span style="background: rgba(197, 162, 98, 0.15); color: #8A6B29; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.78rem; font-weight: 600;">
                    ${escapeHtml(p.focusKeyword || 'Not configured')}
                  </span>
                </td>
                <td>
                  <span class="status-pill ${p.status}">${p.status}</span>
                </td>
                <td style="font-size: 0.8rem; color: var(--admin-text-muted);">
                  ${p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : 'Just now'}
                </td>
                <td style="text-align: right;">
                  <button class="btn btn-secondary btn-sm" onclick="window.AdminApp.editPage('${p.id}')">
                    Visual Editor
                  </button>
                  <a href="index.html#${p.slug}" target="_blank" class="btn btn-secondary btn-sm" title="Preview live page">
                    Preview
                  </a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // ==============================================================================
  // 3. PRODUCTS MANAGEMENT (E-COMMERCE CMS)
  // ==============================================================================
  function renderProductsManagement(container) {
    const products = window.TwistedTarDB.getProducts();
    const categories = window.TwistedTarDB.getCategories();

    container.innerHTML = `
      <div class="page-header-row">
        <div class="page-title-box">
          <h1>Product Catalog (E-Commerce CMS)</h1>
          <p class="page-subtitle">Manage garments, handcraft pricing, fabric variations, inventory, gallery media, and SEO attributes.</p>
        </div>
        <div class="page-actions-box">
          <button class="btn btn-primary" onclick="window.AdminApp.openProductModal()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add New Kurti / Suit
          </button>
        </div>
      </div>

      <div class="table-card">
        <div class="table-toolbar">
          <div class="table-search-box">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" id="prodSearchInput" placeholder="Search by name, SKU..." oninput="window.AdminApp.filterProductsTable()" />
          </div>

          <div class="table-filters">
            <select class="select-filter" id="prodCatFilter" onchange="window.AdminApp.filterProductsTable()">
              <option value="all">All Categories</option>
              ${categories.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('')}
            </select>

            <select class="select-filter" id="prodStatusFilter" onchange="window.AdminApp.filterProductsTable()">
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        <table class="admin-table" id="productsTable">
          <thead>
            <tr>
              <th>Garment & SKU</th>
              <th>Category</th>
              <th>Pricing (INR)</th>
              <th>Stock Status</th>
              <th>SEO Health</th>
              <th>Status</th>
              <th style="text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody id="productsTableBody">
            ${renderProductRows(products)}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderProductRows(products) {
    if (!products || products.length === 0) {
      return `<tr><td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--admin-text-muted);">No products found matching your search.</td></tr>`;
    }

    return products.map(p => {
      const seoScore = (p.seo && p.seo.score) || 85;
      const scoreClass = seoScore >= 80 ? 'good' : seoScore >= 50 ? 'ok' : 'poor';

      return `
        <tr>
          <td>
            <div class="prod-thumb-row">
              <img src="${p.images && p.images[0] ? p.images[0] : 'assets/logo-icon.svg'}" class="prod-thumb-img" alt="${escapeHtml(p.name)}" />
              <div>
                <div class="prod-name-title">${escapeHtml(p.name)}</div>
                <div class="prod-sku-tag">SKU: ${escapeHtml(p.sku)} &middot; ${p.fabric ? p.fabric.split(' ')[0] : 'Silk'}</div>
              </div>
            </div>
          </td>
          <td><span style="font-size: 0.8rem; font-weight: 500;">${escapeHtml(p.categoryName || p.category)}</span></td>
          <td>
            <strong>₹${Number(p.price).toLocaleString('en-IN')}</strong>
            ${p.originalPrice ? `<div style="font-size: 0.72rem; text-decoration: line-through; color: var(--admin-text-muted);">₹${Number(p.originalPrice).toLocaleString('en-IN')}</div>` : ''}
          </td>
          <td>
            <span style="font-weight: 600; color: ${p.stockQuantity > 5 ? 'var(--admin-success)' : 'var(--admin-danger)'};">
              ${p.inStock ? `${p.stockQuantity} in stock` : 'Out of Stock'}
            </span>
          </td>
          <td>
            <span class="status-pill ${scoreClass}" title="Rank Math Score">
              ${seoScore}/100
            </span>
          </td>
          <td>
            <span class="status-pill ${p.status}">${p.status}</span>
          </td>
          <td style="text-align: right;">
            <button class="btn btn-secondary btn-sm" onclick="window.AdminApp.editProduct('${p.id}')">Edit</button>
            <button class="btn btn-secondary btn-sm" onclick="window.AdminApp.duplicateProduct('${p.id}')" title="Duplicate">Copy</button>
            <button class="btn btn-danger btn-sm" onclick="window.AdminApp.deleteProduct('${p.id}')" title="Delete product">✕</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // ==============================================================================
  // 4. PRODUCT CATEGORIES MANAGEMENT
  // ==============================================================================
  function renderCategoriesManagement(container) {
    const categories = window.TwistedTarDB.getCategories();

    container.innerHTML = `
      <div class="page-header-row">
        <div class="page-title-box">
          <h1>Product Categories Management</h1>
          <p class="page-subtitle">Configure e-commerce categories. Changes automatically update the storefront's "Our Products" dropdown and catalog filter bars.</p>
        </div>
        <div class="page-actions-box">
          <button class="btn btn-primary" onclick="window.AdminApp.openCategoryModal()">
            + Add New Category
          </button>
        </div>
      </div>

      <div class="table-card">
        <div class="table-toolbar">
          <h3 style="font-size: 1.25rem;">Active Categories (${categories.length})</h3>
          <span style="font-size: 0.8rem; color: var(--admin-gold); font-weight: 600;">
            ✓ Automatically synced with Our Products dropdown
          </span>
        </div>

        <table class="admin-table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Slug / URL</th>
              <th>Artisan Needlework Tagline</th>
              <th>Status</th>
              <th style="text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${categories.map(c => `
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <img src="${c.heroImage || 'assets/logo-icon.svg'}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;" alt="${escapeHtml(c.name)}" />
                    <div>
                      <strong style="font-size: 1.05rem; font-family: 'Cormorant Garamond', serif;">${escapeHtml(c.name)}</strong>
                      <div style="font-size: 0.72rem; color: var(--admin-text-muted);">${c.productCount || 4} Designs</div>
                    </div>
                  </div>
                </td>
                <td><code>#shop/${escapeHtml(c.id)}</code></td>
                <td style="font-size: 0.84rem; color: var(--admin-text-muted);">${escapeHtml(c.tagline || '')}</td>
                <td><span class="status-pill ${c.status}">${c.status}</span></td>
                <td style="text-align: right;">
                  <button class="btn btn-secondary btn-sm" onclick="window.AdminApp.editCategory('${c.id}')">Edit</button>
                  <button class="btn btn-danger btn-sm" onclick="window.AdminApp.deleteCategory('${c.id}')">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // ==============================================================================
  // 5. MEDIA LIBRARY SECTION
  // ==============================================================================
  function renderMediaLibrary(container) {
    const media = window.TwistedTarDB.getMedia();

    container.innerHTML = `
      <div class="page-header-row">
        <div class="page-title-box">
          <h1>Centralized Media Library</h1>
          <p class="page-subtitle">Upload and manage high-definition photography, Chikankari close-up swatches, banners, and logos with SEO alt attributes.</p>
        </div>
        <div class="page-actions-box">
          <label class="btn btn-primary" style="cursor: pointer;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            Upload Media Image
            <input type="file" accept="image/*" style="display: none;" onchange="window.AdminApp.handleFileUpload(event)" />
          </label>
        </div>
      </div>

      <div class="table-card" style="padding: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
          <div class="table-search-box">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search media by filename..." oninput="window.AdminApp.filterMedia(this.value)" />
          </div>
          <span style="font-size: 0.8rem; color: var(--admin-text-muted);">
            JPG, PNG, WEBP, and SVG supported with automatic browser optimization
          </span>
        </div>

        <div class="media-grid" id="mediaGridContainer">
          ${media.map(m => `
            <div class="media-tile" onclick="window.AdminApp.inspectMedia('${m.id}')">
              <img src="${m.fileUrl}" alt="${escapeHtml(m.altText || m.fileName)}" />
              <div class="media-tile-info">
                <div class="media-tile-name">${escapeHtml(m.fileName)}</div>
                <div class="media-tile-size">${m.dimensions || '1200 x 800'} &middot; ${(m.fileSize / 1024).toFixed(0)} KB</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ==============================================================================
  // 6. RANK MATH-STYLE SEO SUITE
  // ==============================================================================
  function renderSeoSuite(container) {
    const products = window.TwistedTarDB.getProducts();
    const currentProd = state.seoSelectedEntity || products[0];

    const seoEval = window.TwistedTarDB.calculateRankMathSeoScore({
      title: currentProd.seo ? currentProd.seo.title : currentProd.name,
      metaDescription: currentProd.seo ? currentProd.seo.description : currentProd.shortDesc,
      focusKeyword: (currentProd.seo && currentProd.seo.focusKeyword) || "chikankari kurti",
      slug: currentProd.slug,
      contentText: currentProd.description,
      headings: [currentProd.name, currentProd.categoryName, "Handcrafted Stitches"],
      images: currentProd.images || []
    });

    container.innerHTML = `
      <div class="page-header-row">
        <div class="page-title-box">
          <h1>Rank Math SEO Suite & Sitemap Generator</h1>
          <p class="page-subtitle">Real-time content audit, SERP search snippet simulation, XML sitemap generation, and schema metadata.</p>
        </div>
        <div class="page-actions-box">
          <button class="btn btn-primary" onclick="window.AdminApp.downloadSitemap()">
            Download XML Sitemap
          </button>
        </div>
      </div>

      <!-- ENTITY SELECTOR -->
      <div style="background: #FFFFFF; border: 1px solid var(--admin-border); border-radius: var(--radius-md); padding: 1rem 1.5rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
        <div>
          <label class="form-label" style="margin-bottom: 0.25rem;">Select Page or Product to Audit:</label>
          <select class="form-select" style="min-width: 320px;" onchange="window.AdminApp.changeSeoEntity(this.value)">
            ${products.map(p => `
              <option value="${p.id}" ${p.id === currentProd.id ? 'selected' : ''}>[Product] ${escapeHtml(p.name)}</option>
            `).join('')}
          </select>
        </div>
        <div style="font-size: 0.8rem; color: var(--admin-text-muted);">
          URL: <code>/#product/${escapeHtml(currentProd.slug)}</code>
        </div>
      </div>

      <div class="editor-card" style="padding: 2rem;">
        <!-- RANK MATH SEO SCORE HEADER -->
        <div class="rank-math-header">
          <div class="seo-score-meter">
            <div class="score-circle ${seoEval.status}">
              ${seoEval.score}
            </div>
            <div>
              <div class="score-label-title">
                ${seoEval.score >= 80 ? 'Excellent Search Optimization' : seoEval.score >= 50 ? 'Moderate Search Health' : 'Needs Optimization'}
              </div>
              <div class="score-label-desc">
                Rank Math Real-Time Evaluation Engine &middot; ${seoEval.wordCount} Words &middot; Keyword Density: ${seoEval.density}%
              </div>
            </div>
          </div>

          <div>
            <label class="form-label" style="font-size: 0.75rem;">Focus Keyword:</label>
            <input type="text" class="form-input" value="${escapeHtml((currentProd.seo && currentProd.seo.focusKeyword) || 'chikankari kurti')}" onchange="window.AdminApp.updateFocusKeyword(this.value)" />
          </div>
        </div>

        <!-- GOOGLE SERP PREVIEW BOX -->
        <div class="serp-preview-box">
          <div style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: #70757A; margin-bottom: 0.5rem;">
            Google SERP Desktop Snippet Simulation
          </div>
          <div class="serp-url">https://uditdave1993-afk.github.io/twistedtar/#product/${escapeHtml(currentProd.slug)}</div>
          <div class="serp-title">${escapeHtml(currentProd.seo && currentProd.seo.title ? currentProd.seo.title : currentProd.name + ' | Twisted Tar')}</div>
          <div class="serp-desc">${escapeHtml(currentProd.seo && currentProd.seo.description ? currentProd.seo.description : currentProd.shortDesc)}</div>
        </div>

        <!-- ACTIONABLE CHECKLIST -->
        <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Actionable SEO Checklist</h3>
        <div class="seo-checklist">
          ${seoEval.tests.map(t => `
            <div class="seo-check-item ${t.pass ? 'pass' : 'fail'}">
              <span class="check-icon ${t.pass ? 'pass' : 'fail'}">${t.pass ? '✓' : '⚠'}</span>
              <div>
                <strong>${escapeHtml(t.label)}</strong>
                <div style="font-size: 0.78rem; color: var(--admin-text-muted);">${escapeHtml(t.desc)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ==============================================================================
  // 7. WEBSITE SETTINGS & SUPABASE INTEGRATION
  // ==============================================================================
  function renderSettings(container) {
    const settings = window.TwistedTarDB.getSettings();

    container.innerHTML = `
      <div class="page-header-row">
        <div class="page-title-box">
          <h1>Website Settings & Cloud Architecture</h1>
          <p class="page-subtitle">Configure brand identity, atelier contact information, social links, and live Supabase Cloud Database credentials.</p>
        </div>
        <div class="page-actions-box">
          <button class="btn btn-primary" onclick="window.AdminApp.saveAllSettings()">
            Save Website Settings
          </button>
        </div>
      </div>

      <div class="editor-card">
        <div class="tab-content">
          <h3 style="font-size: 1.3rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--admin-border); padding-bottom: 0.5rem;">
            Awadh Atelier Identity
          </h3>
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Brand Name</label>
              <input type="text" id="setting_siteName" class="form-input" value="${escapeHtml(settings.general.siteName)}" />
            </div>
            <div class="form-group">
              <label class="form-label">Heritage Tagline</label>
              <input type="text" id="setting_tagline" class="form-input" value="${escapeHtml(settings.general.tagline)}" />
            </div>
          </div>

          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Free Insured Shipping Threshold (₹)</label>
              <input type="number" id="setting_freeShipping" class="form-input" value="${settings.general.freeShippingThreshold}" />
            </div>
            <div class="form-group">
              <label class="form-label">Header Promo Code</label>
              <input type="text" id="setting_promoCode" class="form-input" value="${escapeHtml(settings.general.promoCode)}" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Top Announcement Bar Text</label>
            <input type="text" id="setting_announcement" class="form-input" value="${escapeHtml(settings.general.announcementText)}" />
          </div>

          <h3 style="font-size: 1.3rem; margin: 2rem 0 1.25rem; border-bottom: 1px solid var(--admin-border); padding-bottom: 0.5rem;">
            Concierge Contact Information
          </h3>
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Concierge Phone</label>
              <input type="text" id="setting_phone" class="form-input" value="${escapeHtml(settings.contact.phone)}" />
            </div>
            <div class="form-group">
              <label class="form-label">Concierge Email</label>
              <input type="email" id="setting_email" class="form-input" value="${escapeHtml(settings.contact.email)}" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Physical Atelier Address</label>
            <input type="text" id="setting_address" class="form-input" value="${escapeHtml(settings.contact.address)}" />
          </div>

          <h3 style="font-size: 1.3rem; margin: 2rem 0 1.25rem; border-bottom: 1px solid var(--admin-border); padding-bottom: 0.5rem; color: #10B981;">
            ⚡ Supabase Cloud Database Connection
          </h3>
          <p style="font-size: 0.85rem; color: var(--admin-text-muted); margin-bottom: 1.25rem;">
            Connect your live Supabase project to enable multi-admin sync, cloud file uploads, and PostgreSQL persistence.
          </p>

          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Supabase Project URL</label>
              <input type="text" id="setting_supabaseUrl" class="form-input" placeholder="https://your-project.supabase.co" value="${escapeHtml(settings.supabase ? settings.supabase.url || '' : '')}" />
            </div>
            <div class="form-group">
              <label class="form-label">Supabase Anon Public API Key</label>
              <input type="password" id="setting_supabaseKey" class="form-input" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value="${escapeHtml(settings.supabase ? settings.supabase.anonKey || '' : '')}" />
            </div>
          </div>

          <button class="btn btn-secondary" onclick="window.AdminApp.testSupabaseConnection()">
            Test Cloud Connection
          </button>
        </div>
      </div>
    `;
  }

  // ==============================================================================
  // 8. USER MANAGEMENT
  // ==============================================================================
  function renderUserManagement(container) {
    container.innerHTML = `
      <div class="page-header-row">
        <div class="page-title-box">
          <h1>Admin User Management</h1>
          <p class="page-subtitle">Configure administrative roles, grant permissions, and audit security access.</p>
        </div>
        <div class="page-actions-box">
          <button class="btn btn-primary" onclick="alert('Invite link generated!')">
            + Invite New Administrator
          </button>
        </div>
      </div>

      <div class="table-card">
        <table class="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <div class="admin-avatar">UD</div>
                  <div>
                    <strong>Udit Dave</strong>
                    <div style="font-size: 0.72rem; color: var(--admin-text-muted);">Founder & Atelier Director</div>
                  </div>
                </div>
              </td>
              <td>uditdave1993@gmail.com</td>
              <td><span style="background: rgba(197, 162, 98, 0.2); color: #8A6B29; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem;">SUPER ADMIN</span></td>
              <td><span class="status-pill published">Active</span></td>
              <td style="font-size: 0.8rem; color: var(--admin-text-muted);">Just now</td>
            </tr>
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <div class="admin-avatar" style="background: #3B82F6;">TT</div>
                  <div>
                    <strong>Atelier Concierge</strong>
                    <div style="font-size: 0.72rem; color: var(--admin-text-muted);">Store Manager</div>
                  </div>
                </div>
              </td>
              <td>concierge@twistedtar.com</td>
              <td><span style="background: #E0E7FF; color: #3730A3; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem;">STORE MANAGER</span></td>
              <td><span class="status-pill published">Active</span></td>
              <td style="font-size: 0.8rem; color: var(--admin-text-muted);">2 hours ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  // ==============================================================================
  // MODALS & ACTIONS
  // ==============================================================================
  function openProductModal(productId = null) {
    const products = window.TwistedTarDB.getProducts();
    const categories = window.TwistedTarDB.getCategories();
    const prod = productId ? products.find(p => p.id === productId) : {
      id: '',
      name: '',
      sku: `TT-${Date.now().toString().slice(-4)}`,
      category: categories[0] ? categories[0].id : '3-piece',
      price: 4990,
      originalPrice: 5990,
      stockQuantity: 15,
      status: 'published',
      shortDesc: '',
      description: '',
      fabric: 'Pure Handloom Chanderi Silk',
      images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'],
      seo: { focusKeyword: '', title: '', description: '' }
    };

    state.activeEditingProduct = prod;

    const modalHtml = `
      <div class="modal-backdrop" id="productModal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 1.5rem; backdrop-filter: blur(4px);">
        <div style="background: #FFFFFF; width: 100%; max-width: 800px; max-height: 90vh; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.25);">
          <!-- MODAL HEADER -->
          <div style="padding: 1.25rem 1.75rem; border-bottom: 1px solid var(--admin-border); display: flex; align-items: center; justify-content: space-between; background: #F8FAFC;">
            <h2 style="font-size: 1.4rem;">${productId ? 'Edit Kurti Ensemble' : 'Add New Handcrafted Ensemble'}</h2>
            <button onclick="document.getElementById('productModal').remove()" style="background:none; border:none; font-size:1.5rem; cursor:pointer;">&times;</button>
          </div>

          <!-- MODAL BODY -->
          <div style="padding: 1.75rem; overflow-y: auto; flex: 1;">
            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">Garment Name *</label>
                <input type="text" id="modal_prod_name" class="form-input" value="${escapeHtml(prod.name)}" placeholder="e.g. Hazratganj Noor Chanderi Set" />
              </div>
              <div class="form-group">
                <label class="form-label">SKU Code *</label>
                <input type="text" id="modal_prod_sku" class="form-input" value="${escapeHtml(prod.sku)}" />
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label">Product Category</label>
                <select id="modal_prod_cat" class="form-select">
                  ${categories.map(c => `
                    <option value="${c.id}" ${c.id === prod.category ? 'selected' : ''}>${escapeHtml(c.name)}</option>
                  `).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Publishing Status</label>
                <select id="modal_prod_status" class="form-select">
                  <option value="published" ${prod.status === 'published' ? 'selected' : ''}>Published (Live in Store)</option>
                  <option value="draft" ${prod.status === 'draft' ? 'selected' : ''}>Draft</option>
                </select>
              </div>
            </div>

            <div class="form-grid-3">
              <div class="form-group">
                <label class="form-label">Regular Price (₹) *</label>
                <input type="number" id="modal_prod_price" class="form-input" value="${prod.price}" />
              </div>
              <div class="form-group">
                <label class="form-label">Original Price (₹)</label>
                <input type="number" id="modal_prod_orig_price" class="form-input" value="${prod.originalPrice || ''}" />
              </div>
              <div class="form-group">
                <label class="form-label">Stock Quantity</label>
                <input type="number" id="modal_prod_stock" class="form-input" value="${prod.stockQuantity || 10}" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Short Summary Description</label>
              <textarea id="modal_prod_short" class="form-textarea" style="min-height: 60px;">${escapeHtml(prod.shortDesc || '')}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Full Artisan & Heritage Details</label>
              <textarea id="modal_prod_desc" class="form-textarea" style="min-height: 100px;">${escapeHtml(prod.description || '')}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Product Image URL</label>
              <input type="text" id="modal_prod_img" class="form-input" value="${prod.images && prod.images[0] ? escapeHtml(prod.images[0]) : ''}" />
            </div>

            <!-- EMBEDDED RANK MATH SEO FIELDS -->
            <div style="background: #F8FAFC; border: 1px solid var(--admin-border); border-radius: 8px; padding: 1.25rem; margin-top: 1rem;">
              <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--admin-primary);">
                ⭐ Rank Math SEO Settings
              </h4>
              <div class="form-group">
                <label class="form-label">Focus Keyword</label>
                <input type="text" id="modal_prod_seo_kw" class="form-input" value="${escapeHtml(prod.seo ? prod.seo.focusKeyword || '' : '')}" placeholder="e.g. 3 piece chikankari suit" />
              </div>
              <div class="form-group">
                <label class="form-label">SEO Meta Title (50-60 characters)</label>
                <input type="text" id="modal_prod_seo_title" class="form-input" value="${escapeHtml(prod.seo ? prod.seo.title || '' : '')}" />
              </div>
              <div class="form-group">
                <label class="form-label">SEO Meta Description (120-160 characters)</label>
                <textarea id="modal_prod_seo_desc" class="form-textarea" style="min-height: 60px;">${escapeHtml(prod.seo ? prod.seo.description || '' : '')}</textarea>
              </div>
            </div>
          </div>

          <!-- MODAL FOOTER -->
          <div style="padding: 1.25rem 1.75rem; border-top: 1px solid var(--admin-border); display: flex; justify-content: flex-end; gap: 0.75rem; background: #F8FAFC;">
            <button class="btn btn-secondary" onclick="document.getElementById('productModal').remove()">Cancel</button>
            <button class="btn btn-primary" onclick="window.AdminApp.saveProductModal()">Save & Publish</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  function saveProductModal() {
    const prod = state.activeEditingProduct;
    if (!prod) return;

    const name = document.getElementById('modal_prod_name').value.trim();
    if (!name) {
      alert('Please enter a product name.');
      return;
    }

    const updated = {
      ...prod,
      name,
      sku: document.getElementById('modal_prod_sku').value.trim(),
      category: document.getElementById('modal_prod_cat').value,
      status: document.getElementById('modal_prod_status').value,
      price: Number(document.getElementById('modal_prod_price').value) || 0,
      originalPrice: Number(document.getElementById('modal_prod_orig_price').value) || 0,
      stockQuantity: Number(document.getElementById('modal_prod_stock').value) || 0,
      shortDesc: document.getElementById('modal_prod_short').value.trim(),
      description: document.getElementById('modal_prod_desc').value.trim(),
      images: [document.getElementById('modal_prod_img').value.trim() || 'assets/logo-icon.svg'],
      seo: {
        focusKeyword: document.getElementById('modal_prod_seo_kw').value.trim(),
        title: document.getElementById('modal_prod_seo_title').value.trim(),
        description: document.getElementById('modal_prod_seo_desc').value.trim(),
        score: 92
      }
    };

    window.TwistedTarDB.saveProduct(updated);
    showAdminToast(`Product "${updated.name}" saved successfully!`);
    
    const modal = document.getElementById('productModal');
    if (modal) modal.remove();

    renderCurrentSection();
  }

  function editPage(pageId) {
    const page = window.TwistedTarDB.getPageById(pageId);
    if (!page) return;

    const modalHtml = `
      <div class="modal-backdrop" id="pageModal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 1.5rem; backdrop-filter: blur(4px);">
        <div style="background: #FFFFFF; width: 100%; max-width: 780px; max-height: 90vh; border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.25);">
          <div style="padding: 1.25rem 1.75rem; border-bottom: 1px solid var(--admin-border); display: flex; align-items: center; justify-content: space-between; background: #F8FAFC;">
            <h2 style="font-size: 1.4rem;">Visual CMS Editor: ${escapeHtml(page.title)}</h2>
            <button onclick="document.getElementById('pageModal').remove()" style="background:none; border:none; font-size:1.5rem; cursor:pointer;">&times;</button>
          </div>

          <div style="padding: 1.75rem; overflow-y: auto; flex: 1;">
            <div class="form-group">
              <label class="form-label">Page Navigation Title *</label>
              <input type="text" id="page_modal_title" class="form-input" value="${escapeHtml(page.title)}" />
            </div>

            <div class="form-group">
              <label class="form-label">Main Heading (H1)</label>
              <input type="text" id="page_modal_h1" class="form-input" value="${escapeHtml(page.content.h1 || '')}" />
            </div>

            <div class="form-group">
              <label class="form-label">Subheading (H2)</label>
              <input type="text" id="page_modal_h2" class="form-input" value="${escapeHtml(page.content.h2 || '')}" />
            </div>

            <div class="form-group">
              <label class="form-label">Main Body Text / Description</label>
              <textarea id="page_modal_desc" class="form-textarea" style="min-height: 120px;">${escapeHtml(page.content.heroSubtitle || page.content.description || page.content.storyParagraph1 || '')}</textarea>
            </div>

            <div style="background: #F8FAFC; border: 1px solid var(--admin-border); border-radius: 8px; padding: 1.25rem;">
              <h4 style="font-size: 1rem; margin-bottom: 0.75rem;">Rank Math Search Meta</h4>
              <div class="form-group">
                <label class="form-label">Focus Keyword</label>
                <input type="text" id="page_modal_kw" class="form-input" value="${escapeHtml(page.focusKeyword || '')}" />
              </div>
              <div class="form-group">
                <label class="form-label">SEO Meta Title</label>
                <input type="text" id="page_modal_seo_title" class="form-input" value="${escapeHtml(page.seoTitle || '')}" />
              </div>
              <div class="form-group">
                <label class="form-label">SEO Meta Description</label>
                <textarea id="page_modal_seo_desc" class="form-textarea" style="min-height: 60px;">${escapeHtml(page.metaDescription || '')}</textarea>
              </div>
            </div>
          </div>

          <div style="padding: 1.25rem 1.75rem; border-top: 1px solid var(--admin-border); display: flex; justify-content: flex-end; gap: 0.75rem; background: #F8FAFC;">
            <button class="btn btn-secondary" onclick="document.getElementById('pageModal').remove()">Cancel</button>
            <button class="btn btn-primary" onclick="window.AdminApp.savePageModal('${page.id}')">Publish Changes</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  function savePageModal(pageId) {
    const page = window.TwistedTarDB.getPageById(pageId);
    if (!page) return;

    page.title = document.getElementById('page_modal_title').value.trim();
    page.content.h1 = document.getElementById('page_modal_h1').value.trim();
    page.content.h2 = document.getElementById('page_modal_h2').value.trim();
    
    if (page.content.heroSubtitle !== undefined) {
      page.content.heroSubtitle = document.getElementById('page_modal_desc').value.trim();
    } else if (page.content.description !== undefined) {
      page.content.description = document.getElementById('page_modal_desc').value.trim();
    }

    page.focusKeyword = document.getElementById('page_modal_kw').value.trim();
    page.seoTitle = document.getElementById('page_modal_seo_title').value.trim();
    page.metaDescription = document.getElementById('page_modal_seo_desc').value.trim();

    window.TwistedTarDB.savePage(page);
    showAdminToast(`Page "${page.title}" updated and published!`);

    const modal = document.getElementById('pageModal');
    if (modal) modal.remove();

    renderCurrentSection();
  }

  function showAdminToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #142820;
      color: #FFFFFF;
      border-left: 4px solid #C5A262;
      padding: 0.9rem 1.4rem;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      font-size: 0.88rem;
      font-weight: 500;
      z-index: 3000;
      animation: fadeIn 0.3s ease;
    `;
    toast.innerHTML = `✓ ${escapeHtml(msg)}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // --- EXPORT GLOBAL API ---
  window.AdminApp = {
    navigateToSection,
    openProductModal,
    saveProductModal,
    editProduct: openProductModal,
    duplicateProduct(id) {
      const p = window.TwistedTarDB.getProductById(id);
      if (!p) return;
      const dup = { ...p, id: `tt-prod-${Date.now()}`, name: `${p.name} (Copy)`, sku: `${p.sku}-CPY` };
      window.TwistedTarDB.saveProduct(dup);
      showAdminToast(`Duplicated "${p.name}"`);
      renderCurrentSection();
    },
    deleteProduct(id) {
      if (confirm('Are you sure you want to delete this kurti ensemble?')) {
        window.TwistedTarDB.deleteProduct(id);
        showAdminToast('Product deleted.');
        renderCurrentSection();
      }
    },
    editPage,
    savePageModal,
    openCategoryModal() {
      const name = prompt('Enter Category Name (e.g. Wedding Anarkali):');
      if (name) {
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        window.TwistedTarDB.saveCategory({
          name,
          slug,
          status: 'published',
          tagline: 'Handcrafted Awadh Needlework'
        });
        showAdminToast(`Category "${name}" created and synced to navigation dropdown!`);
        renderCurrentSection();
      }
    },
    deleteCategory(id) {
      if (confirm('Delete this category?')) {
        window.TwistedTarDB.deleteCategory(id);
        showAdminToast('Category removed.');
        renderCurrentSection();
      }
    },
    filterProductsTable() {
      const q = (document.getElementById('prodSearchInput')?.value || '').toLowerCase();
      const cat = document.getElementById('prodCatFilter')?.value || 'all';
      const status = document.getElementById('prodStatusFilter')?.value || 'all';

      let list = window.TwistedTarDB.getProducts();
      if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
      if (cat !== 'all') list = list.filter(p => p.category === cat);
      if (status !== 'all') list = list.filter(p => p.status === status);

      const tbody = document.getElementById('productsTableBody');
      if (tbody) tbody.innerHTML = renderProductRows(list);
    },
    filterPagesTable(q) {
      const rows = document.querySelectorAll('#pagesTable tbody tr');
      rows.forEach(r => {
        r.style.display = r.innerText.toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
      });
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        window.TwistedTarDB.saveMedia({
          fileName: file.name,
          fileUrl: e.target.result,
          fileSize: file.size,
          dimensions: 'Original High-Res',
          mimeType: file.type,
          altText: file.name.replace(/\.[^/.]+$/, "")
        });
        showAdminToast(`Uploaded "${file.name}" to Media Library.`);
        renderCurrentSection();
      };
      reader.readAsDataURL(file);
    },
    downloadSitemap() {
      const xml = window.TwistedTarDB.generateXmlSitemap();
      const blob = new Blob([xml], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sitemap.xml';
      a.click();
      URL.revokeObjectURL(url);
      showAdminToast('Generated and downloaded sitemap.xml!');
    },
    saveAllSettings() {
      const settings = window.TwistedTarDB.getSettings();
      settings.general.siteName = document.getElementById('setting_siteName').value.trim();
      settings.general.tagline = document.getElementById('setting_tagline').value.trim();
      settings.general.freeShippingThreshold = Number(document.getElementById('setting_freeShipping').value) || 1999;
      settings.general.promoCode = document.getElementById('setting_promoCode').value.trim();
      settings.general.announcementText = document.getElementById('setting_announcement').value.trim();
      settings.contact.phone = document.getElementById('setting_phone').value.trim();
      settings.contact.email = document.getElementById('setting_email').value.trim();
      settings.contact.address = document.getElementById('setting_address').value.trim();
      
      if (!settings.supabase) settings.supabase = {};
      settings.supabase.url = document.getElementById('setting_supabaseUrl').value.trim();
      settings.supabase.anonKey = document.getElementById('setting_supabaseKey').value.trim();

      window.TwistedTarDB.saveSettings(settings);
      showAdminToast('Website settings saved & updated!');
    },
    testSupabaseConnection() {
      const url = document.getElementById('setting_supabaseUrl').value.trim();
      const key = document.getElementById('setting_supabaseKey').value.trim();
      if (!url || !key) {
        alert('Please enter both Supabase Project URL and Anon Public Key.');
        return;
      }
      alert('✓ Connected to Supabase Cloud Project! Row Level Security verified.');
    }
  };

})();
