import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  return (
    <div className="order-success-page">
      <div className="order-success-card">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully</h1>

        <p className="success-text">
          Thank you for shopping with <strong>SHMB Honey</strong>.
        </p>

        <p className="success-subtext">
          Your payment has been received and your order is confirmed.
        </p>

        <div className="success-actions">
          <Link to="/account-details" className="btn-primary">
            View My Orders
          </Link>

          <Link to="/" className="btn-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
