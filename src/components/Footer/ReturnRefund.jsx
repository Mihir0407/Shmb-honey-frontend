import React from "react";
import "./Privacy.css";
import PageHero from "../common/PageHero/PageHero";

export default function ReturnRefund() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Return & Refund Policy"
        subtitle="Shri Harimadhur Bhandar"
        image="/images/privacy.png"
        id="return-refund-hero"
      />

      {/* CONTENT */}
      <main className="privacy-content container" aria-label="Return and Refund Policy">
        <h2>Return Window</h2>
        <p>
          You may request a return within <strong>1 to 7 days</strong> of
          receiving your order. After this period, we are unable to offer a
          refund or exchange.
        </p>

        <h2>Conditions for Return</h2>
        <p>To be eligible for a return:</p>
        <ul>
          <li>The product must be unused, unopened, and in its original packaging.</li>
          <li>The product must be in the same condition as when received.</li>
          <li>A receipt or proof of purchase is required.</li>
        </ul>

        <p>
          <strong>Please note:</strong> Due to the nature of our products,
          opened or tampered honey jars are <strong>not eligible</strong> for return.
        </p>

        <h2>How to Initiate a Return</h2>
        <p>
          To start the return process, please contact us at:
        </p>

        <p>
          📧 <strong>honeyshmb@gmail.com</strong>
        </p>

        <p>
          Please include your order details and the reason for return.
        </p>

        <p>Once your return is approved:</p>
        <ul>
          <li>We will provide return instructions and the return address.</li>
          <li>
            Do not ship items back without prior authorization, as they may not
            be accepted.
          </li>
        </ul>

        <h2>International Orders</h2>
        <p>For customers outside India:</p>
        <ul>
          <li>The 1 to 7 day return policy remains the same.</li>
          <li>
            Return shipping costs, customs duties, and taxes are the
            responsibility of the customer.
          </li>
          <li>Refunds will be made in the original currency of purchase.</li>
        </ul>

        <h2>Damaged or Incorrect Products</h2>
        <p>
          If your order is received damaged, defective, or incorrect, please
          contact us within <strong>48 hours</strong> of delivery with clear
          photos and a description of the issue.
        </p>
        <p>
          We will offer an appropriate resolution through a replacement, refund,
          or exchange.
        </p>

        <h2>Non-Returnable Items</h2>
        <p>We do not accept returns for:</p>
        <ul>
          <li>Opened or used food items</li>
          <li>Customized or specially packaged products</li>
          <li>Items purchased on sale or during promotional offers</li>
          <li>Gift cards or vouchers</li>
        </ul>

        <p>
          Please contact us if you are unsure whether your item qualifies for return.
        </p>

        <h2>Exchanges</h2>
        <p>
          We do not process direct exchanges. If you wish to order a different
          item, please complete the return process first (if eligible) and place
          a new order separately.
        </p>

        <h2>Refunds</h2>
        <p>Once your returned item is received and inspected:</p>
        <ul>
          <li>We will notify you of the approval status.</li>
          <li>
            If approved, your refund will be processed within{" "}
            <strong>1–7 business days</strong> to your original payment method.
          </li>
          <li>
            Please allow additional time for your bank or card provider to
            reflect the refund.
          </li>
        </ul>

        <p>
          <a href="/contact" className="privacy-contact-link">
            Click here to contact us
          </a>
        </p>
      </main>
    </>
  );
}
