import React, { useState, useEffect, useMemo, useRef } from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Meena Patel",
    headline: "Absolutely Pure!",
    rating: 5,
    text:
      "I was searching for authentic raw honey and Shri Harimadhur Bhandar did not disappoint. The aroma, texture, and taste are exactly what natural honey should be!",
  },
  {
    id: 2,
    name: "Ramesh Iyer",
    headline: "Amazing for Immunity",
    rating: 5,
    text:
      "Ever since I started taking a spoonful every morning, I feel more energized and less prone to seasonal infections. Highly recommend it!",
  },
  {
    id: 3,
    name: "Kavita Singh",
    headline: "Trustworthy Quality",
    rating: 5,
    text:
      "It’s hard to find unadulterated honey these days. This is one of the few brands I trust for purity and taste.",
  },
];

function StarRow({ value = 5, size = 16 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];

  for (let i = 0; i < full; i++) {
    stars.push(
      <svg key={"f" + i} className="ts-star" viewBox="0 0 20 20" width={size} height={size} aria-hidden>
        <path d="M10 1.6l2.4 4.9 5.4.8-3.9 3.8.9 5.3L10 14.9 4.2 16.6l.9-5.3L1.2 7.5l5.4-.8L10 1.6z" />
      </svg>
    );
  }

  if (half) {
    stars.push(
      <svg key="half" className="ts-star" viewBox="0 0 20 20" width={size} height={size} aria-hidden>
        <defs>
          <linearGradient id="halfgrad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path fill="url(#halfgrad)" d="M10 1.6l2.4 4.9 5.4.8-3.9 3.8.9 5.3L10 14.9 4.2 16.6l.9-5.3L1.2 7.5l5.4-.8L10 1.6z" />
      </svg>
    );
  }

  while (stars.length < 5) {
    stars.push(
      <svg key={"e" + stars.length} className="ts-star ts-star-empty" viewBox="0 0 20 20" width={size} height={size} aria-hidden>
        <path d="M10 1.6l2.4 4.9 5.4.8-3.9 3.8.9 5.3L10 14.9 4.2 16.6l.9-5.3L1.2 7.5l5.4-.8L10 1.6z" />
      </svg>
    );
  }

  return <div className="ts-stars" aria-hidden>{stars}</div>;
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 990) setPerView(2);
      else setPerView(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = useMemo(() => Math.max(1, Math.ceil(TESTIMONIALS.length / perView)), [perView]);

  useEffect(() => {
    if (page >= pages) setPage(0);
  }, [pages, page]);

  function prev() { setPage((p) => (p - 1 + pages) % pages); }
  function next() { setPage((p) => (p + 1) % pages); }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pages]);

  const translatePercent = -page * 100;

  return (
    <section className="ts-section" aria-label="Testimonials">
      <div className="ts-header">
        <div className="ts-kicker">Testimonials</div>
        <h2 className="ts-title">Customers Say</h2>
        <div className="ts-star-decor" aria-hidden>
          <StarRow value={5} size={20} />
        </div>
      </div>

      <div className="ts-wrapper container">
        <button className="ts-arrow ts-left" onClick={prev} aria-label="Previous testimonials">‹</button>

        <div className="ts-carousel">
          <div
            className="ts-track"
            style={{
              width: `${(TESTIMONIALS.length / perView) * 100}%`,
              transform: `translateX(${translatePercent}%)`,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <article key={t.id} className="ts-card" role="article" aria-label={`Testimonial by ${t.name}`}>
                <header className="ts-card-head">
                  <div className="ts-name">{t.name}</div>
                  <StarRow value={t.rating} size={14} />
                </header>

                <h3 className="ts-card-title">{t.headline}</h3>
                <div className="ts-divider" />
                <p className="ts-text">{t.text}</p>
              </article>
            ))}
          </div>
        </div>

        <button className="ts-arrow ts-right" onClick={next} aria-label="Next testimonials">›</button>
      </div>

      <div className="ts-dots" role="tablist" aria-label="Testimonials pages">
        {Array.from({ length: pages }).map((_, i) => (
          <button key={i} className={`ts-dot ${i === page ? "active" : ""}`} onClick={() => setPage(i)} aria-label={`Go to testimonials page ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
