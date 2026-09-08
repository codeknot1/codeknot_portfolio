/* ============================================================
   CODEKNOT — App Bundle (plain script, no ES modules)
   Works when index.html is opened directly by double-click.
   All config/data lives at the top — edit there, not in the logic below.
   ============================================================ */
(function () {
  "use strict";

  /* ============ CONFIG ============ */
 var SITE_CONFIG = {
  companyName: "CODEKNOT",

  tagline: "WEB DEVELOPMENT & SOLUTIONS",

  whatsapp: "923370660696",

  whatsappDefaultMessage: "Hello CODEKNOT, I would like to discuss a project.",

  email: "",

  phone: "",

  address: "",

  logo: "assets/images/logo/codeknot-logo.png",

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    twitter: "",
    youtube: ""
  },

  stats: {
    projectsDelivered: 40,
    happyClients: 50,
    technologies: 25,
    yearsExperience: 2
  }
};

  function getWhatsAppUrl(customMessage) {
    var message = encodeURIComponent(customMessage || SITE_CONFIG.whatsappDefaultMessage);
    return "https://wa.me/" + SITE_CONFIG.whatsapp + "?text=" + message;
  }

  var SERVICE_CATEGORIES = [
    { id: "development", label: "Development" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "api", label: "API & Integration" },
    { id: "uiux", label: "UI/UX" },
    { id: "backend", label: "Backend" },
    { id: "security", label: "Security" },
    { id: "seo", label: "Performance & SEO" },
    { id: "hosting", label: "Hosting" },
    { id: "maintenance", label: "Maintenance" },
    { id: "design", label: "Design & Branding" },
  ];

  var SERVICES = [
    { id: "web-dev", category: "development", name: "Web Development", description: "Business, corporate, portfolio and custom websites built to convert visitors into clients." },
    { id: "web-apps", category: "development", name: "Web Application Development", description: "Custom dashboards, CRMs, booking systems and internal tools built around your workflow." },
    { id: "landing-pages", category: "development", name: "Landing Pages", description: "Focused, high-conversion pages for campaigns, launches and lead generation." },
    { id: "online-store", category: "ecommerce", name: "Online Store Development", description: "Full storefronts with catalog, cart, checkout and order management." },
    { id: "payment-integration", category: "ecommerce", name: "Payment Gateway Integration", description: "Secure online payment setup connected to your preferred providers." },
    { id: "whatsapp-orders", category: "ecommerce", name: "WhatsApp Order Integration", description: "Let customers order directly through WhatsApp alongside your storefront." },
    { id: "rest-api", category: "api", name: "REST API Development", description: "Clean, documented APIs built to connect your systems and apps." },
    { id: "third-party-api", category: "api", name: "Third-Party API Integration", description: "Connect payment, maps, social, SMS and email providers into your product." },
    { id: "responsive-design", category: "uiux", name: "Responsive Web Design", description: "Interfaces that work cleanly from a 320px phone to a 4K display." },
    { id: "ui-design", category: "uiux", name: "Modern UI Design", description: "Custom interface design — not a stock template reskin." },
    { id: "backend-dev", category: "backend", name: "Backend Development", description: "Server-side logic, business rules and data handling built to scale." },
    { id: "website-security", category: "security", name: "Website Security Hardening", description: "SSL, secure headers, input validation and hardened authentication." },
    { id: "speed-optimization", category: "seo", name: "Website Speed Optimization", description: "Faster load times through image, code and asset optimization." },
    { id: "hosting-setup", category: "hosting", name: "Hosting & Deployment", description: "Domain, hosting and server setup handled end to end." },
    { id: "maintenance", category: "maintenance", name: "Website Maintenance & Support", description: "Ongoing updates, bug fixes and monitoring after launch." },
    { id: "logo-design", category: "design", name: "Logo & Brand Identity", description: "A distinct visual identity — logo, colors, typography and guidelines." },
    { id: "social-design", category: "design", name: "Social Media Design", description: "Post templates, story kits and branded assets for your channels." },
    { id: "print-design", category: "design", name: "Print & Marketing Design", description: "Brochures, flyers, packaging and campaign creative, print-ready." },
  ];

  var TECH_GROUPS = [
    { label: "Languages", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "PHP", "Python", "Java", "C", "C++", "C#", "SQL", "Bash/Shell", "Dart", "Ruby", "Go", "Kotlin", "Swift"] },
    { label: "Frontend", items: ["Bootstrap", "Tailwind CSS", "React.js", "Next.js", "Vue.js", "Angular", "jQuery"] },
    { label: "Backend", items: ["Node.js", "Express.js", "Laravel", "Django", "Flask", ".NET / ASP.NET", "Spring Boot"] },
    { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase", "Redis"] },
    { label: "Tools", items: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "npm", "Docker", "Figma"] },
    { label: "AI Integration", items: ["AI API Integration", "OpenAI API", "AI Chatbot Integration", "AI-Powered Web Apps", "AI Automation", "Machine Learning API Integration"] },
  ];

  // Real completed projects. Add more by copying a block below —
  // image goes in assets/images/projects/, liveUrl is optional.
  var PROJECTS = [
    { title: "RestoFlow", category: "SaaS", image: "assets/images/projects/restoflow.jpg", description: "Restaurant management SaaS with live order tracking, kitchen display, QR table ordering, POS and multi-branch subscription plans.", liveUrl: "" },
    { title: "SwiftAI", category: "SaaS", image: "assets/images/projects/swiftai.jpg", description: "AI-powered productivity platform offering content writing, image generation and code assistance, with usage dashboards and tiered plans.", liveUrl: "" },
    { title: "SwiftCart", category: "E-Commerce", image: "assets/images/projects/swiftcart.jpg", description: "Full-featured e-commerce storefront with category browsing, deals, best-selling and new-arrival sections, and a complete cart flow.", liveUrl: "" },
    { title: "EstatePro", category: "Web Applications", image: "assets/images/projects/estatepro.jpg", description: "Real estate platform for searching and listing properties, with agent profiles, property categories and a seller registration flow.", liveUrl: "" },
    { title: "Adeela Online Quran Academy", category: "Websites", image: "assets/images/projects/adeela-quran.jpg", description: "Educational website for online Quran learning, featuring course listings, a phonics-based teaching method and free trial class booking.", liveUrl: "" },
  ];
  var PROJECT_CATEGORIES = ["All", "Websites", "Web Applications", "E-Commerce", "SaaS", "UI/UX", "Branding"];

  var DESIGN_ITEMS = [];
  var DESIGN_CATEGORIES = ["All", "Logo", "Branding", "Social Media", "Print", "Marketing", "Packaging", "UI Graphics", "Advertising"];

  var SOLUTIONS = [
    { title: "For Startups & New Businesses", description: "Get online fast with a site or app that's built to grow with you, not rebuilt from scratch in a year.", points: ["Business & landing page websites", "MVP web applications", "Brand identity & logo design"] },
    { title: "For Established Businesses", description: "Replace manual processes with systems built around how your team actually works.", points: ["Custom dashboards & admin panels", "CRM, HR and inventory systems", "Website redesign & modernization"] },
    { title: "For E-Commerce & Retail", description: "A store that handles catalog, payments and orders without duct-taped plugins.", points: ["Online store development", "Payment gateway integration", "Multi-vendor marketplace platforms"] },
    { title: "For Agencies & Creators", description: "Portfolio, booking and content tools that reflect the quality of your own work.", points: ["Portfolio & photography websites", "Booking & appointment systems", "Social media & brand design kits"] },
  ];

  var PROCESS_STEPS = [
    { number: "01", title: "Discovery", description: "We learn about your business, goals and users before proposing a single pixel." },
    { number: "02", title: "Planning", description: "Scope, timeline and technical approach are mapped out and agreed before work starts." },
    { number: "03", title: "UI/UX Design", description: "Wireframes and visual design, reviewed with you before development begins." },
    { number: "04", title: "Development", description: "Clean, tested code built on the stack that fits the project." },
    { number: "05", title: "Testing", description: "Cross-browser, cross-device and functional testing before anything goes live." },
    { number: "06", title: "Launch & Support", description: "Deployment, handover, and ongoing maintenance once you're live." },
  ];

  var WHY_CODEKNOT = [
    { title: "Business-Focused Solutions", description: "Every build starts from your actual goals, not a generic feature checklist." },
    { title: "Modern Technology", description: "Built on current, well-supported frameworks and languages." },
    { title: "Responsive by Default", description: "Every project is built and tested across phone, tablet and desktop." },
    { title: "Scalable Architecture", description: "Structured to handle growth in traffic, data and features over time." },
    { title: "Secure Development", description: "Input validation, secure authentication and hardened configuration as standard." },
    { title: "Clean, Maintainable Code", description: "Code the next developer — or you — can actually read and extend." },
    { title: "Performance Optimized", description: "Fast load times through image, code and asset optimization." },
    { title: "Long-Term Support", description: "Available for updates, fixes and improvements after launch." },
  ];

  var CATEGORY_ICONS = {
    development: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 4L2 12l6 8M16 4l6 8-6 8"/></svg>',
    ecommerce: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 4h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    api: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="9" width="6" height="6" rx="1"/><rect x="15" y="9" width="6" height="6" rx="1"/><path d="M9 12h6"/></svg>',
    uiux: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 9v11"/></svg>',
    backend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/></svg>',
    security: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/></svg>',
    seo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 17l5-6 4 4 8-9"/><path d="M15 6h5v5"/></svg>',
    hosting: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 18a4 4 0 010-8 5 5 0 019.6-1.5A4.5 4.5 0 0118.5 18H6z"/></svg>',
    maintenance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-3 3-2-2 3-3z"/></svg>',
    design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20l8-14-3-3L3 11l1 5 5 1z"/><path d="M14 6l3 3"/></svg>',
  };
  function getCategoryIcon(id) { return CATEGORY_ICONS[id] || CATEGORY_ICONS.development; }

  /* ============ DOM HELPERS ============ */
  function qs(sel, scope) { return (scope || document).querySelector(sel); }
  function qsa(sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); }

  /* ============ NAVBAR ============ */
  function initNavbar() {
    var navbar = qs("[data-navbar]");
    if (!navbar) return;
    function onScroll() { navbar.classList.toggle("is-scrolled", window.scrollY > 24); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var links = qsa("[data-nav-link]", navbar);
    var sections = links.map(function (link) {
      var id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    }).filter(Boolean);

    if (sections.length && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = "#" + entry.target.id;
          links.forEach(function (l) { l.classList.toggle("is-active", l.getAttribute("href") === id); });
        });
      }, { rootMargin: "-45% 0px -45% 0px" });
      sections.forEach(function (s) { observer.observe(s); });
    }
  }

  /* ============ MOBILE MENU ============ */
  function initMobileMenu() {
    var toggle = qs("[data-menu-toggle]");
    var menu = qs("[data-mobile-menu]");
    if (!toggle || !menu) return;

    function closeMenu() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }
    function openMenu() {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
    }
    toggle.addEventListener("click", function () {
      menu.classList.contains("is-open") ? closeMenu() : openMenu();
    });
    qsa("a", menu).forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }

  /* ============ THEME TOGGLE ============ */
  function initThemeToggle() {
    var toggle = qs("[data-theme-toggle]");
    var root = document.documentElement;
    var STORAGE_KEY = "codeknot-theme";
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark") root.setAttribute("data-theme", "dark");
    updateIcon();
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var isDark = root.getAttribute("data-theme") === "dark";
      if (isDark) { root.removeAttribute("data-theme"); localStorage.setItem(STORAGE_KEY, "light"); }
      else { root.setAttribute("data-theme", "dark"); localStorage.setItem(STORAGE_KEY, "dark"); }
      updateIcon();
    });
    function updateIcon() {
      if (!toggle) return;
      var isDark = root.getAttribute("data-theme") === "dark";
      toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      toggle.textContent = isDark ? "☀" : "☾";
    }
  }

  /* ============ WHATSAPP LINKS ============ */
  function initWhatsApp() {
    var url = getWhatsAppUrl();
    qsa("[data-whatsapp-link]").forEach(function (link) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }

  /* ============ BACK TO TOP ============ */
  function initBackToTop() {
    var btn = qs("[data-back-to-top]");
    if (!btn) return;
    function toggle() { btn.classList.toggle("is-visible", window.scrollY > 600); }
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* ============ STATS COUNT-UP ============ */
  function initStats() {
    var els = qsa("[data-stat]");
    if (!els.length) return;
    els.forEach(function (el) {
      var key = el.getAttribute("data-stat");
      el.dataset.target = SITE_CONFIG.stats[key] || 0;
      el.textContent = "0";
    });
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.textContent = el.dataset.target; });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { observer.observe(el); });

    function animateCount(el) {
      var target = Number(el.dataset.target) || 0;
      var duration = 1200;
      var start = performance.now();
      function tick(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  }

  /* ============ MODAL (generic) ============ */
  var activeOverlay = null;
  function openModal(overlay) {
    if (!overlay) return;
    overlay.classList.add("is-open");
    document.body.classList.add("no-scroll");
    activeOverlay = overlay;
  }
  function closeModal(overlay) {
    var target = overlay || activeOverlay;
    if (!target) return;
    target.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    activeOverlay = null;
  }
  function initModalDismissHandlers() {
    document.addEventListener("click", function (e) {
      if (e.target.matches("[data-modal-close]") || e.target.matches(".modal-overlay")) {
        closeModal(e.target.closest(".modal-overlay"));
      }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && activeOverlay) closeModal(); });
  }

  /* ============ SERVICES ============ */
  function initServices() {
    var grid = qs("[data-services-grid]");
    var tabsWrap = qs("[data-services-tabs]");
    var modalOverlay = qs("[data-service-modal]");
    if (!grid || !tabsWrap) return;

    var items = SERVICES.slice(0, 9);
    var activeCategoryIds = {};
    items.forEach(function (s) { activeCategoryIds[s.category] = true; });
    var tabs = [{ id: "all", label: "All" }].concat(SERVICE_CATEGORIES.filter(function (c) { return activeCategoryIds[c.id]; }));

    tabsWrap.innerHTML = "";
    tabs.forEach(function (tab, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-tab" + (i === 0 ? " is-active" : "");
      btn.dataset.filter = tab.id;
      btn.textContent = tab.label;
      tabsWrap.appendChild(btn);
    });

    grid.innerHTML = "";
    items.forEach(function (service) {
      var card = document.createElement("article");
      card.className = "service-card";
      card.dataset.category = service.category;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.innerHTML =
        '<div class="icon-wrap">' + getCategoryIcon(service.category) + "</div>" +
        "<div><h3 class=\"text-h3\">" + service.name + "</h3>" +
        '<p class="text-body-sm" style="margin-top:6px;">' + service.description + "</p></div>" +
        '<span class="card-arrow">→</span>';
      card.addEventListener("click", function () { openServiceModal(service, modalOverlay); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openServiceModal(service, modalOverlay); }
      });
      grid.appendChild(card);
    });

    tabsWrap.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      qsa(".filter-tab", tabsWrap).forEach(function (t) { t.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var filter = btn.dataset.filter;
      qsa(".service-card", grid).forEach(function (card) {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });

    function openServiceModal(service, overlay) {
      if (!overlay) return;
      qs("[data-modal-icon]", overlay).innerHTML = getCategoryIcon(service.category);
      qs("[data-modal-title]", overlay).textContent = service.name;
      qs("[data-modal-desc]", overlay).textContent = service.description;
      var cat = SERVICE_CATEGORIES.filter(function (c) { return c.id === service.category; })[0];
      qs("[data-modal-category]", overlay).textContent = cat ? cat.label : "";
      openModal(overlay);
    }
  }

  /* ============ TECHNOLOGIES ============ */
  function initTechnologies() {
    var wrap = qs("[data-tech-groups]");
    if (!wrap) return;
    wrap.innerHTML = "";
    TECH_GROUPS.forEach(function (group) {
      var groupEl = document.createElement("div");
      groupEl.className = "tech-group";
      var label = document.createElement("span");
      label.className = "tech-group-label";
      label.textContent = group.label;
      var row = document.createElement("div");
      row.className = "tech-chip-row";
      group.items.forEach(function (name) {
        var chip = document.createElement("span");
        chip.className = "tech-chip";
        chip.innerHTML = '<span class="dot"></span>' + name;
        row.appendChild(chip);
      });
      groupEl.appendChild(label);
      groupEl.appendChild(row);
      wrap.appendChild(groupEl);
    });
  }

  /* ============ PROJECTS ============ */
  function initProjects() {
    var grid = qs("[data-projects-grid]");
    var tabsWrap = qs("[data-projects-tabs]");
    var emptyState = qs("[data-projects-empty]");
    if (!grid || !tabsWrap) return;

    if (!PROJECTS.length) {
      grid.hidden = true;
      tabsWrap.hidden = true;
      if (emptyState) emptyState.hidden = false;
      return;
    }
    if (emptyState) emptyState.hidden = true;

    tabsWrap.innerHTML = "";
    PROJECT_CATEGORIES.forEach(function (cat, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-tab" + (i === 0 ? " is-active" : "");
      btn.dataset.filter = cat;
      btn.textContent = cat;
      tabsWrap.appendChild(btn);
    });

    grid.innerHTML = "";
    PROJECTS.forEach(function (project) {
      var card = document.createElement("article");
      card.className = "project-card";
      card.dataset.category = project.category;
      var linkHtml = project.liveUrl
        ? '<a class="project-link" href="' + project.liveUrl + '" target="_blank" rel="noopener noreferrer">View Project →</a>'
        : "";
      card.innerHTML =
        '<div class="project-image"><img src="' + project.image + '" alt="' + project.title + '" loading="lazy"></div>' +
        '<div class="project-body">' +
        '<span class="project-category">' + project.category + "</span>" +
        '<h3 class="text-h3 project-title">' + project.title + "</h3>" +
        '<p class="project-description">' + project.description + "</p>" +
        linkHtml +
        "</div>";
      grid.appendChild(card);
    });

    tabsWrap.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      qsa(".filter-tab", tabsWrap).forEach(function (t) { t.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var filter = btn.dataset.filter;
      qsa(".project-card", grid).forEach(function (card) {
        card.hidden = filter !== "All" && card.dataset.category !== filter;
      });
    });
  }

  /* ============ SOLUTIONS ============ */
  function initSolutions() {
    var grid = qs("[data-solutions-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    SOLUTIONS.forEach(function (solution) {
      var card = document.createElement("div");
      card.className = "solution-card";
      card.innerHTML =
        '<div class="icon-wrap"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/></svg></div>' +
        '<h3 class="text-h3">' + solution.title + "</h3>" +
        '<p class="text-body-sm" style="margin-top:6px;">' + solution.description + "</p>" +
        "<ul>" + solution.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>";
      grid.appendChild(card);
    });
  }

  /* ============ PROCESS ============ */
  function initProcess() {
    var grid = qs("[data-process-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    PROCESS_STEPS.forEach(function (step) {
      var el = document.createElement("div");
      el.className = "process-step";
      el.innerHTML =
        '<span class="step-number">' + step.number + "</span>" +
        '<h3 class="text-h3">' + step.title + "</h3>" +
        '<p class="text-body-sm">' + step.description + "</p>";
      grid.appendChild(el);
    });
  }

  /* ============ WHY CODEKNOT ============ */
  function initWhyCodeknot() {
    var grid = qs("[data-why-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    WHY_CODEKNOT.forEach(function (item) {
      var el = document.createElement("div");
      el.className = "why-item";
      el.innerHTML =
        '<div class="icon-wrap"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 6L9 17l-5-5"/></svg></div>' +
        '<h3 class="text-h3">' + item.title + "</h3>" +
        '<p class="text-body-sm" style="margin-top:6px;">' + item.description + "</p>";
      grid.appendChild(el);
    });
  }

  /* ============ DESIGN SHOWCASE + LIGHTBOX ============ */
  var lightboxItems = [];
  var lightboxIndex = 0;

  function initDesignShowcase() {
    var grid = qs("[data-design-grid]");
    var tabsWrap = qs("[data-design-tabs]");
    var emptyState = qs("[data-design-empty]");
    if (!grid || !tabsWrap) return;

    if (!DESIGN_ITEMS.length) {
      grid.hidden = true;
      tabsWrap.hidden = true;
      if (emptyState) emptyState.hidden = false;
      return;
    }
    if (emptyState) emptyState.hidden = true;

    tabsWrap.innerHTML = "";
    DESIGN_CATEGORIES.forEach(function (cat, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-tab" + (i === 0 ? " is-active" : "");
      btn.dataset.filter = cat;
      btn.textContent = cat;
      tabsWrap.appendChild(btn);
    });

    grid.innerHTML = "";
    DESIGN_ITEMS.forEach(function (item, index) {
      var el = document.createElement("figure");
      el.className = "design-item";
      el.dataset.category = item.category;
      el.innerHTML = '<span class="tag">' + item.category + '</span><img src="' + item.image + '" alt="' + item.title + '" loading="lazy">';
      el.addEventListener("click", function () { openLightbox(DESIGN_ITEMS, index); });
      grid.appendChild(el);
    });

    tabsWrap.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      qsa(".filter-tab", tabsWrap).forEach(function (t) { t.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var filter = btn.dataset.filter;
      qsa(".design-item", grid).forEach(function (el) {
        el.hidden = filter !== "All" && el.dataset.category !== filter;
      });
    });
  }

  function initLightbox() {
    var overlay = qs("[data-lightbox]");
    if (!overlay) return;
    qs("[data-lightbox-close]", overlay).addEventListener("click", closeLightbox);
    qs("[data-lightbox-prev]", overlay).addEventListener("click", function () { stepLightbox(-1); });
    qs("[data-lightbox-next]", overlay).addEventListener("click", function () { stepLightbox(1); });
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  function openLightbox(items, index) {
    var overlay = qs("[data-lightbox]");
    if (!overlay) return;
    lightboxItems = items;
    lightboxIndex = index;
    renderLightbox();
    overlay.classList.add("is-open");
    document.body.classList.add("no-scroll");
  }
  function closeLightbox() {
    var overlay = qs("[data-lightbox]");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
  function stepLightbox(dir) {
    if (!lightboxItems.length) return;
    lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
    renderLightbox();
  }
  function renderLightbox() {
    var overlay = qs("[data-lightbox]");
    var item = lightboxItems[lightboxIndex];
    if (!overlay || !item) return;
    var img = qs("[data-lightbox-image]", overlay);
    img.src = item.image;
    img.alt = item.title || "";
  }

  /* ============ CONTACT FORM (validated, submits via WhatsApp) ============ */
  var validators = {
    required: function (v) { return v.trim().length > 0; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
    phone: function (v) { return v.trim() === "" || /^[\d+\-\s()]{7,20}$/.test(v.trim()); },
    minLength: function (v, len) { return v.trim().length >= len; },
  };

  var FIELD_RULES = {
    fullName: [{ fn: function (v) { return validators.required(v); }, message: "Full name is required." }],
    email: [
      { fn: function (v) { return validators.required(v); }, message: "Email is required." },
      { fn: function (v) { return validators.email(v); }, message: "Enter a valid email address." },
    ],
    phone: [{ fn: function (v) { return validators.phone(v); }, message: "Enter a valid phone number." }],
    service: [{ fn: function (v) { return validators.required(v); }, message: "Please select a service." }],
    message: [
      { fn: function (v) { return validators.required(v); }, message: "Tell us a bit about your project." },
      { fn: function (v) { return validators.minLength(v, 10); }, message: "Message should be at least 10 characters." },
    ],
  };

  function initContactForm() {
    var form = qs("[data-contact-form]");
    if (!form) return;
    var successBanner = qs("[data-form-success]", form);
    var errorBanner = qs("[data-form-error]", form);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (successBanner) successBanner.classList.remove("is-visible");
      if (errorBanner) errorBanner.classList.remove("is-visible");

      // Honeypot — real users never fill this hidden field; bots often do
      var honeypot = form.elements["website"];
      if (honeypot && honeypot.value.trim() !== "") return;

      if (!validateForm(form)) {
        if (errorBanner) errorBanner.classList.add("is-visible");
        return;
      }

      submitForm(form);
      if (successBanner) successBanner.classList.add("is-visible");
      form.reset();
    });

    qsa("input, select, textarea", form).forEach(function (field) {
      field.addEventListener("input", function () { clearFieldError(field); });
      field.addEventListener("change", function () { clearFieldError(field); });
    });

    function validateForm(form) {
      var valid = true;
      Object.keys(FIELD_RULES).forEach(function (name) {
        var field = form.elements[name];
        if (!field) return;
        var rules = FIELD_RULES[name];
        var failed = rules.filter(function (rule) { return !rule.fn(field.value); })[0];
        if (failed) { showFieldError(field, failed.message); valid = false; }
        else { clearFieldError(field); }
      });
      return valid;
    }

    function showFieldError(field, message) {
      field.classList.add("is-invalid");
      var group = field.closest(".form-group");
      var errorEl = group ? group.querySelector(".form-error") : null;
      if (errorEl) { errorEl.textContent = message; errorEl.classList.add("is-visible"); }
    }
    function clearFieldError(field) {
      field.classList.remove("is-invalid");
      var group = field.closest(".form-group");
      var errorEl = group ? group.querySelector(".form-error") : null;
      if (errorEl) errorEl.classList.remove("is-visible");
    }

    function submitForm(form) {
      var data = {};
      qsa("input, select, textarea", form).forEach(function (field) {
        if (field.name) data[field.name] = field.value;
      });

      var lines = ["New project inquiry from " + data.fullName];
      if (data.company) lines.push("Company: " + data.company);
      lines.push("Email: " + data.email);
      if (data.phone) lines.push("Phone: " + data.phone);
      lines.push("Service: " + data.service);
      if (data.budget) lines.push("Budget: " + data.budget);
      lines.push("Message: " + data.message);

      window.open(getWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    }
  }

  /* ============ SITE INFO (contact block + social + footer year) ============ */
  var SOCIAL_ICONS = {
    facebook: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H17V3.7c-.28-.04-1.25-.12-2.38-.12-2.36 0-3.97 1.44-3.97 4.08V10H8v3.1h2.65V21h2.85z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.7 2.6 4.7 6V21H17v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg>',
    github: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.2 2.4.1 2.65.65.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 5.9c-.66.3-1.36.5-2.1.6.75-.45 1.33-1.16 1.6-2-.7.42-1.48.72-2.31.88a3.63 3.63 0 00-6.19 3.3A10.3 10.3 0 013 4.9a3.63 3.63 0 001.12 4.84c-.6-.02-1.16-.18-1.65-.46v.05a3.63 3.63 0 002.9 3.55c-.55.15-1.13.17-1.7.06a3.63 3.63 0 003.39 2.52A7.3 7.3 0 013 16.6a10.3 10.3 0 005.58 1.64c6.7 0 10.36-5.55 10.36-10.36l-.01-.47c.71-.51 1.33-1.15 1.82-1.88z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 12s0-3.2-.4-4.7a3 3 0 00-2.1-2.1C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.5.4a3 3 0 00-2.1 2.1C2 8.8 2 12 2 12s0 3.2.4 4.7a3 3 0 002.1 2.1c1.6.4 7.5.4 7.5.4s5.9 0 7.5-.4a3 3 0 002.1-2.1C22 15.2 22 12 22 12z"/></svg>',
  };

  function initSiteInfo() {
    setContactField("[data-contact-email-wrap]", "[data-contact-email]", SITE_CONFIG.email, function (el, val) {
      el.href = "mailto:" + val; el.textContent = val;
    });
    setContactField("[data-contact-phone-wrap]", "[data-contact-phone]", SITE_CONFIG.phone, function (el, val) {
      el.href = "tel:" + val.replace(/\s/g, ""); el.textContent = val;
    });
    setContactField("[data-contact-address-wrap]", "[data-contact-address]", SITE_CONFIG.address, function (el, val) {
      el.textContent = val;
    });

    qsa("[data-contact-social]").forEach(function (wrap) {
      wrap.innerHTML = "";
      Object.keys(SITE_CONFIG.social).forEach(function (platform) {
        var url = SITE_CONFIG.social[platform];
        if (!url) return;
        var a = document.createElement("a");
        a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", platform);
        a.innerHTML = SOCIAL_ICONS[platform] || "";
        wrap.appendChild(a);
      });
    });

    qsa("[data-current-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

    function setContactField(wrapSel, fieldSel, value, apply) {
      var wrap = qs(wrapSel);
      var field = qs(fieldSel);
      if (!wrap || !field) return;
      if (!value) { wrap.hidden = true; return; }
      wrap.hidden = false;
      apply(field, value);
    }
  }

  /* ============ SCROLL REVEAL ============ */
  function initScrollReveal() {
    var targets = qsa("[data-reveal]");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ============ INIT ============ */
  document.addEventListener("DOMContentLoaded", function () {
    initNavbar();
    initMobileMenu();
    initThemeToggle();
    initWhatsApp();
    initBackToTop();
    initStats();
    initServices();
    initTechnologies();
    initProjects();
    initSolutions();
    initProcess();
    initWhyCodeknot();
    initDesignShowcase();
    initLightbox();
    initContactForm();
    initSiteInfo();
    initModalDismissHandlers();
    initScrollReveal();
  });
})();
