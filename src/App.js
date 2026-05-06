// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Splash from "./components/Splash/Splash";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Footer/Privacy";
import Terms from "./components/Footer/Terms";
import ReturnRefund from "./components/Footer/ReturnRefund";
import Homepage from "./components/Home/Homepage";
import AboutPage from "./components/AboutUs/AboutPage";
import WhyPage from "./components/WhyUS/WhyPage";
import Certified from "./components/Certified/Certified";
import Login from "./components/MyAccount/Login";
import Signup from "./components/MyAccount/Signup";
import Account from "./components/MyAccount/Account";
import ProtectedRoute from "./components/MyAccount/ProtectedRoute";
import ShopMain from "./components/Shop/shopmain";
import ProductDetail from "./components/Shop/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import OrderSuccess from "./components/Checkout/OrderSuccess";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/common/ScrollToTop";


// 🔥 ADMIN
import RequireAdmin from "./components/admin/RequireAdmin";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import OrdersTable from "./components/admin/OrdersTable";
import UsersTable from "./components/admin/UsersTable";
import AdminMessages from "./components/admin/AdminMessages";
import ProductsTable from "./components/admin/ProductsTable";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./CartContext";

export default function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);
  const SPLASH_TIME = 700;

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_TIME);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShowSplash(true);
    const timer = setTimeout(() => setShowSplash(false), SPLASH_TIME);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <CartProvider>
        <>
          <Splash visible={showSplash} />

          {/* 🔥 Navbar unchanged */}
          <Navbar />
          <ScrollToTop />

          <Routes>
            {/* ================= PUBLIC ================= */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/why-us" element={<WhyPage />} />
            <Route path="/certified" element={<Certified />} />
            <Route path="/shop" element={<ShopMain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/return-refund" element={<ReturnRefund />} />

            {/* ================= SHOP ================= */}
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />

            {/* ================= USER ACCOUNT ================= */}
            <Route
              path="/account-details"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />

            {/* ================= ADMIN (SENIOR FIX) ================= */}
            <Route element={<RequireAdmin />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="orders" element={<OrdersTable />} />
                <Route path="users" element={<UsersTable />} />
                 <Route path="messages" element={<AdminMessages />} />
                 <Route path="/admin/products" element={<ProductsTable />} />
              </Route>
            </Route>
          </Routes>

          {/* 🔥 Footer unchanged */}
          <Footer />
        </>
      </CartProvider>
    </AuthProvider>
  );
}
