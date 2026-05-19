import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { PRODUCTS, CATEGORIES } from "../Shop/product";
import api from "../../api";
import "./Shop.css";

export default function Shop() {

  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ LOAD PRODUCTS IMMEDIATELY
  const [products, setProducts] = useState(
    PRODUCTS.map(p => ({
      ...p,
      inStock: true, // default stock
    }))
  );

  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  // ✅ FETCH STOCK IN BACKGROUND
  useEffect(() => {

    let mounted = true;

    api.get("/products/stock")
      .then(res => {

        if (!mounted) return;

        const stockMap = res.data || {};

        // ✅ ONLY UPDATE STOCK STATUS
        setProducts(prev =>
          prev.map(p => ({
            ...p,
            inStock: stockMap[p.slug] ?? true,
          }))
        );
      })
      .catch(err => {
        console.log("Stock API failed:", err);
      });

    return () => {
      mounted = false;
    };

  }, []);

  // ✅ CATEGORY FROM URL
  useEffect(() => {

    if (categoryFromURL) {

      const matchedCategory = CATEGORIES.find(
        cat =>
          cat.toLowerCase().replace(/\s+/g, "-") === categoryFromURL
      );

      if (matchedCategory) {
        setActiveCategory(matchedCategory);
      }

    } else {
      setActiveCategory("All");
    }

  }, [categoryFromURL]);

  // ✅ MEMOIZED FILTERING
  const filteredProducts = useMemo(() => {

    return activeCategory === "All"
      ? products
      : products.filter(
          p => p.category === activeCategory
        );

  }, [products, activeCategory]);

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
                className={
                  activeCategory === cat
                    ? "active"
                    : ""
                }
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