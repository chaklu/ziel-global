import { Link } from "react-router-dom";
import "./Work.css";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "https://zielglobal.com/wp-content/uploads/2025/02/Haramain.png",
      time: "2 min read",
      title:
        "Madinah Crowdfunding Platform: Comprehensive Design and Web Development Services by Ziel Global",
    },
    {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/02/Madinah.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/02/UX-1.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/02/Placeholder-1.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/02/Placeholder-1.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/02/Placeholder-1.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/02/Placeholder-1.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/02/Reliance.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/01/Nozte.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/01/Note231.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2025/01/Not213123e.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
     {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2024/12/Frame-ai55.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
       {
      id: 2,
      image: "https://zielglobal.com/wp-content/uploads/2024/12/Frame-ai55.png",
      time: "2 min read",
      title:
        "Building an Intuitive & Scalable UI/UX for Haramain's Digital Vision",
    },
  ];

  return (
    <>
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="about-hero">
        <p className="about-subtitle">
         Transforming Vision into Results: Ziel Global's Successful Case Studies.
        </p>

        <h1 className="about-title">
       Our case studies exemplify unparalleled expertise in delivering innovative, results-driven solutions tailored to complex challenges.
        </h1>

        <Link to="/contact" className="contact-btn">
          Contact us ↗
        </Link>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-container">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-content">
                <span>{blog.time}</span>
                <h3>{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
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
};

export default BlogSection; 