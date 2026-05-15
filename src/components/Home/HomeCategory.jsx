import React from "react";
import "./HomeCategory.css";

/**
 * HomeCategory - simple category selector area
 * Images expected in public/images/ as: cat1.png, cat2.png, cat3.png
 *
 * Each card links to /shop?category=<slug> by default. Change `href` in items array
 * if you use a different routing scheme (React Router Link, next/link, etc).
 */

const items = [
  {
    id: "cat2",
    title: "Tvashta Honey",
    img: "/images/cat2.png",
    href: "https://shmbhoney.com/shop?category=tvashta-honey",
  },
  {
    id: "cat1",
    title: "Shree Gayatri Shakti Honey",
    img: "/images/cat1.png",
    href: "/shop?category=shree-gayatri-shakti",
  },
  {
    id: "cat3",
    title: "B2B",
    img: "/images/cat3.png",
    href: "/shop?category=b2b",
  },
];

export default function HomeCategory() {
  return (
    <section className="home-category" aria-label="Shop by category">
      <div className="category-inner container">
        <div className="category-heading">
          <p className="category-eyebrow">Shop By</p>
          <h2 className="category-title">Category</h2>
        </div>

        <ul className="category-list" role="list">
          {items.map((it) => (
           <li
  key={it.id}
  className="category-card-wrapper"
  data-cat={it.id}
  role="listitem"
>

              {/* Use <a> so it's keyboard-accessible and crawlable.
                  If you use react-router, replace with <Link to={it.href}> */}
              <a className="category-card" href={it.href} aria-label={`Open ${it.title} category`}>
                <span className="hex-bg" aria-hidden="true" />
                <img src={it.img} alt={it.title} className="category-img" />
              </a>

              <div className="category-name">{it.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
