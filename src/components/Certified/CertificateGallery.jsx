// src/components/AboutUs/Certificates/CertificateGallery.jsx
import React, { useState } from "react";
import "./CertificateGallery.css";

/*
  Notes:
  - Place certificate images in public/images/ with filenames:
      cert1.jpeg, cert2.jpeg, cert3.jpeg, cert4.jpeg, cert5.jpeg, cert6.jpeg, cert7.jpeg
    (or update the array below with your filenames / full URLs)
  - Thumbnails use background-image to match Elementor style.
  - Clicking a thumbnail opens a simple lightbox modal (click outside or X to close).
*/

const certificates = [
  { id: 1, src: "/images/cert1.jpeg", thumb: "/images/cert1.jpeg", title: "Certificate 1" },
  { id: 2, src: "/images/cert2.jpeg", thumb: "/images/cert2.jpeg", title: "Certificate 2" },
  { id: 3, src: "/images/cert7.jpeg", thumb: "/images/cert7.jpeg", title: "Certificate 3" },
  { id: 4, src: "/images/cert5.jpeg", thumb: "/images/cert5.jpeg", title: "Certificate 4" },
  { id: 5, src: "/images/cert4.jpeg", thumb: "/images/cert4.jpeg", title: "Certificate 5" },
  { id: 6, src: "/images/cert6.jpeg", thumb: "/images/cert6.jpeg", title: "Certificate 6" },
  { id: 7, src: "/images/cert3.jpeg", thumb: "/images/cert3.jpeg", title: "Certificate 7" },
];

export default function CertificateGallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  function openLightbox(index) {
    setLightbox({ open: true, index });
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightbox({ open: false, index: 0 });
    document.body.style.overflow = "";
  }

  function prev() {
    setLightbox((s) => ({ ...s, index: (s.index - 1 + certificates.length) % certificates.length }));
  }
  function next() {
    setLightbox((s) => ({ ...s, index: (s.index + 1) % certificates.length }));
  }

  return (
    <section className="cert-section" aria-label="Certificates">
      <div className="container cert-container">
        <div className="cert-grid" role="list">
          {certificates.map((c, i) => (
            <button
              key={c.id}
              className="cert-item"
              role="listitem"
              aria-label={c.title}
              onClick={() => openLightbox(i)}
              style={{ backgroundImage: `url("${c.thumb || c.src}")` }}
            >
              <span className="cert-overlay" />
            </button>
          ))}
        </div>
      </div>

      {lightbox.open && (
        <div className="cert-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="lb-close" aria-label="Close" onClick={closeLightbox}>
            ×
          </button>

          <button className="lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev(); }}>
            ‹
          </button>

          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <img src={certificates[lightbox.index].src} alt={certificates[lightbox.index].title} />
            <div className="lb-caption">{certificates[lightbox.index].title}</div>
          </div>

          <button className="lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); next(); }}>
            ›
          </button>
        </div>
      )}
    </section>
  );
}
