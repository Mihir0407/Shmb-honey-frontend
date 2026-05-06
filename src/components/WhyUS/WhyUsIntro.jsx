import React from "react";
import "./WhyUsIntro.css";

export default function WhyUsIntro() {
  return (
    <section
      className="whyus-intro-section"
      aria-label="Why us intro"
      id="whyus-intro"
    >
      <div className="container whyus-intro-inner">
        <div className="whyus-intro-content">
          <h4 className="whyus-small-label">Find Out Why</h4>

          <h2 className="whyus-main-title">
            Our Honey is
            <br />
            Different
          </h2>

          <div className="whyus-paragraph-wrap">
            <p className="whyus-paragraph">
              Our passion for holistic health is rooted in the rolling hills of India,
              where every flavorful drop of Wedderspoon Manuka honey is born. Set against
              a backdrop of awe-inspiring mountain ranges and the crystal waters of Lake
              Wakatipu, cheerful stacks of rainbow-hued hives are home to a living heritage
              of brilliant bees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
