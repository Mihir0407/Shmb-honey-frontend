import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";

const requiresPackOf10 = (product) => {
  if (product.category !== "Shree Gayatri Shakti") return false;

  const weight = product.specs?.itemWeight;
  return ["25 gm", "50 gm", "100 gm", "200 gm"].includes(weight);
};

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const isContactOnly = product.category === "B2B";

  return (
    <Link to={`/product/${product.slug}`} className="product-link">
      <div className="product-card">
        <img src={product.image} alt={product.title} />

        <h4 className="product-title">{product.title}</h4>

        <div className="product-price">
          {product.oldPrice && <span className="old">₹{product.oldPrice}</span>}
          <span className="new">₹{product.price}</span>
        </div>

        {/* ✅ STOCK-AWARE BUTTON (MINIMAL CHANGE) */}
        {isContactOnly ? (
          <button
            className="add-btn contact-btn"
            onClick={(e) => {
              e.preventDefault();
              navigate("/contact");
            }}
          >
            Contact Us
          </button>
        ) : (
          <button
            className="add-btn"
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault();
              if (!product.inStock) return;
              addToCart(product, 1);
            }}
          >
            {product.inStock ? "Add to cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </Link>
  );
}
