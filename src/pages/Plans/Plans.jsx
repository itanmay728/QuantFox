import React, { useState } from "react";
import styles from "./Plans.module.css";
import { createPortal } from "react-dom";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";

const plans = [
  {
    name: "Basic",
    price: "₹2,499",
    period: "/3 months",
    features: [
      "Real-time stock data",
      "Basic charting tools",
      "Limited watchlist",
    ],
    button: "Choose Basic",
    highlight: false,
  },
  {
    name: "Premium",
    price: "20% commission on profit",
    period: "",
    features: [
      "All Basic features",
      "Advanced analytics",
      "Multiple watchlists",
      "API access",
    ],
    button: "Start with Premium",
    highlight: true,
  },
  {
    name: "QuantFox Black Enterprise",
    price: "Custom Pricing",
    period: "",
    features: [
      "All Standard features",
      "Algorithmic trading signals",
      "Priority support",
      "Exclusive webinars",
    ],
    button: "Go Enterprise",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be prorated and applied to your next billing cycle.",
  },
  {
    q: "What is the cancellation policy?",
    a: "You can cancel your subscription at any time. Your plan will remain active until the end of the current billing period, and you will not be charged again.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept all major credit cards, including Visa, Mastercard, and American Express. All payments are processed securely through our payment provider.",
  },
];

const Plans = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => setIsOpen(true);
  const handleCloseForm = () => setIsOpen(false);
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>
          Find the <span>Plan</span> That's Right for You
        </h1>
        <p>
          Choose the <span>plan</span> that fits your trading style and goals.
          Get started today.
        </p>
      </section>

      {/* Plans Section */}
      <section className={styles.plansGrid}>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.planCard} ${
              plan.highlight ? styles.highlight : ""
            }`}
          >
            {plan.highlight && (
              <p className={styles.popularTag}>Most Popular</p>
            )}
            <div className={styles.planHeader}>
              <h3>{plan.name}</h3>
              <p className={styles.price}>
                <span className={styles.priceValue}>{plan.price}</span>
                <span className={styles.pricePeriod}>{plan.period}</span>
              </p>
            </div>
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`${styles.btn} ${
                plan.highlight ? styles.primaryBtn : styles.secondaryBtn
              }`}
              onClick={() =>
                window.open(
                  `https://chat.whatsapp.com/I76SepyZVOkJoLKO42Qbyk?mode=ems_copy_t?text=Hi! I'm interested in the ${plan.name} plan.`,
                  "_blank"
                )
              }
            >
              {plan.button}
            </button>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>
          Need More Clarity on Our <span>Plans?</span>
        </h2>
        <p>
          If you'd like to learn more about our plans, feel free to call us or
          send a message — our team will gladly help you find the perfect fit.
        </p>
        <div className={styles.contactBtns}>
          <a href="tel: +919654825156" className={styles.callBtn}>
            📞 Call Us
          </a>
          <a onClick={handleOpenForm} className={styles.msgBtn}>
            💬 Send Message
          </a>
          {isOpen &&
            createPortal(
              <EnquiryForm onClose={handleCloseForm} />,
              document.getElementById("EnquiryForm")
            )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqs.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary>
                {faq.q}
                <span className="material-symbols-outlined">expand_more</span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Plans;
