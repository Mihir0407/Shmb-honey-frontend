import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="shm-footer">
      <div className="footer-inner container">

        {/* LEFT BLOCK: two small columns (SHOP | INFO) */}
        <div className="footer-left-block">
          <div className="left-col">
            <h4 className="footer-head">SHOP</h4>
            <ul className="footer-list">
              <li><a href="/product/shree-gayatri-shakti">Shree Gayatri Shakti</a></li>
              <li><a href="/product/tvashta">Tvashta</a></li>
              <li><a href="/b2b">B2B</a></li>
              <li><a href="/shop">Shop All</a></li>
            </ul>
          </div>

          <div className="mid-col">
            <h4 className="footer-head">INFO</h4>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
          </div>
        </div>

        {/* CENTER BLOCK */}
        <div className="footer-center">
          <div className="footer-logo-wrap">
            <img src="/images/Footer_logo.png" alt="SHRI HARI MADHUR BHANDAR" className="footer-logo" />
          </div>

          <h3 className="footer-cta">Are you a honey lover?</h3>

          <p className="footer-desc">
            We are all about bringing Healthy Bee Products from the Hive… to our Customers!
          </p>

          <div className="footer-contact">
            <div className="footer-ask">Any questions? Give us a call at</div>
            <a className="footer-phone" href="tel:+919426349332">+91-9426349332</a>

            <div className="footer-socials">
              <a className="social-btn" href="https://www.instagram.com/shriharimadhurbhandar.official/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="social-btn" href="https://www.youtube.com/@shmbhoney" target="_blank" rel="noreferrer" aria-label="YouTube">
               <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="footer-right">
          <h4 className="footer-head">FIND US</h4>

          <div className="footer-address">
            <p>Shri Hari Madhur Bhandar</p>
            <p>
              46, Gopinath Industrial Hub,<br />
              Ambika Tube Mill Compound,<br />
              Nr. Vatva GIDC Overbridge,<br />
              Vatva, Ahmedabad - 382445.
            </p>
            <p><a className="footer-link" href="mailto:honeyshmb@gmmail.com.com">honeyshmb@gmail.com</a></p>
          </div>

          <ul className="footer-list footer-legal">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms &amp; Condition</a></li>
            <li><a href="/return-refund">Refund and Returns</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SHMB. All rights reserved.
      </div>
    </footer>
  );
}
