import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { FaPhoneVolume } from "react-icons/fa6";

const ElegantShape = ({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "var(--gradient-default)",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`${styles.shapeWrapper} ${className}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className={styles.shape}
      >
        <div
          className={styles.gradientCircle}
          style={{
            background: gradient,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Hero = ({
  badge = "Quant-Powered Investment Platform",
  title1 = "Empower Your Financial Growth ",
  title2 = "With Intelligent Market Insights",
}) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.gradientBackground} />

      {/* Floating Shapes */}
      <div className={styles.shapesContainer}>
        <ElegantShape
          delay={0.3}
          width={400}
          height={100}
          rotate={12}
          gradient="linear-gradient(to right, rgba(99,102,241,0.15), transparent)"
          className={styles.shape1}
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="linear-gradient(to right, rgba(244,63,94,0.15), transparent)"
          className={styles.shape2}
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="linear-gradient(to right, rgba(139,92,246,0.15), transparent)"
          className={styles.shape3}
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="linear-gradient(to right, rgba(251,191,36,0.15), transparent)"
          className={styles.shape4}
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="linear-gradient(to right, rgba(34,211,238,0.15), transparent)"
          className={styles.shape5}
        />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className={styles.badge}
        >
          <div className={styles.badgeDot}></div>
          <span>{badge}</span>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.title}>
            <span className={styles.textGradient1}>{title1}</span>
            <br />
            <span className={styles.textGradient2}>{title2}</span>
          </h1>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className={styles.subtitle}>
            Build wealth confidently with real-time analytics, smart portfolio
            tools, and personalized investment strategies designed for the
            modern investor.
          </p>
          <a href="tel:+919654825156" className={styles.callButton}>
            <FaPhoneVolume className={styles.phoneicon} />
            <span>Jump on a Call</span>
          </a>
        </motion.div>
      </div>

      <div className={styles.overlayGradient} />
    </div>
  );
};

export default Hero;
