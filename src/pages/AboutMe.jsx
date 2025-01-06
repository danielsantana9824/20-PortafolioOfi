const AboutMe = () => {
  return (
    <section className="about-me py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src="path/to/photo.jpg"
              alt="Developer's photo"
              className="img-fluid rounded-circle border border-primary"
            />
          </div>
          <div className="col-md-8">
            <h2 className="text-primary">About Me</h2>
            <p>
              I graduated with an associate’s degree in Computing from the Technological Institute of Venezuela in 2020.
              After completing my studies, I began working at ITNoroeste as a Software Developer, where I spent 3 years honing
              my skills in software development, particularly with Angular, JHipster, and Spring Boot for web development and
              system integration. In 2022, I transitioned to Infocent as a Senior Programmer Analyst, where I took on more complex
              projects, provided technical leadership, and developed innovative software solutions, contributing to the company s
              success until 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
