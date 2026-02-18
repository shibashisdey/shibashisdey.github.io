import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Food Ordering & Table Reservation System</h3>
          <p className="tech-stack">
            Spring Boot | MySQL | Angular
          </p>
          <p>
            Built a full-stack food ordering and table reservation platform using
            Spring Boot and Angular. Designed REST APIs for order management,
            reservation handling, and customer interactions. Integrated frontend
            components with backend services using HTTP requests, implemented form
            validation, and structured MySQL database schemas for efficient order tracking.
          </p>
        </div>

        <div className="project-card">
          <h3>PG Management Application</h3>
          <p className="tech-stack">
            Spring Boot | MySQL | Angular
          </p>
          <p>
            Developed a full-stack PG management system to streamline tenant onboarding,
            room allocation, and rent tracking. Designed backend services using Spring Boot
            and implemented relational database models in MySQL. Built responsive Angular
            interfaces and integrated them with REST APIs for dynamic data handling.
          </p>
        </div>

        <div className="project-card">
          <h3>Restaurant Portfolio Website</h3>
          <p className="tech-stack">
            React | Frontend Development
          </p>
          <p>
            Created a responsive React-based website for a restaurant, focusing on
            component-based UI development, routing, and modern design practices.
            Implemented reusable components and structured layout for clean and
            maintainable frontend architecture.
          </p>
        </div>

        <div className="project-card">
          <h3>APS Banking System (CGI)</h3>
          <p className="tech-stack">
            Java | Spring Boot | Angular | Kubernetes | Jenkins | SQL
          </p>
          <p>
            Contributed to enterprise banking applications by developing Java Spring Boot
            microservices and supporting Angular-based frontend integration. Handled
            production debugging, API validation, SQL verification, and deployment
            monitoring using Kubernetes and Jenkins in a microservices environment.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
