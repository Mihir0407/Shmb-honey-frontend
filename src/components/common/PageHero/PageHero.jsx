import React from "react";
import "./PageHero.css"; // keep SAME css to avoid design change

export default function PageHero({
  title = "Page Title",
  subtitle = "",
  image = "/images/privacy.png",
  id = "page-hero",
}) {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-ede9aa1 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle about-hero-section"
      data-id="ede9aa1"
      data-element_type="section"
      data-settings='{"background_background":"classic","shape_divider_bottom":"waves","shape_divider_bottom_negative":"yes"}'
      id={id}
    >
      {/* Bottom wave */}
      <div
        className="elementor-shape elementor-shape-bottom"
        aria-hidden="true"
        data-negative="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="elementor-wave-svg"
        >
          <path
            className="elementor-shape-fill"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          />
        </svg>
      </div>

      <div className="elementor-container elementor-column-gap-default about-hero-inner container">
        {/* LEFT */}
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-647b63e about-hero-left">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default about-title">
                  {title}
                </h2>
              </div>
            </div>

            {subtitle && (
              <div className="elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default about-sub">
                    {subtitle}
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-hidden-mobile about-hero-right">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-widget elementor-widget-image">
              <div className="elementor-widget-container">
                <img
                  decoding="async"
                  width="900"
                  height="700"
                  src={image}
                  className="attachment-large size-large hero-img"
                  alt={title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
