import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import profile from '../assets/madhan1.jpg';

function Hero() {
  const contactRef = useRef(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-card">
          <div className="hero-left">
            <img src={profile} alt="Madhan Sharon" />
          </div>

          <div className="hero-right">
            <h1>Hi, I’m Madhan Sharon.</h1>
            <p>
              I’m a Full-Stack Developer with experience in building dynamic,
              responsive, and scalable web applications using the MERN stack.
              I’m passionate about creating impactful software and open to new
              opportunities.
            </p>
            <p className='para2'> I’m a Full-Stack Developer[MERN]</p>

            <div className="buttons">
              <Link to="/projects">
                <button>Projects</button>
              </Link>
              <a
                href={`${import.meta.env.BASE_URL}Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Resume</button>
              </a>

              <a
                href="https://github.com/MadhanSharon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://www.linkedin.com/in/madhansharonv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>LinkedIn</button>
              </a>

              {/* ✅ Contact button toggles section */}
              <button
                className="contact-btn"
                onClick={() => setShowContact(!showContact)}
              >
                {showContact ? 'Close Contact' : 'Contact'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Contact Section (shows only when toggled) */}
      {showContact && (
        <div
          ref={contactRef}
          className="contact-details"
          id="contactSection"
        >
          <h2>Contact Me</h2>
          <p>Email: madhansharonv@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      )}
    </>
  );
}

export default Hero;
