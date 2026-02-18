import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>

        <p>
          For recruiter inquiries, reach me at shibashis.dey5@gmail.com.
          For freelance work, reach me at workshibashisdemo@gmail.com.
        </p>

        <div className="contact-details">
          <p><strong>Recruiter Email:</strong> shibashis.dey5@gmail.com</p>
          <p><strong>Freelance Email:</strong> workshibashisdemo@gmail.com</p>
          <p><strong>Location:</strong> Bangalore, India</p>
          <p><strong>Availability:</strong> Accepting new freelance work</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a 
              href="https://linkedin.com/in/shibashis-dey-151876213" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/shibashis-dey-151876213
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/shibashisdey"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/shibashisdey
            </a>
          </p>
        </div>

        {/* <div className="contact-actions">
          <a
            href="mailto:shibashis.dey5@gmail.com?subject=Project%20Inquiry&body=Hi%20Shibashis%2C%0A%0AI%27m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Here%20are%20the%20details%3A%0A-%20Company%2FProject%20Name%3A%0A-%20Scope%2FGoals%3A%0A-%20Timeline%3A%0A-%20Budget%3A%0A%0AThanks!"
            className="primary-btn"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/shibashis-dey-151876213"
            className="secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </div> */}
        <div className="contact-actions">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shibashis.dey5@gmail.com&su=Recruiter%20Inquiry&body=Hi%20Shibashis%2C%0A%0AI%27m%20reaching%20out%20regarding%20a%20Full%20Stack%20Developer%20opportunity.%0A%0ARole%3A%0ALocation%3A%0ACompensation%3A%0AStart%20Date%3A%0A%0AThanks!"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Zm0 2.1v.4l8 4.6 8-4.6v-.4L12 13 4 8.6Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Email Recruiter
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=workshibashisdemo@gmail.com&su=Freelance%20Inquiry&body=Hi%20Shibashis%2C%0A%0AI%27m%20interested%20in%20working%20with%20you%20on%20a%20project.%20Here%20are%20the%20details%3A%0A-%20Company%2FProject%20Name%3A%0A-%20Scope%2FGoals%3A%0A-%20Timeline%3A%0A-%20Budget%3A%0A%0AThanks!"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Zm0 2.1v.4l8 4.6 8-4.6v-.4L12 13 4 8.6Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Email for Freelance
          </a>

          <a
            href="https://linkedin.com/in/shibashis-dey-151876213"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M6.5 9.5V18H4V9.5h2.5Zm-1.3-4a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9ZM10.5 9.5H13v1.2h.03c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.74 3.13 4V18h-2.5v-3.6c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.94-1.38 1.9V18h-2.5V9.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            LinkedIn
          </a>

          <a
            href="https://github.com/shibashisdey"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            <span className="btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.1.66-.2.66-.47v-1.74c-2.7.6-3.27-1.15-3.27-1.15-.44-1.12-1.07-1.42-1.07-1.42-.87-.6.06-.6.06-.6.96.07 1.47.99 1.47.99.85 1.47 2.23 1.05 2.78.8.08-.62.33-1.05.6-1.3-2.15-.25-4.4-1.08-4.4-4.8 0-1.06.38-1.93 1-2.6-.1-.25-.43-1.27.1-2.65 0 0 .82-.26 2.68 1a9.2 9.2 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .53 1.38.2 2.4.1 2.65.62.67 1 1.54 1 2.6 0 3.73-2.26 4.55-4.42 4.79.34.3.64.88.64 1.78v2.65c0 .27.18.58.67.47A9.5 9.5 0 0 0 12 2.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
