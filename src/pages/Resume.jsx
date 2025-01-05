import React from "react";

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="path/to/resume.pdf" download>Download My Resume</a>
      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Más habilidades */}
      </ul>
    </section>
  );
};

export default Resume;
