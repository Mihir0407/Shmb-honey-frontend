import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import CartSidebar from "../CartSidebar/CartSidebar";
import { useCart } from "../../CartContext";
import { useAuth } from "../../context/AuthContext"; // ✅ ADD

export default function Navbar() {
  const location = useLocation();
  const { totalItems } = useCart();
  const { user, loading } = useAuth(); // ✅ AUTH STATE
  const isAdmin = user?.role === "admin";

  const [entered, setEntered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const ddRef = useRef(null);

  /* Navbar entrance animation */
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 50);
    return () => clearTimeout(t);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleOutside(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const active = (path) => (location.pathname === path ? "active" : "");

  if (loading) return null; // ✅ avoid flicker

  return (
    <>
      <header className={`shm-navbar ${entered ? "nav-enter" : ""}`}>
        <div className="navbar-container">
          {/* HAMBURGER */}
          <button
            className="hamburger"
            onClick={() => document.body.classList.add("sidebar-open")}
          >
            <span className="line" />
          </button>

          {/* LOGO */}
          <div className="navbar-logo">
            <Link to="/">
              <img src="/images/logo.png" alt="SHMB Logo" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <nav className="navbar-menu">
            <Link to="/" className={active("/")}>
              Home
            </Link>

            {/* ABOUT DROPDOWN */}
            <div
              className="dropdown"
              ref={ddRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`dropdown-toggle ${
                  ["/about", "/why-us", "/certified"].includes(
                    location.pathname
                  )
                    ? "active"
                    : ""
                }`}
              >
                About Us <span className="arrow">▾</span>
              </button>

              <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <Link to="/about">About Us</Link>
                <Link to="/why-us">Why Us</Link>
                <Link to="/certified">Certified</Link>
              </div>
            </div>

            <Link to="/shop" className={active("/shop")}>
              Shop
            </Link>
            <Link to="/contact" className={active("/contact")}>
              Contact Us
            </Link>

            {/* ✅ AUTH LINKS */}
            {!user ? (
              <>
                <Link to="/login" className={active("/login")}>
                  Login
                </Link>
                <Link to="/signup" className={active("/signup")}>
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    className={active("/admin/dashboard")}
                  >
                    Dashboard
                  </Link>
                )}

                <Link
                  to="/account-details"
                  className={active("/account-details")}
                >
                  My Account
                </Link>
              </>
            )}
          </nav>

          {/* RIGHT ICONS */}
          <div className="navbar-icons">
            <button className="icon-circle">
              <i className="fa fa-search" />
            </button>

            <button
              className="icon-circle cart-icon"
              onClick={() => setCartOpen(true)}
            >
              <i className="fa fa-shopping-bag" />
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <aside className="sidebar">
        <button
          className="close-btn"
          onClick={() => document.body.classList.remove("sidebar-open")}
        >
          ✕
        </button>

        <nav className="sidebar-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/why-us">Why Us</Link>
          <Link to="/certified">Certified</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>

          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          ) : (
            <>
              {isAdmin && <Link to="/admin/dashboard">Dashboard</Link>}
              <Link to="/account-details">My Account</Link>
            </>
          )}
        </nav>
      </aside>

      <div
        className="sidebar-overlay"
        onClick={() => document.body.classList.remove("sidebar-open")}
      />

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
