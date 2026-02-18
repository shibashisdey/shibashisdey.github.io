import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Full-Stack Services</h2>
          <p>
            Focused on end-to-end delivery, reliable systems, and clean handoff.
            I work with product teams, founders, and agencies on short or
            long-term engagements.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Backend Architecture</h3>
            <p>
              API design, microservices, and system boundaries that scale with
              your growth.
            </p>
          </div>
          <div className="service-card">
            <h3>API Integration</h3>
            <p>
              Third-party integrations, payment flows, and automation pipelines
              for smoother operations.
            </p>
          </div>
          <div className="service-card">
            <h3>Performance & Stability</h3>
            <p>
              Debugging production issues, SQL optimization, and reliability
              improvements.
            </p>
          </div>
          <div className="service-card">
            <h3>Full-Stack Delivery</h3>
            <p>
              End-to-end builds with React or Angular for dashboards and
              customer-facing apps.
            </p>
          </div>
        </div>

        <div className="services-cta">
          <span>Typical engagements:</span>
          <p>
            MVP builds, legacy modernization, new feature delivery, and
            ongoing support retainers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
