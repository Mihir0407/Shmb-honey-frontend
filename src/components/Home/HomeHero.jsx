import React from "react";
import "./HomeHero.css";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-inner container">

        {/* LEFT TEXT */}
        <div className="hero-left flicker">
          <p className="eyebrow">Unique Tastes</p>

          <h1 className="hero-title">
            Boost
            <br />
            Your
            <br />
            Immunity
          </h1>

          <p className="hero-sub">Discover the world’s best honey</p>

          <a className="hero-cta" href="/shop">Shop Honey</a>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="hero-right">
          <div className="hero-slider">
            <img src="/images/Can.png" className="slide slide-1" />
            <img src="/images/tvasta.png" className="slide slide-2" />
            <img src="/images/gayatari.png" className="slide slide-3" />
          </div>
        </div>

      </div>

      {/* arcs */}
      <div className="dashed-arc arc-left" />
      <div className="dashed-arc arc-right" />

      {/* wave */}
      <svg className="wave-bg" viewBox="0 0 1440 260" preserveAspectRatio="none">
        <path className="wave-bg-path" d="M0,160 C360,220 1080,100 1440,160 L1440,260 L0,260 Z" />
      </svg>

      {/* curve */}
      <svg className="hero-white-curve" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}
