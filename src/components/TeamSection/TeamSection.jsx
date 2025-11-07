import React from "react";
import styles from "./TeamSection.module.css";
// import ceo from "../../assets/ceo.jpg";
// import cto from "../../assets/cto.jpg";
// import analyst from "../../assets/analyst.jpg";

const TeamSection = () => {
  return (
    <section className={styles.team}>
      <h2>Meet Our <span>Team</span></h2>

      <div className={styles.members}>
        <div className={styles.card}>
          {/* <img src={ceo} alt="CEO" /> */}
          <h3>Sameer</h3>
          <p>CEO & Co-Founder</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
