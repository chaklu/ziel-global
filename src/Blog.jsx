import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          ZIËL
        </Link>

        <ul className="nav-links">
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Link to="/contact" className="project-btn">
          Start a project ↗
        </Link>
      </nav>

      <section className="about-hero">
        <p className="about-subtitle">
          Welcome to the Ziel Global Blog
        </p>

        <h1 className="about-title">
          It is more than just a resource—it’s your partner in navigating
          the complexities of the digital era.
        </h1>

        <Link to="/contact" className="contact-btn">
          Contact us ↗
        </Link>
      </section>
      
<section className="blog-category-section">

  <div className="search-box">
    <span className="search-icon">🔍</span>

    <input
      type="text"
      placeholder="Type to start searching..."
    />
  </div>

  <div className="category-bar">

    <button className="active">Explore all</button>

    <button>AI Development</button>

    <button>Cloud</button>

    <button>Cyber Security</button>

    <button>ERP Development & Consultancy</button>

    <button>Mobile App Development</button>

    <button>Odoo</button>

    <button>Staff Augmentation</button>

    <button>Web App Development</button>

    <button>Cloud</button>

     <button>ERP Development & Consultancy</button>

  </div>

</section>
<section className="latest-blog-section">

  <div className="latest-blog-grid">

    <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
        alt=""
      />

      <p className="blog-time">5 min read</p>

      <h3>
        2025 and Beyond: The Trajectory
        of Web Development
      </h3>
    </div>

    <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900"
        alt=""
      />

      <p className="blog-time">6 min read</p>

      <h3>
        Mitigating Data Breaches:
        Strategies for Businesses in
        Today's Threat Landscape
      </h3>
    </div>

    <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
        alt=""
      />

      <p className="blog-time">5 min read</p>

      <h3>
        Mastering the Upgrade to
        Odoo 18: Best Practices
        and Insights
      </h3>
    </div>
        <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
        alt=""
      />

      <p className="blog-time">5 min read</p>

      <h3>
        Mastering the Upgrade to
        Odoo 18: Best Practices
        and Insights
      </h3>
    </div>
        <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900"
        alt=""
      />

      <p className="blog-time">5 min read</p>

      <h3>
        Mastering the Upgrade to
        Odoo 18: Best Practices
        and Insights
      </h3>
    </div>
        <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
        alt=""
      />

      <p className="blog-time">5 min read</p>

      <h3>
        Mastering the Upgrade to
        Odoo 18: Best Practices
        and Insights
      </h3>
    </div>
        <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900"
        alt=""
      />

      <p className="blog-time">5 min read</p>

      <h3>
        Mastering the Upgrade to
        Odoo 18: Best Practices
        and Insights
      </h3>
    </div>
        <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
        alt=""
      />

      <p className="blog-time">5 min read</p>

      <h3>
        Mastering the Upgrade to
        Odoo 18: Best Practices
        and Insights
      </h3>
    </div>
        <div className="latest-card">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
        alt=""
      />

      <p className="blog-time">5 min read</p>

      <h3>
        Mastering the Upgrade to
        Odoo 18: Best Practices
        and Insights
      </h3>
    </div>

  </div>

</section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                ZI<span className="lime">ë</span>L
              </div>

              <p className="footer-desc">
                A Software Development Agency with expertise, on a mission to
                help you take the next step in your business.
              </p>

              <div className="footer-socials">
                {["LI", "TW", "GH"].map((s) => (
                  <div key={s} className="social-btn">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Services",
                links: [
                  "Staff Augmentation",
                  "Artificial Intelligence",
                  "Cyber Security",
                  "Cloud Engineering",
                  "Mobile App Dev",
                  "UI/UX Design",
                ],
              },
              {
                title: "Explore",
                links: [
                  "Home",
                  "Work",
                  "Blog",
                  "Products",
                  "About",
                  "Contact",
                ],
              },
              {
                title: "Contact",
                links: [
                  "+44 7456 234972",
                  "contact@zielglobal.com",
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="footer-col-title">{col.title}</div>

                {col.links.map((l) => (
                  <a key={l} href="#" className="footer-link">
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © 2025 Ziel Global. All rights reserved.
            </span>

            <div className="footer-legal">
              {["Terms & Conditions", "Privacy Policy"].map((l) => (
                <a key={l} href="#" className="footer-link">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="whatsapp">
        WhatsApp Us
      </a>
    </>
  );
}