import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../Shop/product";
import "./ProductDetail.css";
import { useCart } from "../../CartContext";

const requiresPackOf10 = (product) => {
  if (product.category !== "Shree Gayatri Shakti") return false;

  const weight = product.specs?.itemWeight;

  return ["25 gm", "50 gm", "100 gm", "200 gm"].includes(weight);
};

const COMMON_DESCRIPTION = `
Raw honey is nature’s golden gift — rich in nutrients, enzymes,
and powerful antioxidants. Unlike processed sweeteners, our honey
retains all the natural goodness extracted directly from the nectar
of blooming flora.
`;

const FIXED_SPECS = {
  Brand: "TVASHTA HONEY",
  "Keep Cool And Dry Place": "Dry Place",
  "Food Grade Medicine Grade": "Food Grade Pat Jar",
  "Blood Refiner Nutritive Tonic": "For Daily Energy",
  Manufacturer: "SHRI HARI MADHUR BHANDAR",
  "Country of Origin": "Made in India",
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const isPack10 = requiresPackOf10(product);

  const [qty, setQty] = useState(isPack10 ? 10 : 1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  if (!product) return <h2>Product not found</h2>;

  const specRows = {
    Brand: FIXED_SPECS.Brand,
    Treatment: product.specs?.treatment,
    "Shelf Life": product.specs?.shelfLife,
    "Keep Cool And Dry Place": FIXED_SPECS["Keep Cool And Dry Place"],
    "Food Grade Medicine Grade": FIXED_SPECS["Food Grade Medicine Grade"],
    "Blood Refiner Nutritive Tonic":
      FIXED_SPECS["Blood Refiner Nutritive Tonic"],
    Flavour: product.specs?.flavour,
    "Item Weight": product.specs?.itemWeight,
    Speciality: product.specs?.speciality,
    "Package Weight": product.specs?.packageWeight,
    "Package Type Name": product.specs?.packageType,
    "Number of Items": product.specs?.numberOfItems,
    "Net Quantity": product.specs?.netQuantity,
    Manufacturer: FIXED_SPECS.Manufacturer,
    "Country of Origin": FIXED_SPECS["Country of Origin"],
  };

  return (
    <>
      {/* PRODUCT TOP */}
      <section className="product-detail container">
        <div className="product-detail-grid">
          <div className="pd-image-wrap">
            <img src={product.image} alt={product.title} />
            <span className="zoom-icon">🔍</span>
          </div>

          <div className="pd-info">
            <h1 className="pd-title">{product.title}</h1>

            <p className="pd-desc">{COMMON_DESCRIPTION}</p>

            <div className="pd-price">
              {product.oldPrice && (
                <span className="old">₹{product.oldPrice}</span>
              )}
              <span className="new">₹{product.price}</span>
            </div>

            <div className="pd-cart-row">
              <input
                type="number"
                min={isPack10 ? 10 : 1}
                step={isPack10 ? 10 : 1}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />

              {/* ✅ FIXED */}
              <button onClick={() => addToCart(product, isPack10 ? 10 : qty)}>
                Add to cart
              </button>
            </div>

            <hr />

            <p className="pd-benefits">
              At Shri Harimadhur Bhanda <br />
              ✔ Better blood sugar balance <br />
              ✔ Improved heart health <br />
              ✔ Natural wound healing <br />✔ Enhanced immunity
            </p>
          </div>
        </div>
      </section>

      {/* DESCRIPTION / REVIEWS */}
      <section className="product-tabs container">
        <div className="tabs-header">
          <button
            className={`tab ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          <button
            className={`tab ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (0)
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <>
              <h2>Description</h2>
              <table className="spec-table">
                <tbody>
                  {Object.entries(specRows).map(([label, value]) =>
                    value ? (
                      <tr key={label}>
                        <td>{label}</td>
                        <td>{value}</td>
                      </tr>
                    ) : null
                  )}
                </tbody>
              </table>
            </>
          )}

          {activeTab === "reviews" && (
            <div className="reviews-wrapper">
              <h2>Reviews</h2>
              <p className="no-reviews">There are no reviews yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="related-products container">
        <h2 className="related-title">Related Products</h2>

        <div className="related-grid">
          {PRODUCTS.filter(
            (p) => p.category === product.category && p.id !== product.id
          )
            .slice(0, 4)
            .map((item) => (
              <div className="related-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p className="price">₹{item.price.toFixed(2)}</p>

                {/* ✅ FIXED */}
                <button
                  onClick={() =>
                    addToCart(item, requiresPackOf10(item) ? 10 : 1)
                  }
                >
                  Add to cart
                </button>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
