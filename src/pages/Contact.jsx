import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="contact container mt-5">
      <div className="card shadow-sm border-0 rounded-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div className="card-body">
          <h2 className="text-center text-primary mb-3">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control rounded-2"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ height: "30px", fontSize: "14px" }} // Reducción del tamaño
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control rounded-2"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ height: "30px", fontSize: "14px" }} // Reducción del tamaño
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control rounded-2"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                required
                style={{ fontSize: "14px" }} // Ajuste de tamaño
              ></textarea>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-sm rounded-2">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
