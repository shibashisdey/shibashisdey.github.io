import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Full-Stack Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Backend Development</h3>
            <p>Java, Spring Boot, Spring MVC, Hibernate, REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>
            <p>MySQL, PostgreSQL, Oracle SQL, MongoDB, query design, optimization</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, Angular, HTML, CSS, JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>DevOps & Tools</h3>
            <p>Kubernetes, Jenkins, Git, GitLab, Postman, SonarQube</p>
          </div>

          <div className="skill-card">
            <h3>Practices</h3>
            <p>Agile, Scrum, microservices, testable code, Maven</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
