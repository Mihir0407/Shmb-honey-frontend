import React from "react";
import "./HeroStory.css";

/**
 * HeroStory.jsx
 * - Put founder image in public/images/founder.jpg (referenced as /images/founder.jpg)
 * - Responsive: two-column layout that stacks on small screens
 * - Namespaced classes to avoid conflicts
 */

export default function HeroStory() {
  return (
    <section className="hs-section">
      <div className="hs-card container">
        {/* Left text column */}
        <div className="hs-left">
          <div className="hs-kicker">Our Story</div>
          <h2 className="hs-title">
            Guardians Of Honey
            <br />
            Since 1998
          </h2>

          <p className="hs-desc">
            At Shri Hari Madhur Bhandar, we are passionate about purity,
            tradition, and wellness. Based in Ahmedabad, Gujarat, we specialize
            in producing 100% natural multiflora honey and a range of authentic
            Ayurvedic and herbal products. Our mission is to revive age-old
            natural remedies and offer them in their purest form to modern
            consumers.
          </p>

          <a className="hs-cta" href="/about">
            READ MORE
          </a>
        </div>

        {/* Right image column */}
        <div className="hs-right">
          <div className="hs-image-wrap">
            <img
              src="/images/Founder.png"
              alt="Founder - Shri Hari Madhur Bhandar"
              className="hs-image"
            />
          </div>
        </div>

        {/* Decorative dashed curves (SVG) */}
        <svg className="hs-decor" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M10 350 C250 200 400 450 700 300" fill="none" stroke="#d6d6d6" strokeWidth="2" strokeDasharray="6 8" opacity="0.25"/>
          <path d="M0 200 C150 50 350 350 1000 200" fill="none" stroke="#d6d6d6" strokeWidth="2" strokeDasharray="6 8" opacity="0.18"/>
        </svg>
      </div>
    </section>
  );
}
