import { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import companies from "./images/companies.png";
import mustassam from "./images/image2.jpg";
import yousaf from "./images/image1.jfif";
import mazhar from "./images/image3.jfif";
import basit from "./images/image4.jfif";


const values = [
  {
    icon: "📖",
    title: "Simplicity",
    desc: "We believe in keeping our solutions and services as simple as possible to enable better understanding and easy adoption. We focus on quality and ensure every solution is fit for purpose."
  },
  {
    icon: "💚",
    title: "Innovation",
    desc: "Technology is an innovation business. We constantly refine our ideas, challenge conventional thinking and encourage creativity through collaboration."
  },
  {
    icon: "🛡️",
    title: "Trusted & Transparent",
    desc: "We build long-term relationships through honesty, trust and transparency. Professional ethics are at the heart of everything we do."
  },
  {
    icon: "👥",
    title: "Respect & Inclusion",
    desc: "We treat our partners and team members with dignity and respect. Diversity and collaboration help us continuously improve."
  },
  {
    icon: "⚙️",
    title: "Adaptable",
    desc: "Businesses change every day, and we believe in remaining adaptable. Continuous improvement ensures long-term success."
  }
];

function CoreValues() {
  return (
    <section className="core-section">

      <h2>Our Core Values</h2>

      <p className="core-text">
        At Ziel Global, our core values shape every decision, solution and
        project we undertake, serving as the backbone of our commitment to
        excellence and innovation.
      </p>

      <div className="core-grid">
        {values.map((item, index) => (
          <div className="core-card" key={index}>

            <div className="core-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}
const team = [
  {
    name: "Mustassam Abbasi",
    role: "Head of Global Practices",
    image: mustassam,
  },
  {
    name: "Yousaf",
    role: "Chief Executive Officer",
    image: yousaf,
  },
  {
    name: "Mazhar",
    role: "Software Engineer",
    image: mazhar,
  },
  {
    name: "Basit",
    role: "UI UX Designer",
    image: basit,
  },
];


const TeamSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="team-section">
      <div className="team-left">
        <h1>
          Lead.
          <br />
          Inspire.
          <br />
          Deliver.
        </h1>
      </div>

     <div
  className="team-slider"
  onMouseLeave={() => setActive(0)}
>
        {team.map((member, index) => (
          <div
            key={index}
            className={`team-card ${active === index ? "active" : ""}`}
            onMouseEnter={() => setActive(index)}
          >
            <img src={member.image} alt={member.name} />

            <div className="overlay"></div>

            {active === index ? (
              <div className="card-content">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ) : (
              <span className="vertical-name">{member.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
function CompanySection() {
  return (
    <section className="company-section">
      <div className="company-left">
        <img
          src={companies}
          alt="Top Companies"
          className="companies-image"
        />
      </div>

      <div className="company-right">
        <p>
          The Ziel Global Leadership team have known each other for decades,
          we have been aligned to the same vision of enabling business growth
          and sustainability using technology as a key enabler.
          <br /><br />
          Our leadership team has the knowledge, experience and a track
          record of growing, building, managing long term mutually beneficial
          relationships with our clients across the globe.
        </p>

       <Link to="/company" className="company-btn">
  Company Profile ↗
</Link>
      </div>
    </section>
  );
}
export default function About()  {
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
          At Ziel, we work every day toward our goal of creating a paradigm
          shift toward sustainable business practices.
        </p>

        <h1 className="about-title">
          Ziel means “goal” in German &amp; “soul” in Dutch,
          reflecting our drive to reach goals
          <br />
          with heart &amp; purpose.
        </h1>

        <Link to="/contact" className="contact-btn">
  Contact us ↗
</Link>
      </section>

      <TeamSection />
      <CompanySection />
      <CoreValues />
    
      <section className="blog-section">

  <div className="blog-left">
    <h2>
      The latest from our
      <br />
      design studio
    </h2>

   <Link to="/blog" className="blog-btn">
  View the blogs ↗
</Link>
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
