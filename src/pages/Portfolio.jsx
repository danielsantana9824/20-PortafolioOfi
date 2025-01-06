const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Social-network",
      description: "This project involves building an API for a social network web application, where users can share their thoughts, react to friends' posts, and create a friend list. The API is designed using Express.js for routing, MongoDB for the database, and Mongoose for object data modeling (ODM). This project provides an understanding of how social networking platforms manage user data, interactions, and connections.",
      image: "./images/image.png",
      github: "https://github.com/danielsantana9824/18-Social-Network",
      demo: "https://app.screencastify.com/v3/watch/bevsVATzO1TENspXyY6C",
    },
    {
      id: 2,
      title: "Tech Blog",
      description: "This project focuses on creating a CMS-style blog platform where developers can share insights, tutorials, and thoughts on technical concepts, recent advancements, and new technologies.",
      image: "./images/techBlog.png",
      github: "https://github.com/danielsantana9824/challenge-14Mvc",
      demo: "https://one4-techblog-0v7f.onrender.com",
    },
    {
      id: 3,
      title: "(PWA): Text Editor",
      description: "This project involves building a progressive web application (PWA) for a browser-based text editor. The application is a single-page application (SPA) that meets PWA criteria and includes offline functionality. It features data persistence techniques to ensure redundancy in case one storage method is unsupported by the browser. The application is built upon an existing codebase and incorporates methods for getting and storing data using `IndexedDB` with the `idb` package. ",
      image: "./images/testEditor.png",
      github: "https://github.com/danielsantana9824/19-Text-Editor",
      demo: "https://one9-text-editor-phor.onrender.com",
    },
    {
      id: 4,
      title: "NoteTaker",
      description: "This project focuses on creating APIs and implementing modularization to manage tasks effectively. The goal is to design a system that uses APIs to organize tasks efficiently, improving scalability and maintainability through modularized code. ",
      image: "./images/noteTaker.png",
      github: "https://github.com/danielsantana9824/challenge11NoteTaker",
      demo: "https://challenge11notetaker.onrender.com",
    },
  ];

  return (
    <section className="portfolio container mt-5">
      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-body">
          <h2 className="text-center text-primary mb-4">My Portfolio</h2>
          
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm me-2"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
