import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Freelance Full-Stack Services</h2>
          <p>
            Focused on freelance project delivery, reliable systems, and clean
            handoff. I work with founders, product teams, agencies, and small
            businesses on both short and long-term web development work.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Spring Boot Backend Development</h3>
            <p>
              REST API design, business logic, microservices, authentication,
              and backend architecture that scales with your product.
            </p>
          </div>
          <div className="service-card">
            <h3>React and Angular Frontends</h3>
            <p>
              Responsive dashboards, admin panels, forms, and customer-facing
              interfaces integrated cleanly with backend services.
            </p>
          </div>
          <div className="service-card">
            <h3>API Integration and Automation</h3>
            <p>
              Third-party integrations, payment flows, workflow automation, and
              external service connectivity for smoother operations.
            </p>
          </div>
          <div className="service-card">
            <h3>Freelance MVP and Support Work</h3>
            <p>
              End-to-end delivery for MVPs, feature builds, debugging, SQL
              optimization, and ongoing support after launch.
            </p>
          </div>
        </div>

        <div className="services-cta">
          <span>Typical engagements:</span>
          <p>
            MVP builds, internal tools, booking systems, dashboards, backend
            API work, legacy modernization, and ongoing freelance support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
