import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-eyebrow">Open to Full Stack Opportunities</div>

        <h1>Full Stack Developer</h1>

        <h2>Spring Boot • React • Angular • REST APIs • SQL • Kubernetes</h2>

        <p>
          Full Stack Developer with 2+ years of experience building
          enterprise-grade backend systems and responsive frontend applications.
          I deliver end-to-end solutions — from requirements to APIs, UI, and
          production deployment — with log analysis and troubleshooting as a
          bonus strength.
        </p>

        <div className="hero-stats">
          <div>
            <strong>2+ Years</strong>
            <span>Enterprise Banking Experience</span>
          </div>
          <div>
            <strong>Full Stack Builds</strong>
            <span>Spring Boot + Angular / React</span>
          </div>
          <div>
            <strong>End-to-End Delivery</strong>
            <span>Build, deploy, and support</span>
          </div>
        </div>

        <div className="hero-highlights">
          <div className="highlight-item">
            <span>End-to-End Delivery</span>
            <p>Architecture, APIs, UI, and deployment</p>
          </div>
          <div className="highlight-item">
            <span>Backend Depth</span>
            <p>Spring Boot, microservices, SQL, integrations</p>
          </div>
          <div className="highlight-item">
            <span>Frontend Quality</span>
            <p>React/Angular dashboards and UX polish</p>
          </div>
        </div>

        <div className="hero-buttons">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shibashis.dey5@gmail.com&su=Project%20Inquiry&body=Hi%20Shibashis%2C%0A%0AI%27m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Here%20are%20the%20details%3A%0A-%20Company%2FProject%20Name%3A%0A-%20Scope%2FGoals%3A%0A-%20Timeline%3A%0A-%20Budget%3A%0A%0AThanks!"
            className="primary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a Project
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects
          </a>
        </div>

        <a
          href="/resume.pdf"
          className="hero-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Hero;
