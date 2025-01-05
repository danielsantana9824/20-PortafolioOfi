import React from 'react';

const projects = [
  { title: 'Project 1', image: '/path-to-image1.jpg', liveLink: '#', repoLink: '#' },
  { title: 'Project 2', image: '/path-to-image2.jpg', liveLink: '#', repoLink: '#' },
  // Agrega más proyectos
];

const Portfolio = () => {
  return (
    <section>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
