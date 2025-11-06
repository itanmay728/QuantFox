import React, { useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.fadeIn}`);
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });

  }, []);

  return (
    <div className={styles.heroWrapper}>
      {/* 🌟 Hero Section */}
      <section className={`${styles.hero} ${styles.fadeIn}`}>
        <h1 className={styles.fadeIn}>Market at Your Fingertips</h1>
        <p className={styles.fadeIn}>
          QuantFox is a smart investing platform that helps people make
          data-driven investment decisions and maximize their profits through
          advanced analytics and intelligent insights.
        </p>

        <input
          type="text"
          placeholder="Search by stock ticker or company name"
          className={styles.fadeIn}
        />
      </section>

      {/* 📊 Trending Stocks */}
      <section className={`${styles.trending} ${styles.fadeIn}`}>
        <h2>Today's Trending Stocks</h2>
        <div className={styles.grid}>
          {[
            {
              symbol: "AAPL",
              name: "Apple Inc.",
              price: "$172.28",
              change: "+1.25 (0.73%)",
              isGain: true,
            },
            {
              symbol: "GOOGL",
              name: "Alphabet Inc.",
              price: "$140.76",
              change: "-0.98 (-0.69%)",
              isGain: false,
            },
            {
              symbol: "AMZN",
              name: "Amazon.com",
              price: "$134.50",
              change: "+2.10 (1.59%)",
              isGain: true,
            },
            {
              symbol: "MSFT",
              name: "Microsoft",
              price: "$337.35",
              change: "-1.50 (-0.44%)",
              isGain: false,
            },
          ].map((stock, i) => (
            <div
              key={i}
              className={`${styles.card} ${styles.fadeIn}`}
              style={{ animationDelay: `${0.4 + i * 0.2}s` }}
            >
              <h3>
                {stock.symbol} <span>{stock.name}</span>
              </h3>
              <p className={styles.price}>
                {stock.price}{" "}
                <span className={stock.isGain ? styles.gain : styles.loss}>
                  {stock.change}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Hero;
