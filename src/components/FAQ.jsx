import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Freelance Project FAQ</h2>
          <p>
            Common questions from clients looking to hire a freelance full
            stack developer for product, API, dashboard, or support work.
          </p>
        </div>

        <div className="faq-list">
          <article className="faq-item">
            <h3>What freelance projects do you take on?</h3>
            <p>
              I work on business web applications, admin dashboards, MVPs,
              booking systems, REST APIs, frontend integrations, and feature
              delivery for existing products.
            </p>
          </article>

          <article className="faq-item">
            <h3>What technology stack do you use?</h3>
            <p>
              My strongest stack is Java, Spring Boot, React, Angular, SQL, and
              API integration work. I also support deployment and production
              debugging when needed.
            </p>
          </article>

          <article className="faq-item">
            <h3>Do you work remotely with clients?</h3>
            <p>
              Yes. I am available for remote freelance projects and can work
              with startups, agencies, and businesses across different time
              zones depending on scope.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
