import React from "react";
import "./Privacy.css";
import PageHero from "../common/PageHero/PageHero";
export default function Privacy() {
  return (
    <>
      {/* HERO */}
      <PageHero
  title="Privacy Policy"
  subtitle="Shri Harimadhur Bhanda"
  image="/images/privacy.png"
  id="privacy-hero"
/>

      {/* CONTENT */}
      <main className="privacy-content container" aria-label="Privacy content">
  <h2>Introduction</h2>
  <p>
    Welcome to <strong>SHMB Honey</strong> (“Company”, “we”, “our”, “us”) located
    at <strong>www.shmbhoney.com</strong>. This Privacy Policy explains how we
    collect, use, disclose, and safeguard your information when you visit our
    website or engage with our services. We are committed to respecting your
    privacy and handling your personal information with care and transparency,
    in accordance with applicable laws in India, including the Information
    Technology Act, 2000 and associated rules.
  </p>

  <h2>1. Information We Collect</h2>
  <p>
    We may collect and process the following types of personal and technical
    information from users of our website:
  </p>

  <h3>a) Personal Information</h3>
  <ul>
    <li>Full Name</li>
    <li>Phone Number</li>
    <li>Email Address</li>
    <li>Billing and Shipping Address</li>
    <li>Order Details (products purchased, payment method)</li>
  </ul>

  <h3>b) Technical Information</h3>
  <ul>
    <li>IP address</li>
    <li>Browser type and version</li>
    <li>Device type</li>
    <li>Time zone and language settings</li>
    <li>Location data (if allowed)</li>
    <li>Website usage statistics through cookies and tracking tools</li>
  </ul>

  <h3>c) Marketing & Communication Data</h3>
  <ul>
    <li>Your preferences regarding marketing and communication</li>
    <li>Survey responses or product reviews</li>
    <li>Click behavior on emails or site banners</li>
  </ul>

  <h2>2. How We Use Your Information</h2>
  <ul>
    <li>Order fulfillment and delivery</li>
    <li>Customer support and service improvement</li>
    <li>Marketing and promotional communication</li>
    <li>Analytics and business insights</li>
    <li>Legal and regulatory compliance</li>
  </ul>

  <h2>3. Use of Cookies & Tracking Technologies</h2>
  <p>
    We use cookies and similar technologies to collect user behavior data. These
    tools help us:
  </p>
  <ul>
    <li>Track site performance and user preferences</li>
    <li>Identify popular products or sections</li>
    <li>Enable smoother navigation</li>
    <li>Integrate services like Google Analytics</li>
  </ul>

  <h2>4. Third-Party Services</h2>
  <p>
    We use trusted third-party services to enhance our offerings. These may
    include:
  </p>
  <ul>
    <li>Payment gateways</li>
    <li>Analytics providers</li>
    <li>Marketing and communication tools</li>
  </ul>
  <p>
    These third parties have their own privacy policies, and we encourage you to
    review them.
  </p>

  <h2>5. Data Sharing & Disclosure</h2>
  <p>
    We do not sell or rent your personal data. However, we may share your data
    in the following cases:
  </p>
  <ul>
    <li>With logistics and delivery partners</li>
    <li>With payment service providers</li>
    <li>With legal or regulatory authorities when required</li>
    <li>With marketing partners (only with consent)</li>
  </ul>

  <h2>6. Data Security</h2>
  <p>
    We take reasonable measures to protect your personal data, including:
  </p>
  <ul>
    <li>SSL encryption</li>
    <li>Password-protected databases</li>
    <li>Regular server audits</li>
    <li>Restricted and limited access to sensitive data</li>
  </ul>

  <h2>7. Your Rights Under Indian Law</h2>
  <p>
    As a user based in India, you have the right to:
  </p>
  <ul>
    <li>Access and review your personal data</li>
    <li>Request correction of inaccurate data</li>
    <li>Withdraw consent for data processing</li>
    <li>Request deletion of your data, subject to legal requirements</li>
  </ul>

  <h2>8. Retention of Data</h2>
  <p>
    We retain your personal data only as long as necessary for:
  </p>
  <ul>
    <li>Order fulfillment and support</li>
    <li>Legal and regulatory compliance</li>
    <li>Legitimate business purposes</li>
  </ul>

  <h2>9. Children’s Privacy</h2>
  <p>
    We do not knowingly collect personal data from children under the age of 13.
    If you believe that a child has submitted personal data to us, please
    contact us immediately.
  </p>

  <h2>10. External Links</h2>
  <p>
    Our website may contain links to external websites. We are not responsible
    for the privacy practices or content of those sites.
  </p>

  <h2>11. Policy Updates</h2>
  <p>
    We may update this Privacy Policy from time to time. Any changes will be
    posted on this page with an updated effective date.
  </p>

  <h2>12. Contact Us</h2>
  <p>
    If you have any questions, concerns, or requests regarding your personal
    data, please contact us.
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
