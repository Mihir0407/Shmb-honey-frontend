import React from "react";
import "./HeroBenefits.css";

export default function HeroBenefits() {
  return (
    <section className="hb-section" aria-label="Benefits of Honey">
      <div className="hb-container">

        {/* LEFT: pre-masked blob png */}
        <div className="hb-left">
          <img src="/images/h1.png" alt="Honey jar" className="hb-main-img" />
          <img src="/images/flower1.png" alt="" className="hb-flower" />
        </div>

        {/* RIGHT: content */}
        <div className="hb-right">
          <div className="hb-kicker">Discover</div>

          <h2 className="hb-title">
            The Benefits of
            <br />
            Honey Products
          </h2>

          <p className="hb-desc">
            The benefits of raw honey include the nutrients and antioxidants it contains.
            Honey is also better for your blood sugar and your heart, and it may promote healing.
            Honey is a syrupy liquid that honeybees make from plant nectar.
          </p>

          <div className="hb-grid">
            <div className="hb-item">
              <img src="/images/p1.png" className="hb-icon" alt="Promotes healing" />
              <div className="hb-item-text">
                <h4>Promotes burn<br />and wound healing</h4>
              </div>
            </div>

            <div className="hb-item">
              <img src="/images/p2.png" className="hb-icon" alt="Immune support" />
              <div className="hb-item-text">
                <h4>Improve health<br />and immune support</h4>
              </div>
            </div>

            <div className="hb-item">
              <img src="/images/p3.png" className="hb-icon" alt="Nutrients" />
              <div className="hb-item-text">
                <h4>Contains a<br />variety of nutrients</h4>
              </div>
            </div>

            <div className="hb-item">
              <img src="/images/p4.png" className="hb-icon" alt="Blood sugar" />
              <div className="hb-item-text">
                <h4>Better for blood<br />sugar levels</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
