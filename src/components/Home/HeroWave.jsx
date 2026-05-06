import React from "react";
import "./HeroWave.css";

export default function HeroWave() {
  return (
    <section className="hw-wrapper">
      <svg
        className="hw-svg"
        viewBox="0 0 1750 160"
        preserveAspectRatio="none"
        role="img"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Single static path (wave) */}
        <path
          id="hwWavePath"
          d="M0 80 C150 20 350 140 550 80 C750 20 950 140 1150 80 C1350 20 1550 140 1750 80"
          fill="none"
          stroke="#d6a800"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="18 12"
        />

        {/* Bee that moves along the static path */}
        <image
          href="/images/bee.png"
          width="48"
          height="48"
          transform="translate(-24,-24)"
        >
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#hwWavePath" />
          </animateMotion>
        </image>
      </svg>
    </section>
  );
}
