import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2>Professional Experience</h2>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Software Engineer</h3>
            <span>CGI | July 2023 - March 2025</span>
          </div>

          <ul>
            <li>
              Developed and maintained Spring Boot microservices and supported Angular-based frontend integrations for enterprise banking clients.
            </li>
            <li>
              Investigated and resolved production incidents through end-to-end debugging across UI, API, and database layers.
            </li>
            <li>
              Validated REST API responses and optimized SQL queries to ensure data consistency and performance.
            </li>
            <li>
              Managed containerized deployments and monitored services using Kubernetes and Jenkins.
            </li>
            <li>
              Collaborated in Agile teams to deliver production-ready features under strict release timelines.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Freelance Software Developer</h3>
            <span>October 2025 - Present</span>
          </div>

          <ul>
            <li>
              Delivered full-stack solutions for clients, covering requirements, architecture, and deployment.
            </li>
            <li>
              Designed REST APIs and relational schemas using Spring Boot and MySQL.
            </li>
            <li>
              Built responsive frontends using Angular and React for admin and customer-facing flows.
            </li>
            <li>
              Led discovery, defined scope, and handed off maintainable code and documentation.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Intern</h3>
            <span>HighRadius | Jan 2022 - April 2022</span>
          </div>

          <ul>
            <li>
              Trained machine learning models to analyze enterprise business data.
            </li>
            <li>
              Worked with structured datasets to improve prediction quality and reliability.
            </li>
            <li>
              Applied data preprocessing, model evaluation, and workflow integration.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
