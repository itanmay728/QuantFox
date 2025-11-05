import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import FloatingContact from "./components/FloatingContact/FloatingContact";
import StockTicker from "./components/StockTicker/StockTicker";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <StockTicker/>
      <ScrollToTop/>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
      <FloatingContact/>
    </div>
  );
};

export default App;
