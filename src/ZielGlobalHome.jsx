import { useState, useEffect } from "react";

import "./App.css";

const NAV_LINKS = ["Services", "Work", "Products", "Blog", "About", "Contact"];

const SERVICES = [
  { icon: "👥", title: "Staff Augmentation", desc: "We provide highly skilled, on-demand technical professionals with extensive experience to drive your projects forward." },
  { icon: "🤖", title: "Artificial Intelligence", desc: "Since 2019, delivering Generative AI and Machine Learning solutions leveraging large language models and advanced ML frameworks." },
  { icon: "🔒", title: "Cyber Security", desc: "Cutting-edge cybersecurity solutions that empower businesses to defend against evolving cyber threats and stay compliant." },
  { icon: "☁️", title: "Cloud Engineering", desc: "Harness the full potential of the cloud with tailored multi-cloud, hybrid cloud, and cloud-native development solutions." },
  { icon: "📱", title: "Mobile App Development", desc: "Build fully functional mobile applications with advanced features and business logic, without compromising quality." },
  { icon: "💻", title: "Custom Software Development", desc: "Cost-effective offshore development teams aligned with your business approach to meet productivity goals and timelines." },
  { icon: "🎨", title: "UI/UX Design", desc: "Visually stunning, intuitive, user-centered designs that drive engagement and create memorable experiences." },
  { icon: "🏢", title: "ERP Consultancy & Delivery", desc: "Custom ERP solutions leveraging SAP, Oracle Fusion, and Odoo to optimise workflows and scale your business." },
];

const TESTIMONIALS = [
  { quote: "Ziel Global provided us with top-tier technical staff that seamlessly integrated into our team. Their professionals adapted quickly to our processes, ensuring our project was completed on time and beyond expectations.", name: "Madinah Crowdfunding", role: "CTO" },
  { quote: "Ziel Global's AI solutions transformed our business operations. Their ML model optimized our supply chain, reducing costs by 30%. Their expertise and innovation are unmatched.", name: "Reliance Social Housing", role: "COO" },
  { quote: "Implementing an ERP system seemed daunting, but Ziel Global made the process seamless. Their consultants delivered a customized solution that improved our efficiency by 40%.", name: "Naviti Management", role: "Operations Head" },
];

// ─── UPDATED BLOG POSTS WITH IMAGES ───
const BLOG_POSTS = [
  { 
    id: 1,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    title: "Staff Augmentation: The Ultimate Strategy for Business Growth",
    tag: "Staff Augmentation",
    readTime: "5 min read",
    category: "ZIEL"
  },
  { 
    id: 2,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    title: "Harnessing Generative AI: Transforming Modern Business Landscapes",
    tag: "Artificial Intelligence",
    readTime: "5 min read",
    category: "ZIEL"
  },
   { 
    id: 3,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    title: "Harnessing Generative AI: Transforming Modern Business Landscapes",
    tag: "Artificial Intelligence",
    readTime: "5 min read",
    category: "ZIEL"
  },
    { 
    id: 1,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    title: "Staff Augmentation: The Ultimate Strategy for Business Growth",
    tag: "Staff Augmentation",
    readTime: "5 min read",
    category: "ZIEL"
  },
  
];

const CLIENTS = ["Madinah", "Naviti Management", "Digi Staff", "Ting", "Zown", "1WEB","Artifical Intelligence", "Development", "UI-UX Design"];

// ─── RECENT WORK WITH DESCRIPTIONS ───
const RECENT_WORK = [
  { 
    label: "AI",
    title: "AI-Driven Translation of Edutainment content of a Satellite Channel",
    description: "In an effort to make Edutainment content of a Satellite channel more accessible to a global...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    bg: "#1a1a1a",
    tag: "Latest integration just arrived"
  },
  { 
    label: "SaaS",
    title: "AI-Driven Construction Project and Quality Management System",
    description: "The construction industry faces numerous challenges related to project management, quality...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    bg: "#0d0d0d",
    tag: "SaaS"
  },
  { 
    label: "Dashboard",
    title: "Dynamic Dashboard",
    description: "Unlock Product Insights Make Better Decisions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    bg: "#111",
    tag: "Insights"
  },
  { 
    label: "AI",
    title: "Designed to revolutionize the management of automobile requirements.",
    description: "Req-AI (Requirement-AI) automates requirement gathering and management processes.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    bg: "#0a0a0a",
    tag: "Automation"
  },
];

