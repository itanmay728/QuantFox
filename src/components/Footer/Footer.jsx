import React from "react";
import styles from "./Footer.module.css";
import Quantfox from "../../assets/Quantfox.png";
import QuantfoxLogo from "../../assets/Quantfox-logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {/* ---- Brand Section ---- */}
      <div className={styles.brand}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={QuantfoxLogo} alt="Quantfox LLP Logo" />
            <h2>
              Quant<span>Fox</span>
            </h2>
          </div>
        </Link>
        <p>
          Your trusted partner in stock market analysis and financial insights.
        </p>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/profile.php?id=61582559970439"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/quantfoxllp/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* ---- Quick Links ---- */}
      <div className={styles.links}>
        <h4>Quick Links</h4>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* ---- Follow Us ---- */}
      <div className={styles.followUs}>
        <h4>Follow Us</h4>
        <a
          href="https://www.facebook.com/profile.php?id=61582559970439"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF /> Facebook
        </a>
        <a
          href="https://www.instagram.com/quantfoxllp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram /> Instagram
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn /> LinkedIn
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp
        </a>
      </div>

      {/* ---- Contact Info ---- */}
      <div className={styles.contact}>
        <h4>Contact Us</h4>
        <p>
          <span>Email: </span> <a href="mailto:helpdesk@quantfox.in">helpdesk@quantfox.in</a>
        </p>
        <p>
          <span>Phone: </span> <a href="tel:+919654825156">+91 96548 25156</a>{" "}
          <a href="tel:+919311728534">+91 93117 28534</a>
        </p>
        <p>
          <span>Address: </span> 
          <a>
            9, Kotla Vihar Phase II <br />
            New Delhi - 110043, India
          </a>
        </p>
      </div>
    </div>

    {/* ---- Disclaimer ---- */}
    <div className={styles.disclaimer}>
      <p>
        Our past performance does not guarantee future performance. Investment
        in markets is subject to market risks. Despite all efforts for best
        research, clients should understand that investing in the market
        involves a risk of loss of both income and principal. Please ensure that
        you fully understand the risks involved before investing.
      </p>
    </div>

    {/* ---- Bottom Bar ---- */}
    <div className={styles.bottomBar}>
      <p>© 2025 QuantFox. All Rights Reserved.</p>
      <div className={styles.policyLinks}>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <p>
        Design By ❤️ <strong>Quantfox</strong>
      </p>
    </div>
  </footer>
);

export default Footer;
