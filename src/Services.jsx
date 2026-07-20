import { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import "./App.css";

const staff = [
  "Software Developers",
  "DevOps Engineers",
  "UI/UX Designers",
  "QA Engineers & Testers",
  "Cloud Architects & Specialists",
];
export default function Services() {
  const [submitted, setSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = () => {
    if (emailInput.trim()) {
      setSubmitted(true);
      setEmailInput("");
    }
  };
  return (
    
    <>
    
      {/* Navbar */}
      <nav className="navbar">

  <Link to="/" className="logo">
    ZIËL
  </Link>

  <ul className="nav-links">
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/Work">Work</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>

  <button className="project-btn">
    Start a project ↗
  </button>

</nav>

      {/* Hero */}
      <section className="hero">
        <p className="subtitle">Our Services</p>

        <h1>
          Experts at building Scalable
          <br />
          Software Solutions
        </h1>
      </section>

      {/* Technical Staff Augmentation */}
      <section className="technical">
        <h2 className="technical-title">
          Technical Staff Augmentation
        </h2>

        <div className="technical-container">

          {/* Left Side */}
          <div className="technical-left">
            <p>
              We provide highly skilled, on-demand technical professionals
              to supplement your team, ensuring seamless project delivery
              and faster time-to-market without the overhead of long-term
              hiring.
            </p>
          </div>

          {/* Right Side */}
          <div className="technical-right">
            {staff.map((item, index) => (
              <div className="staff-item" key={index}>
                <div className="number">{index + 1}</div>
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
{/* ================= Artificial Intelligence ================= */}

<section className="technical">
  <h2 className="technical-title">
    Artificial Intelligence
  </h2>

  <div className="technical-container">

    {/* Left */}
    <div className="technical-left">
      <p>
        Harness AI to optimally extract value from your data,
        process automation, and derive exceptional insights to
        assist in effective change and monetization of the business.
      </p>
    </div>

    {/* Right */}
    <div className="technical-right">

      <div className="staff-item">
        <div className="icon-circle">🧠</div>
        <span>Natural Language Processing (NLP) Solutions</span>
      </div>

      <div className="staff-item">
        <div className="icon-circle">⚙️</div>
        <span>AI-Powered Automation</span>
      </div>

      <div className="staff-item">
        <div className="icon-circle">👁</div>
        <span>Application Development using Computer Vision</span>
      </div>

      <div className="staff-item">
        <div className="icon-circle">📦</div>
        <span>Custom AI Model & Agent Development</span>
      </div>

      <div className="staff-item">
        <div className="icon-circle">📊</div>
        <span>Predictive Analytics & Forecasting</span>
      </div>

    </div>

  </div>
</section>
{/* ================= Cyber Security ================= */}

<section className="technical">
  <h2 className="technical-title">
    Cyber Security
  </h2>

  <div className="technical-container">

    {/* Left */}
    <div className="technical-left">
      <p>
        Safeguard your enterprise from emerging cyber threats with our
        highly adaptive network security services that are tailored to
        shield data, systems and networks. We offer proactive protection
        to ensure your business stays secure.
      </p>
    </div>

    {/* Right */}
    <div className="technical-right">

      <div className="staff-item">
        <div className="number">1</div>
        <span>Threat Detection & Monitoring</span>
      </div>

      <div className="staff-item">
        <div className="number">2</div>
        <span>Security Audits & Risk Assessment</span>
      </div>

      <div className="staff-item">
        <div className="number">3</div>
        <span>Data Encryption & Privacy</span>
      </div>

      <div className="staff-item">
        <div className="number">4</div>
        <span>Incident Response & Recovery</span>
      </div>

      <div className="staff-item">
        <div className="number">5</div>
        <span>Security Awareness Training</span>
      </div>

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
      {/* ================= BLOG SECTION ================= */}

<section className="blog-section">

  <div className="blog-left">
    <h2>
      The latest from our
      <br />
      design studio
    </h2>

    <button className="blog-btn">
      View the blogs ↗
    </button>
  </div>

  <div className="blog-right">

    <div className="blog-card">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
        alt=""
      />

      <p className="read-time">5 min read</p>

      <h3>
        Staff Augmentation: The Ultimate Strategy
        for Business Growth
      </h3>
    </div>

    <div className="blog-card">
      <img
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900"
        alt=""
      />

      <p className="read-time">5 min read</p>

      <h3>
        Harnessing Generative AI:
        Transforming Modern Business Landscapes
      </h3>
    </div>

  </div>

</section>
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
      {/* WhatsApp */}
      <a href="#" className="whatsapp">
        WhatsApp Us
      </a>
    </>
  );
}