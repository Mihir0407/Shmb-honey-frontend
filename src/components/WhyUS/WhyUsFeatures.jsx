import React from "react";
import "./WhyUsFeatures.css";

const features = [
  {
    img: "/images/W1.png", // public/images/W1.png
    title: "Sustainably Sourced",
    text: "No unsustainable or unethical business practices.",
  },
  {
    img: "/images/W2.png",
    title: "100% Raw",
    text: "No heating or filtering to compromise nutrients.",
  },
  {
    img: "/images/W3.png",
    title: "All Natural",
    text: "No added sugar, preservatives, artificial ingredients or GMOs.",
  },
  {
    img: "/images/W4.png",
    title: "Allergen-Free",
    text: "No major allergens, like gluten and dairy.",
  },
];

export default function WhyUsFeatures() {
  return (
    <section className="whyus-features-section" aria-label="Why us features">
      <div className="container features-container">
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon-wrap">
                <img
                  src={f.img}
                  alt={f.title}
                  className="feature-icon"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <h4 className="feature-title">{f.title}</h4>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
