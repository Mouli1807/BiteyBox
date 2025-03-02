

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We'll get in touch soon.`);
        setFormData({ name: "", email: "" });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon linkedin" /> LinkedIn
                </a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon github" /> GitHub
                </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
