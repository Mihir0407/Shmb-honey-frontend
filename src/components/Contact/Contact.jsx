import { useState } from "react";
import api from "../../api";
import PageHero from "../common/PageHero/PageHero";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post("/contact", form);
    setSuccess("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* COMMON HERO */}
      <PageHero
        title="Contact Us"
        subtitle="Shri Harimadhur Bhandar"
        image="/images/privacy.png"
        id="contact-hero"
      />

      <section className="contact-section container">
        {/* CARD */}
        <div className="contact-card">
          {/* LEFT : FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Get In Touch</h3>
            <p className="form-sub">
              We are here for you! How can we help?
            </p>

            <input
              name="name"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Enter Your Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="send-btn">
              Send
            </button>

            {success && <p className="success">{success}</p>}
          </form>

          {/* RIGHT : IMAGE + INFO */}
          <div className="contact-side">
            <img src="../images/contact.jpg" alt="Contact" />

            <div className="contact-info">
              <p>📞 +91 99898 23496 &nbsp; | &nbsp; +91 94263 49332</p>
              <p>📧 support@shriharimadhur.com</p>
              <p>
                📍 46, Gopinath Industrial Hub, Ambika Tube Mill Compound,
                Nr. Vatva GIDC Overbridge, Vatva, Ahmedabad - 382440
              </p>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="contact-map">
          <iframe
            title="SHMB Location"
            src="https://www.google.com/maps?q=46%20Gopinath%20Industrial%20Hub%20Ambika%20Tube%20Mill%20Compound%20Vatva%20Ahmedabad&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
