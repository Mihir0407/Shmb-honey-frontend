import React from "react";
import "./HomeIntro.css";

export default function HomeIntro() {
  return (
    <section className="intro-section" aria-label="Why choose our honey">
      <div className="intro-container">

        {/* LEFT ITEM */}
        <div className="intro-item">
          <img src="/images/intro1.png" className="intro-icon" alt="Sustainably sourced" />

          <h3 className="intro-title">Sustainably Sourced</h3>

          <p className="intro-text">
            At Shri Hari Madhur Bhandar Honey’s very core is the belief in the preservation
            of natural habitats and building an environmentally responsible business.
          </p>
        </div>

        {/* CENTER ITEM */}
        <div className="intro-center-card" role="region" aria-label="Learn about honey">
          <div className="intro-center-image-wrapper">
            <img src="/images/intro2.png" alt="Learn About Honey" />
          </div>

          <div className="intro-center-bottom">
            <h3 className="intro-center-title">Learn About Honey</h3>
            <p className="intro-center-desc">
              How many different honeys are there in India? It’s time to deep dive into
              the wonderful world of India honey.
            </p>
          </div>
        </div>

        {/* RIGHT ITEM */}
        <div className="intro-item">
          <img src="/images/intro3.png" className="intro-icon" alt="100% Raw Honey"  />

          <h3 className="intro-title">100% Raw Honey</h3>

          <p className="intro-text">
            Our honey is pure and simple, from hive to home, just as nature intended.
            100% honey collected by our network of beekeepers.
          </p>
        </div>

      </div>
    </section>
  );
}
