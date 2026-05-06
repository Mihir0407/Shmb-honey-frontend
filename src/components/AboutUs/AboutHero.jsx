// src/components/AboutUs/AboutHero/AboutHero.jsx
import React from "react";
import "./AboutHero.css";

export default function AboutHero() {
  // use public image (place breadcrumb-img-1.png in public/images/)
  const imgSrc = "/images/privacy.png";
  // fallback to original URL if you prefer:
  // const imgSrc = "https://shmbhoney.com/wp-content/uploads/2024/12/breadcrumb-img-1.png";

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-ede9aa1 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle about-hero-section"
      data-id="ede9aa1"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_bottom":"waves","shape_divider_bottom_negative":"yes"}'
      id="about-hero" /* keep for anchors */
    >
      {/* Elementor style bottom shape wrapper (wave) */}
      <div className="elementor-shape elementor-shape-bottom" aria-hidden="true" data-negative="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="elementor-wave-svg">
          <path
            className="elementor-shape-fill"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          ></path>
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-default about-hero-inner container">
        {/* LEFT COLUMN (text) */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-647b63e about-hero-left"
          data-id="647b63e"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-ddb10ea elementor-widget elementor-widget-heading"
              data-id="ddb10ea"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default about-title">About Us</h2>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-6085c5b elementor-widget elementor-widget-heading"
              data-id="6085c5b"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default about-sub">Shri Harimadhur Bhanda</h2>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (image) - hidden on mobile in original, we keep same class */}
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ed8abca elementor-hidden-mobile about-hero-right"
          data-id="ed8abca"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-fa3f5ee elementor-widget-mobile__width-initial elementor-widget elementor-widget-image"
              data-id="fa3f5ee"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  decoding="async"
                  width="900"
                  height="700"
                  src={imgSrc}
                  className="attachment-large size-large hero-img"
                  alt="Honey comb and dipper"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
