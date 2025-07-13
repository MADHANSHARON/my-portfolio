import { useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import profile from '/madhan1.jpg';

function Hero() {
  const contactRef = useRef(null);
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

            <div className="buttons">
              <Link to="/projects">
                <button>Projects</button>
              </Link>
              <a
                 href={`${import.meta.env.BASE_URL}madhan-resume.pdf`}
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
              {/* ✅ Last button */}
              <button onClick={scrollToContact}>Contact</button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Contact Section (Hidden until scrolled) */}
      <div ref={contactRef} className="contact-details">
        <h2>Contact Me</h2>
        <p>Email: madhansharonv@gmail.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>
    </>
  );
}

export default Hero;
