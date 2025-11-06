import React from "react";
import styles from "./WhyChooseUs.module.css";
import { Link } from "react-router-dom";
import WhyUsImg from '../../assets/Image/why-us-img.png';

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <div className={styles.headingBlock}>
            <h2 className={styles.heading}>Why Choose Us</h2>
            <div className={styles.separator}></div>
            <p className={styles.lead}>
              Transparency — At QuantFox LLP, we believe in transparent
              services rather than hiding anything.
            </p>
          </div>

          <div className={styles.cards}>
            {/* Card 1 */}
            <div className={`${styles.card} ${styles.cardPrimary}`}>
              <div className={styles.cardHeader}>
                <span>Innovation</span>
              </div>
              <div className={styles.cardBody}>
                <p>
                  Our team is always working on innovative ideas, researching
                  market trends, economic reforms, and staying updated with the
                  latest opportunities.
                </p>
                <Link to="/services" className={styles.moreLink}>
                  More information
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`${styles.card} ${styles.cardRed}`}>
              <div className={styles.cardHeader}>
                <span>Affordable Pricing</span>
              </div>
              <div className={styles.cardBody}>
                <p>
                  At QuantFox, you will get world-class financial insights and
                  services at affordable pricing.
                </p>
                <Link to="/plans" className={styles.moreLink}>
                  More information
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <img
            src={WhyUsImg}
            alt="Why Choose Us"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
