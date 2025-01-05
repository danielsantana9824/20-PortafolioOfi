import React from "react";

const Resume = () => {
  return (
    <section className="resume container mt-5">
      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-body">
          <h2 className="text-center text-primary mb-4">My Resume</h2>
          
          <div className="d-flex justify-content-center mb-4">
            <a
              href="path/to/resume.pdf"
              download
              className="btn btn-primary btn-lg rounded-3"
            >
              Download My Resume
            </a>
          </div>

          <h3 className="text-secondary mb-3">Skills</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-check-circle text-success me-2"></i>
              JavaScript
            </li>
            <li className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-check-circle text-success me-2"></i>
              React
            </li>
            <li className="list-group-item border-0 d-flex align-items-center">
              <i className="bi bi-check-circle text-success me-2"></i>
              Node.js
            </li>
            {/* Agregar más habilidades aquí */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
