import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS, CATEGORIES } from "../Shop/product";
import api from "../../api";
import "./Shop.css";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]); // ✅ NEW (merged products)

  // ✅ FETCH STOCK + MERGE WITH FRONTEND PRODUCTS
  useEffect(() => {
    api.get("/products/stock")
      .then(res => {
        const stockMap = res.data || {};

        const mergedProducts = PRODUCTS.map(p => ({
          ...p,
          inStock: stockMap[p.slug] ?? true, // ✅ DEFAULT SAFE
        }));

        setProducts(mergedProducts);
      })
      .catch(() => {
        // ✅ FAIL-SAFE: if API fails, allow all products
        setProducts(PRODUCTS.map(p => ({ ...p, inStock: true })));
      });
  }, []);

  // ✅ EXISTING FILTER LOGIC (UNCHANGED)
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page container">
      <div className="shop-layout">

        {/* PRODUCTS GRID */}
        <div className="shop-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* SIDEBAR */}
        <aside className="shop-sidebar">
          <h3>Product categories</h3>
          <ul>
            {CATEGORIES.map(cat => (
              <li
                key={cat}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

      </div>
    </div>
  );
}
