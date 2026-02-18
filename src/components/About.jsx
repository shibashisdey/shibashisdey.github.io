import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          I am a Full Stack Developer with strong expertise in backend development
          using Java and Spring Boot, and hands-on experience building frontend
          applications with React and Angular. I focus on designing clean REST APIs,
          structuring efficient database schemas, and building maintainable UI components.
        </p>

        <p>
          At CGI, I worked on enterprise banking systems where I contributed to
          backend feature development, frontend integration, and production issue
          resolution. My role involved end-to-end debugging across UI, API, and
          database layers, ensuring stability and performance in live environments.
        </p>

        <p>
          I enjoy building complete end-to-end systems — from API design and database
          modeling to frontend implementation and deployment — with a strong emphasis
          on code quality, scalability, and real-world usability.
        </p>
      </div>
    </section>
  );
};

export default About;
