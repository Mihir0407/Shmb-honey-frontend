// src/components/WhyUs/Benefits/WhyUsBenefits.jsx
import React from "react";
import "./WhyUsBenefits.css";

/* benefit items - change text if you want */
const benefits = [
  {
    icon: "child",
    title: "Useful in weight Management",
    text:
      "Did you know you can use honey for weight management? Honey also helps improve your overall health.",
  },
  {
    icon: "shield",
    title: "Strengthens Immune system",
    text:
      "Honey has medicinal properties that naturally help with sore throats and immune support.",
  },
  {
    icon: "smile",
    title: "Nourishes your skin and face",
    text:
      "Using honey for skin is useful because of its moisturizing and nourishing properties.",
  },
  {
    icon: "brain",
    title: "Boosts your memory",
    text:
      "Foods that support brain health help maintain cognition as we age — honey contains nutrients helpful for memory.",
  },
  {
    icon: "cough",
    title: "Home Remedy for Cough",
    text:
      "Honey is a widely recommended home remedy for dry and wet coughs — soothing and effective.",
  },
  {
    icon: "bed",
    title: "Acts as a Natural Sleeping Aid",
    text:
      "Try warm milk with a teaspoon of honey before bed — a traditional remedy to ease falling asleep.",
  },
];

function IconSVG({ name }) {
  const common = {
    className: "benefit-svg",
    "aria-hidden": true,
  };
  switch (name) {
    case "child":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      );
    case "shield":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 2l7 4v5c0 5.25-3.75 9.5-7 11-3.25-1.5-7-5.75-7-11V6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      );
    case "smile":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none"/>
          <path d="M8 14s1.3 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          <path d="M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "brain":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 2c3 0 6 2 6 5v1h2v7h-2v1c0 3-3 5-6 5s-6-2-6-5v-1H4V8h2V7c0-3 3-5 6-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      );
    case "cough":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M3 21h18M6 8c0 3.5 3 6 6 6s6-2.5 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M9 3v4M15 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
        </svg>
      );
    case "bed":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M2 12v6h2v-4h16v4h2v-8c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyUsBenefits() {
  return (
    <section className="whyus-benefits-panel" aria-label="Honey benefits">
      {/* overlay background + rounded panel */}
      <div className="benefits-overlay" />

      {/* optional sunflower decorative image (place public/images/sunflower.png) */}
      <div className="benefits-sunflower" aria-hidden />

      <div className="container benefits-container">
        {/* header area above grid (small yellow label + big title) */}
        <div className="benefits-header">
          <div className="benefits-label">Honey Benefits</div>
          <h2 className="benefits-title">Empower Your <br /> Everyday Wellness</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
          <div className="benefit-card">
  <div className="benefit-icon">
    <IconSVG name={b.icon} />
  </div>

  <div className="benefit-text">
    <h3 className="benefit-title-item">{b.title}</h3>
    <p className="benefit-desc">{b.text}</p>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
