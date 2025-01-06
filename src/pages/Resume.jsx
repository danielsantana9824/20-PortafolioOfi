const Resume = () => {
  return (
    <section className="resume container mt-5">
      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-body">
          {/* Título principal */}
          <h2 className="text-center text-primary mb-4">My Resume</h2>
          
          {/* Botón de descarga */}
          <div className="d-flex justify-content-center mb-4">
            <a
              href="path/to/resume.pdf"
              download
              className="btn btn-outline-primary btn-lg rounded-pill px-4"
            >
              Download My Resume
            </a>
          </div>

          {/* Sección de habilidades */}
          <h3 className="text-secondary mb-4 text-center">Skills</h3>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  JavaScript
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  React
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Node.js
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  TypeScript
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Angular
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush text-center">
              <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Jhipster
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Spring Boot
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  JPQL
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  HQL
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  SQL
                </li>
                <li className="list-group-item border-0 d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Java EE
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