// ─── IMAGES FOR TICKER ───
const TICKER_IMAGES = [
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop", alt: "Tech innovation" },
  { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", alt: "Digital transformation" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", alt: "Data analytics" },
  { src: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=300&fit=crop", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop", alt: "Office workspace" },
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop", alt: "Coding" },
];

export default function ZielGlobalHome() {
  const [menuOpen, setMenuOpen]               = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const [activeTestimonial, setActiveT]       = useState(0);
  const [emailInput, setEmailInput]           = useState("");
  const [submitted, setSubmitted]             = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveT(p => (p + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = () => {
    if (emailInput) { setSubmitted(true); setEmailInput(""); }
  };

  return (
    <div>

      {/* ── WHATSAPP FLOAT ── */}
      <a href="http://wa.me/447456234972" className="wa-float" target="_blank" rel="noreferrer">
        <span style={{ fontSize: "1.1rem" }}>💬</span>
        WhatsApp Us
      </a>

      {/* ── NAVBAR ── */}
      <div className={`navbar-wrap${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">

          <a href="#" className="logo-text">
            ZI<span className="logo-dot">ë</span>L
          </a>

          <div className="desktop-nav">
            {NAV_LINKS.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
          </div>

          <button className="lime-btn desktop-nav">
            Start a project <span>↗</span>
          </button>

          {/* Hamburger */}
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {[0, 1, 2].map(i => (
              <span key={i} className="hamburger-line" style={{
                transform: menuOpen
                  ? (i === 0 ? "rotate(45deg) translate(5px,5px)"
                  : i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                  : "none")
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button onClick={() => setMenuOpen(false)}
          style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}>
          ✕
        </button>
        {NAV_LINKS.map(l => (
          <a key={l} href="#" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <button className="lime-btn lime-btn-lg" style={{ marginTop: "auto", justifyContent: "center" }}>
          Start a project ↗
        </button>
      </div>

      {/* ── HERO ── */}
      <section className="hero-section">
        <p className="hero-subtitle">Your Trusted Partner for Digital Transformation</p>

        <h1 className="hero-title">
          Your Trusted Partner for Digital Transformation
        </h1>

        <p className="hero-desc">
          Accelerate innovation with our comprehensive software development and cloud-based solutions
        </p>

        <div className="hero-cta">
          <button className="lime-btn lime-btn-lg">
            Start a project <span style={{ fontSize: "1.1rem" }}>↗</span>
          </button>
        </div>
      </section>

      {/* ── CLIENT TICKER ── */}
      <div className="ticker-section">
        <div className="ticker-outer">
          <div className="ticker-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div key={i} className="ticker-item">
                <span className="ticker-name">{c}</span>
                <span className="ticker-dot">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── IMAGE TICKER ─── */}
      <div className="image-ticker-section">
        <div className="image-ticker-outer">
          <div className="image-ticker-track">
            {[...TICKER_IMAGES, ...TICKER_IMAGES, ...TICKER_IMAGES].map((img, i) => (
              <div key={i} className="image-ticker-item">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="image-ticker-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="about-section">
        <div className="about-grid">
          {/* LEFT: Big Bold Heading (image jesa) */}
          <div className="about-left">
            <h2 className="about-heading">
              A strategic technology partner dedicated to elevating your brand, empowering businesses of every size and industry with cost-effective, customized solutions.
            </h2>
          </div>

          {/* RIGHT: Description paragraphs + CTA */}   
          <div className="about-right">
            <p>
              Founded in 2019, Ziel Global is a trusted software house specialising in AI, Staff Augmentation, ERP Consultancy, Cloud Engineering, Cybersecurity, and Custom Software Development.
            </p>
            <p>
              We focus on delivering innovative, reliable, and scalable solutions tailored to meet the unique needs of every client. Whether it's leveraging AI for smarter decision-making, streamlining operations with ERP systems, fortifying your digital security, or building custom software, Ziel Global ensures every project exceeds expectations.
            </p>
            <p>
              Our team is committed to driving digital transformation and empowering businesses with cutting-edge technology. With expertise in cloud engineering and a deep understanding of cybersecurity, we are equipped to handle even the most complex challenges.
            </p>
            <p>
              If you're looking for a dependable software partner to elevate your business, Ziel Global is here to help
            </p>
            <button className="lime-btn lime-btn-lg">
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ─── LETS WORK TOGETHER - HORIZONTAL TICKER ─── */}
      <div className="work-ticker-section">
        <div className="work-ticker-outer">
          <div className="work-ticker-track">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="work-ticker-item">
                <span className="work-ticker-text">✦ Let's work together</span>
                <span className="work-ticker-dot">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="services-inner">
          <div className="services-header">
            <div>
              <div className="section-label">Services</div>
              <h2 className="section-heading">Comprehensive IT Solutions</h2>
            </div>
            <a href="#">See all services →</a>
          </div>

          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="svc-card">
                <div className="svc-icon">{s.icon}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ── RECENT WORK ── */}
<section className="work-section">
  <div className="work-inner">
    <div className="section-label">Portfolio</div>
    <div className="work-header">
      <h2 className="section-heading">Our Recent Work</h2>
      <a href="#" className="work-view-all">See more of our work →</a>
    </div>

    <div className="work-grid-modern">
      {RECENT_WORK.map((w, i) => (
        <div key={i} className="work-card-modern">
          <div className="work-card-image-wrap">
            <img 
              src={w.image} 
              alt={w.title}
              className="work-card-bg-image"
              loading="lazy"
            />
            <div className="work-card-overlay-dark" />
          </div>
          
          <div className="work-card-body">
            <span className="work-card-label">{w.label}</span>
            <h3 className="work-card-title">{w.title}</h3>
            <p className="work-card-desc">{w.description}</p>
            
            {w.tag && (
              <div className="work-card-tag">
                <span className="work-card-tag-icon">✦</span>
                {w.tag}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="testimonials-label">Client Love</div>
          <h2 className="testimonials-heading">Why our clients love us!</h2>

          <div className="testimonial-wrapper">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-item" style={{
                position: i === 0 ? "relative" : "absolute",
                top: 0, left: 0, right: 0,
                opacity: activeTestimonial === i ? 1 : 0,
                transform: `translateY(${activeTestimonial === i ? 0 : 16}px)`,
                pointerEvents: activeTestimonial === i ? "auto" : "none",
              }}>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveT(i)}
                className={`testimonial-dot${activeTestimonial === i ? " active" : ""}`}
                style={{ width: activeTestimonial === i ? 32 : 8 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION (UPDATED) ── */}
      <section className="blog-section">
        <div className="blog-inner">
          <div className="blog-header">
            <div>
              <div className="section-label">Blog</div>
              <h2 className="section-heading">The latest from our den</h2>
            </div>
            <a href="#" className="blog-view-all">View all blogs →</a>
          </div>

          <div className="blog-grid-horizontal">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="blog-card-horizontal">
                <div className="blog-card-image-wrap">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="blog-card-bg-image"
                    loading="lazy"
                  />
                  <div className="blog-card-overlay">
                    <div className="blog-card-category">{post.category}</div>
                    <div className="blog-card-content">
                      <h3 className="blog-card-title">{post.title}</h3>
                      <div className="blog-card-meta">
                        <span className="blog-card-tag">{post.tag}</span>
                        <span className="blog-card-read">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <div className="section-label section-label-center">Newsletter</div>
          <h2 className="newsletter-heading">Stay Ahead with Our Latest Updates</h2>
          <p className="newsletter-desc">Don't miss out! Join our growing community.</p>

          {submitted ? (
            <div className="newsletter-success">✅ You're subscribed! Welcome aboard.</div>
          ) : (
            <div className="newsletter-form">
              <input
                className="newsletter-input"
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                placeholder="Enter your email"
              />
              <button className="lime-btn" onClick={handleSubmit}>Subscribe↗</button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <div className="cta-inner">
          <div className="cta-label">Ready to start</div>
          <h2 className="cta-heading">
            Whatever you need,<br />
            <span className="lime">we got your back</span>
          </h2>
          <button className="lime-btn lime-btn-lg" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Start a project ↗
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">ZI<span className="lime">ë</span>L</div>
              <p className="footer-desc">
                A Software Development Agency with expertise, on a mission to help you take the next step in your business.
              </p>
              <div className="footer-socials">
                {["LI", "TW", "GH"].map(s => (
                  <div key={s} className="social-btn">{s}</div>
                ))}
              </div>
            </div>

            {[
              { title: "Services", links: ["Staff Augmentation", "Artificial Intelligence", "Cyber Security", "Cloud Engineering", "Mobile App Dev", "UI/UX Design"] },
              { title: "Explore",  links: ["Home", "Work", "Blog", "Products", "About", "Contact"] },
              { title: "Contact",  links: ["+44 7456 234972", "contact@zielglobal.com"] },
            ].map(col => (
              <div key={col.title}>
                <div className="footer-col-title">{col.title}</div>
                {col.links.map(l => <a key={l} href="#" className="footer-link">{l}</a>)}
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2025 Ziel Global. All rights reserved.</span>
            <div className="footer-legal">
              {["Terms & Conditions", "Privacy Policy"].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a> 
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}