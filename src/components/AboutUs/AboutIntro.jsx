import React from "react";
import "./AboutIntro.css";

export default function AboutIntro() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-9461411 elementor-section-boxed elementor-section-height-default about-intro-section"
      data-id="9461411"
      data-element_type="section"
      data-settings='{"background_background":"classic"}'
      id="about-intro"
    >
      <div className="elementor-background-overlay" />

      <div className="elementor-container elementor-column-gap-default container">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6906947"
          data-id="6906947"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            {/* Small label */}
            <div
              className="elementor-element elementor-element-40e3797 elementor-widget elementor-widget-heading"
              data-id="40e3797"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default small-label">About</h2>
              </div>
            </div>

            {/* Big title */}
            <div
              className="elementor-element elementor-element-3511383 elementor-widget elementor-widget-heading"
              data-id="3511383"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default big-title">
                  Nature’s Goodness,<br />
                  Bottled with Care
                </h2>
              </div>
            </div>

            {/* Paragraph */}
            <div
              className="elementor-element elementor-element-24bc2b0 elementor-widget elementor-widget-text-editor"
              data-id="24bc2b0"
            >
              <div className="elementor-widget-container">
                <div className="elementor-image-box-wrapper">
                  <div className="elementor-image-box-content">
                    <p className="about-paragraph">
                      At Shri Hari Madhur Bhandar, we are passionate about purity, tradition, and wellness.
                      Based in Ahmedabad, Gujarat, we specialize in producing 100% natural multiflora honey
                      and a range of authentic Ayurvedic and herbal products. Our mission is to revive age-old
                      natural remedies and offer them in their purest form to modern consumers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
