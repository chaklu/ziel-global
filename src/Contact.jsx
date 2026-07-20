import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
const faqs = [
  {
    question: "We have a limited budget, will you still work with us?",
    answer:
      "Yes. We work with startups and enterprises of all sizes. We can recommend a solution that fits your budget.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide Staff Augmentation, Artificial Intelligence, Cyber Security, Cloud Solutions, UI/UX Design and Mobile App Development.",
  },
  {
    question: "Can we arrange a phone call to discuss?",
    answer:
      "Absolutely! Contact us and we'll schedule a meeting at your convenience.",
  },
];
function FAQSection() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-left">
        <h2>
          The answers to
          <br />
          your questions.
        </h2>

        <button className="faq-btn">
          View all FAQs <span>↗</span>
        </button>
      </div>

      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {active === index ? "−" : "+"}
              </span>
            </div>

            {active === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default function Contact() {
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

  <button className="project-btn">
    Start a project <span>↗</span>
  </button>

</nav>
      <section className="contact-section">

  <p className="contact-subtitle">
    Start your project journey here!
  </p>

  <h1 className="contact-title">
    Technology fuels your progress and Ziel Global makes it work for you
  </h1>

  <div className="contact-container">

    {/* Left Side */}

    <div className="contact-left">

      <p>
        Ziel Global is a software development agency with global presence.
        We aim to deliver exceptional service and providing tailored
        solutions to help you achieve your goals. We strive to add value
        for each client and have the best talent working for us.
      </p>

      <p>
        Ziel Global is the right partner you can rely on to make technology
        work for you.
      </p>

      <button className="service-btn">
        See all services ↗
      </button>

    </div>

    {/* Right Side */}

    <div className="contact-right">

      <div className="row">

        <input
          type="text"
          placeholder="Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

      </div>

      <div className="row">

        <input
          type="text"
          placeholder="Phone Number (optional)"
        />

        <select>
          <option>How did you hear about Ziel?</option>
          <option>Google</option>
          <option>Facebook</option>
          <option>LinkedIn</option>
          <option>Friend</option>
        </select>

      </div>

      <textarea
        rows="8"
        placeholder="Tell us about your project"
      ></textarea>

      <button className="send-btn">
        Send Message
      </button>

    </div>

  </div>

</section>
{/* ================= UK PRACTICE ================= */}

<section className="uk-practice">

  <div className="uk-left">

    <h2>Our UK Practice</h2>

    <h4>TEK HEADQUARTERS LIMITED</h4>
    <p className="reg">Registration number 11933665</p>

    <p className="uk-desc">
      Driving technological excellence across Europe, our UK office
      delivers customized software solutions and comprehensive IT
      services to meet diverse industry demands.
    </p>

    <div className="uk-info">

      <div>
        <h5>Studio Address</h5>
        <p>📍 11 Brindley Place, Brunswick Square,</p>
        <p>Birmingham, England, B1 2LP</p>
      </div>

      <div>
        <h5>Call Us</h5>
        <p>📞 +44 7944 898931</p>
        <p>📞 +44 7396 823752</p>
      </div>

    </div>

    <button className="direction-btn">
      Get directions <span>↗</span>
    </button>

  </div>

  <div className="uk-right">

    <img
      src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200"
      alt="UK Office"
    />

    <div className="profile-card">

      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt=""
      />

      <div>
        <h4>Mazher Syed</h4>
        <span>Practice Head - UK</span>
      </div>

    </div>

  </div>

</section>

<section className="canada-practice">

  <div className="canada-left">

    <h2>Our Canada Practice</h2>

    <h4>ZIEL GLOBAL INC.</h4>
    <p className="reg">Registration number 11933665</p>

    <p className="canada-desc">
   Our Canada office leads our North American operations, providing cutting-edge software solutions and exceptional client support tailored to your business needs.
    </p>

    <div className="canada-info">

      <div>
        <h5>Studio Address</h5>
        <p>📍 11 Brindley Place, Brunswick Square,</p>
        <p>Birmingham, England, B1 2LP</p>
      </div>

      <div>
        <h5>Call Us</h5>
        <p>📞 +44 7944 898931</p>
        <p>📞 +44 7396 823752</p>
      </div>

    </div>

    <button className="direction-btn">
      Get directions <span>↗</span>
    </button>

  </div>

  <div className="canada-right">

    <img
      src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200"
      alt="UK Office"
    />

    <div className="profile-card">

      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt=""
      />

      <div>
        <h4>Youssef Azad</h4>
        <span>Practice Head - Canada</span>
      </div>

    </div>

  </div>

</section>
<section className="pk-practice">

  <div className="pk-left">

    <h2>Our Pakistan Practice</h2>

    <h4>TEK HEADQUARTERS LIMITED</h4>
    <p className="reg">Registration number 11933665</p>

    <p className="pk-desc">
      Driving technological excellence across Europe, our UK office
      delivers customized software solutions and comprehensive IT
      services to meet diverse industry demands.
    </p>

    <div className="pk-info">

      <div>
        <h5>Studio Address</h5>
        <p>📍 11 Brindley Place, Brunswick Square,</p>
        <p>Birmingham, England, B1 2LP</p>
      </div>

      <div>
        <h5>Call Us</h5>
        <p>📞 +44 7944 898931</p>
        <p>📞 +44 7396 823752</p>
      </div>

    </div>

    <button className="direction-btn">
      Get directions <span>↗</span>
    </button>

  </div>

  <div className="pk-right">

    <img
      src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200"
      alt="UK Office"
    />

    <div className="profile-card">

      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt=""
      />

      <div>
        <h4>Basil Fawwad </h4>
        <span>Practice Head - UK</span>
      </div>

    </div>

  </div>

</section>
<section className="qt-practice">

  <div className="qt-left">

    <h2>Our Qatar Practice</h2>

    <h4>TEK HEADQUARTERS LIMITED</h4>
    <p className="reg">Registration number 11933665</p>

    <p className="qt-desc">
      Driving technological excellence across Europe, our UK office
      delivers customized software solutions and comprehensive IT
      services to meet diverse industry demands.
    </p>

    <div className="qt-info">

      <div>
        <h5>Studio Address</h5>
        <p>📍 11 Brindley Place, Brunswick Square,</p>
        <p>Birmingham, England, B1 2LP</p>
      </div>

      <div>
        <h5>Call Us</h5>
        <p>📞 +44 7944 898931</p>
        <p>📞 +44 7396 823752</p>
      </div>

    </div>

    <button className="direction-btn">
      Get directions <span>↗</span>
    </button>

  </div>

  <div className="qt-right">

    <img
      src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200"
      alt="UK Office"
    />

    <div className="profile-card">

      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt=""
      />

      <div>
        <h4>Chaudhary Hassan</h4>
        <span>Practice Head - UK</span>
      </div>

    </div>

  </div>

</section>
<FAQSection />

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