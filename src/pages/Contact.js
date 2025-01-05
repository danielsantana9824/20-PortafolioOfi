import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email.includes('@')) newErrors.email = 'Email is invalid';
    if (!form.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      {errors.name && <span>{errors.name}</span>}
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
      {errors.message && <span>{errors.message}</span>}
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
