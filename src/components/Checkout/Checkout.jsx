import React, { useState } from "react";
import { useCart } from "../../CartContext";
import "./Checkout.css";

/* ===============================
   RAZORPAY SCRIPT LOADER
================================ */
const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/* ===============================
   INDIAN STATES (ADDED)
================================ */
const INDIAN_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();

  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");

  const [showAuthPopup, setShowAuthPopup] = useState(false); // ✅ ADDED

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    notes: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBilling((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const e = {};
    if (!billing.firstName) e.firstName = "Billing First name is required.";
    if (!billing.lastName) e.lastName = "Billing Last name is required.";
    if (!billing.address1) e.address1 = "Billing address is required.";
    if (!billing.city) e.city = "Billing city is required.";
    if (!billing.state) e.state = "Billing state is required.";
    if (!billing.email) e.email = "Billing email is required.";
    if (!billing.agree) e.agree = "Please accept terms & conditions.";
    if (!billing.phone) e.phone = "Mobile number is required.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const placeOrder = async () => {
    if (!validate()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setShowAuthPopup(true); // ✅ POPUP INSTEAD OF ALERT
      return;
    }

    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const res = await fetch("https://shmb-honey-backend.onrender.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            productId: item.id,
            title: item.title,
            price: item.price,
            qty: item.qty,
          })),
          billing,
          orderNotes: billing.notes || "",
          amount: totalPrice,
        }),
      });

      const data = await res.json();
      if (!data.razorpayOrderId) {
        alert("Order creation failed");
        return;
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        order_id: data.razorpayOrderId,
        name: "SHMB Honey",
        description: "Order Payment",
        prefill: {
          name: `${billing.firstName} ${billing.lastName}`,
          email: billing.email,
        },
        handler: async function (response) {
          await fetch("https://shmb-honey-backend.onrender.com/api/payment/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(response),
          });

          clearCart();
          window.location.href = "/order-success";
        },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="checkout-page">
      {/* 🔐 LOGIN REQUIRED POPUP (ADDED – FLOATING, NO LAYOUT CHANGE) */}
      {showAuthPopup && (
        <div className="auth-popup-overlay">
          <div className="auth-popup">
            <h3>Login Required</h3>
            <p>Please login or register to place your order.</p>
            <div className="auth-actions">
              <button onClick={() => (window.location.href = "/login")}>
                Login
              </button>
              <button onClick={() => (window.location.href = "/register")}>
                Register
              </button>
              <button onClick={() => setShowAuthPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="checkout-wrapper">
        {/* LEFT COLUMN (UNCHANGED) */}
        <div className="checkout-left">
          <div className="checkout-box notice">
  Returning customer?
  <span
    className="link"
    onClick={() => (window.location.href = "/signup")}
  >
    {" "}
    Click here to signup
  </span>
</div>

          <div className="checkout-box">
            <h3>Billing Details</h3>

            <div className="form-row">
              <input
                name="firstName"
                placeholder="First Name *"
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Last Name *"
                onChange={handleChange}
              />
            </div>

            {/* 🌍 COUNTRY FIXED TO INDIA */}
            <input value="India" disabled />

            <input
              name="address1"
              placeholder="House number and street name *"
              onChange={handleChange}
            />
            <input
              name="city"
              placeholder="Town / City *"
              onChange={handleChange}
            />

            {/* 🇮🇳 INDIAN STATES DROPDOWN */}
            <select name="state" onChange={handleChange}>
              <option value="">Select State</option>
              {INDIAN_STATES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <input
              name="zip"
              placeholder="PIN Code *"
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email address *"
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Mobile number *"
              onChange={handleChange}
            />
          </div>

          <div className="checkout-box order-notes-box">
            <h3>
              Order notes <span>(optional)</span>
            </h3>
            <textarea
              name="notes"
              value={billing.notes}
              onChange={handleChange}
              className="order-notes-textarea"
            />
          </div>
        </div>

        {/* RIGHT COLUMN (UNCHANGED) */}
        <div className="checkout-right">
          <div className="checkout-box">
            <h3>Your Order</h3>
            {cart.map((item) => (
              <div className="order-row" key={item.slug}>
                <span>
                  {item.title} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
            <div className="order-row total">
              <strong>Total</strong>
              <strong>₹{totalPrice}</strong>
            </div>
          </div>
          {/* PAYMENT */}
          <div className="checkout-box payment">
            <div className="payment-header">
              <span>Credit Card / Debit Card / NetBanking / UPI</span>

              <a
                href="https://razorpay.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Razorpay Payment Gateway"
              >
                <img
                  src="https://badges.razorpay.com/badge-dark.png"
                  alt="Razorpay | Payment Gateway"
                  referrerPolicy="origin"
                  className="razorpay-badge"
                />
              </a>
            </div>

            <p className="payment-text">
              Pay securely using Credit Card, Debit Card, UPI, or Net Banking
              through Razorpay.
            </p>

            <p className="privacy-text">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our <span className="link">privacy policy</span>.
            </p>

            <label className="checkbox">
              <input type="checkbox" name="agree" onChange={handleChange} />I
              have read and agree to the website{" "}
              <span className="link">terms and conditions</span> *
            </label>

            {errors.agree && <span className="error">{errors.agree}</span>}

            <button className="place-order-btn" onClick={placeOrder}>
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
