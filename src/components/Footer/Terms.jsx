import React from "react";
import "./Privacy.css"; // reuse same typography & spacing
import PageHero from "../common/PageHero/PageHero";

export default function Terms() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Terms & Conditions"
        subtitle="Shri Harimadhur Bhandar"
        image="/images/privacy.png"
        id="terms-hero"
      />

      {/* CONTENT */}
      <main className="privacy-content container" aria-label="Terms and Conditions">
        <p>
          Welcome to <strong>Shri Harimadhur Bhandar</strong>. By accessing or using
          our website, products, and services, you agree to comply with and be
          bound by the following Terms of Service. Please read them carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website and services, you agree to these
          Terms of Service and any amendments thereto. If you do not agree to
          these terms, please do not use our services.
        </p>

        <h2>2. Products and Pricing</h2>
        <ul>
          <li>
            <strong>Organic Honey Products:</strong> We offer a range of organic
            honey and related products.
          </li>
          <li>
            <strong>Pricing:</strong> All prices listed on the website are in
            Rupees and may be subject to change without notice.
          </li>
          <li>
            <strong>Product Descriptions:</strong> We make every effort to ensure
            accuracy; however, we do not guarantee that all product details,
            pricing, or availability are always current or error-free.
          </li>
        </ul>

        <h2>3. Ordering and Payment</h2>
        <ul>
          <li>
            <strong>Order Process:</strong> Orders can be placed by following the
            instructions on our website. Submitting an order constitutes an
            offer to purchase.
          </li>
          <li>
            <strong>Payment:</strong> We accept payments through secure payment
            methods. Full payment is required before order processing.
          </li>
        </ul>

        <h2>4. Shipping and Delivery</h2>
        <ul>
          <li>
            <strong>Shipping:</strong> Orders are processed promptly, and
            shipping charges are calculated at checkout.
          </li>
          <li>
            <strong>Delivery:</strong> Delivery timelines are estimates and may
            vary. We are not responsible for delays caused by third-party
            logistics providers.
          </li>
        </ul>

        <h2>5. Return and Refund Policy</h2>
        <p>
          We follow a clear Return and Refund Policy for all products. If you are
          not satisfied with your purchase, please contact us within{" "}
          <strong>1 to 7 days</strong> of delivery. For full details, refer to our
          Return/Refund Policy page.
        </p>

        <h2>6. Customer Responsibility</h2>
        <ul>
          <li>
            You are responsible for providing accurate and complete information
            during the ordering process.
          </li>
          <li>
            You agree to use our products responsibly and follow all usage
            instructions provided on packaging or our website.
          </li>
        </ul>

        <h2>7. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and product
          designs, is the property of Shri Harimadhur Bhandar and is protected by
          applicable copyright laws. Unauthorized use or reproduction is
          prohibited.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          We are not liable for any indirect, incidental, or consequential
          damages arising from the use of our products or services. Our total
          liability is limited to the amount paid by you for the purchased
          products.
        </p>

        <h2>9. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and protect your personal information.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time.
          Changes will be posted on this page with an updated effective date.
          Continued use of our services constitutes acceptance of the revised
          terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of <strong>India (Gujarat)</strong>. Any disputes shall be subject to
          the jurisdiction of courts located in <strong>Ahmedabad</strong>.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          For any questions, concerns, or disputes regarding these Terms, please
          contact us.
        </p>

        <p>
          <a href="/contact" className="privacy-contact-link">
            Click here to contact us
          </a>
        </p>
      </main>
    </>
  );
}
