// src/components/AboutUs/AboutStory/AboutStory.jsx
import React from "react";
import "./AboutStory.css";

// If using public/images/A1.png
const imgPath = "/images/A1.png";

export default function AboutStory() {
  return (
    <section className="about-story-section">
      <div className="container story-container">

        {/* Section Title */}
        <div className="story-header">
          <h4 className="story-label">Our Story</h4>

          <h2 className="story-main-title">
            Guardians Of <br />
            Natural Wellness Since 1998
          </h2>
        </div>

        {/* Anchor */}
        <div id="story"></div>

        {/* Two Column Section */}
        <div className="story-inner">

          {/* LEFT: IMAGE */}
          <div className="story-col story-image-col">
            <div className="story-image-wrap">
              <img src={imgPath} alt="Founder" className="story-img" />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="story-col story-text-col">
            <div className="story-year">1998</div>

            <h3 className="story-subtitle">SHMB Founded</h3>

            <p className="story-text">
              Born out of a passion for purity and a desire to promote natural wellness,
              Shri Hari Madhur Bhandar was established by Mr. Vyas in Ahmedabad, Gujarat.
              What began as a small-scale beekeeping project soon transformed into a
              full-fledged initiative to bring pure, multiflora honey and Ayurvedic products
              to homes across India.
            </p>

            <p className="story-text">
              Driven by traditional values and modern practices, Mr. Vyas handcrafted his
              first batches of honey using ethical beekeeping methods. Encouraged by
              overwhelming local support, Shri Harimadhur Bhandar gained recognition for
              its honesty, quality, and trust.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
