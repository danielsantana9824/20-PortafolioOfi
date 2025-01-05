import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {/* Reemplaza los enlaces con los correctos */}
        <div className="project">
          <h3>Project 1</h3>
          <img src="path/to/project-image.jpg" alt="Project 1" />
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://live-project-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        {/* Repite esto para más proyectos */}
      </div>
    </section>
  );
};

export default Portfolio;