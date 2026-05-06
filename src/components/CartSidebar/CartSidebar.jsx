import React from "react";
import "./CartSidebar.css";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom";


export default function CartSidebar({ open = false, onClose = () => {} }) {
  const {
    cart = [],
    removeFromCart = () => {},
    clearCart = () => {},
    totalPrice = 0,
  } = useCart() || {};

  const navigate = useNavigate();

  return (
    
    <>
  

      {/* OVERLAY */}
      <div
        className={`cart-overlay${open ? " cart-overlay-show" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* SIDEBAR */}
      <aside
        className={`cart-sidebar${open ? " cart-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button
            aria-label="Close cart"
            className="cart-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">Your cart is empty</div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.slug}>
                <img
                  src={item.image || "/images/placeholder.jpg"}
                  alt={item.title}
                />

                <div className="cart-item-meta">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-qty">Qty: {item.qty}</div>
                  <div className="cart-item-price">
                    ₹{(item.price * item.qty).toFixed(0)}
                  </div>
                </div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.slug)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="cart-footer">
          <div className="cart-total">
            Total: <strong>₹{totalPrice.toFixed(0)}</strong>
          </div>

          <div className="cart-actions">
            <button
  className="btn-cta"
  onClick={() => {
    onClose();
    navigate("/checkout");
  }}
>
  Checkout
</button>

            <button
              className="btn-outline"
              onClick={clearCart}
            >
              Clear
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
