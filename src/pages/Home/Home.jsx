import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import WhyChooseUs from "../../components/WhyChooseUS/WhyChooseUs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import { Link } from "react-router-dom";
import FinancialCalculator from "../../components/FinancialCalculator/FinancialCalculator";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <main className={styles.home}>

        <Hero/>  
        <WhoWeAre />
        <WhatWeDo />
        <WhyChooseUs />
        <FinancialCalculator/>

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
