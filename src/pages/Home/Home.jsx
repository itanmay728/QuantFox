import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import StockTicker from "../../components/StockTicker/StockTicker";
import mockStocks from "../../api/mockStocks";
import WhyChooseUs from "../../components/WhyChooseUS/WhyChooseUs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import { Link } from "react-router-dom";

const Home = () => {
// items={mockStocks.slice(0, 8)}
  return (
    <div>
      <StockTicker/>
      <main className={styles.home}>
        <div className={styles.hero}>
          <h1>Market at Your Fingertips</h1>
          <p>
            QuantFox is a smart investing platform that helps people make
            data-driven investment decisions and maximize their profits through
            advanced analytics and intelligent insights
          </p>
          
          <input
            type="text"
            placeholder="Search by stock ticker or company name"
          />
        </div>
        <section className={styles.trending}>
          <h2>Today's Trending Stocks</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>
                AAPL <span>Apple Inc.</span>
              </h3>
              <p className={styles.price}>
                $172.28 <span className={styles.gain}>+1.25 (0.73%)</span>
              </p>
            </div>
            <div className={styles.card}>
              <h3>
                GOOGL <span>Alphabet Inc.</span>
              </h3>
              <p className={styles.price}>
                $140.76 <span className={styles.loss}>-0.98 (-0.69%)</span>
              </p>
            </div>
            <div className={styles.card}>
              <h3>
                AMZN <span>Amazon.com</span>
              </h3>
              <p className={styles.price}>
                $134.50 <span className={styles.gain}>+2.10 (1.59%)</span>
              </p>
            </div>
            <div className={styles.card}>
              <h3>
                MSFT <span>Microsoft</span>
              </h3>
              <p className={styles.price}>
                $337.35 <span className={styles.loss}>-1.50 (-0.44%)</span>
              </p>
            </div>
          </div>
        </section>
        {/* <MarketTable stocks={mockStocks} /> */}

        <WhoWeAre />
        <WhatWeDo />
        <WhyChooseUs />

        <div className={styles.buttons}>
          <Link to="/about" className={styles.aboutBtn}>
            About Us
          </Link>
          <Link to="/contact" className={styles.contactBtn}>
            Contact Us
          </Link>
        </div>

      </main>
    </div>
  );
};

export default Home;
