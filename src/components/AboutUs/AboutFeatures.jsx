import React from "react";
import "./AboutFeatures.css";

const features = [
  {
    base: "A1",
    title: "100% Natural Honey",
    body:
      "Our honey is pure, raw, and unprocessed—delivered straight from hive to home. Sourced responsibly from diverse floral regions across India, our multiflora honey preserves the richness of nature without any additives or artificial processing.",
    width: 1024,
    height: 545,
  },
  {
    base: "A2",
    title: "Respect for Nature",
    body:
      "At Shri Harimadhur Bhandar, we are deeply committed to sustainable practices. We believe in preserving natural ecosystems and supporting ethical beekeeping that nurtures both the bees and the environment.",
    width: 1024,
    height: 778,
  },
  {
    base: "A3",
    title: "Driven by Our Values",
    body:
      "Integrity, transparency, and wellness are at the heart of everything we do. From working with local beekeepers to upholding traditional Ayurvedic principles, we ensure every product reflects care, quality, and trust.",
    width: 765,
    height: 1020,
  },
];

function makeSrcset(base) {
  return [
    `/images/${base}-1024x545.png 1024w`,
    `/images/${base}-300x160.png 300w`,
    `/images/${base}-768x409.png 768w`,
    `/images/${base}-1536x817.png 1536w`,
    `/images/${base}-600x319.png 600w`,
    `/images/${base}.png 2000w`,
  ].join(", ");
}

export default function AboutFeatures() {
  return (
    <section className="about-features" id="features">
      <div className="container features-inner">
        {features.map((f, idx) => (
          <div className="feature-col" key={idx}>
            {/* Hex image */}
            <div className="hex-wrapper">
              <img
                decoding="async"
                loading="lazy"
                width={f.width}
                height={f.height}
                src={`/images/${f.base}-1024x545.png`}
                srcSet={makeSrcset(f.base)}
                sizes="(max-width: 800px) 100vw, 800px"
                className="feature-img"
                alt={f.title}
              />
            </div>

            {/* Title */}
            <h3 className="feature-title">{f.title}</h3>

            {/* Paragraph */}
            <div className="feature-body">
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
