import React, { useEffect, useRef } from "react";
import styles from "./StockTicker.module.css";

const StockTicker = () => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    // ✅ Clear previous widget to prevent duplicates
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BSE:HDFCBANK", title: "HDFC Bank Ltd" },
        { proName: "BSE:INFY", title: "Infosys Ltd" },
        { proName: "BSE:RELIANCE", title: "Reliance Industries Ltd" },
        { proName: "BSE:AXISBANK", title: "Axis Bank Ltd" },
        { proName: "BSE:TATAMOTORS", title: "Tata Motors Ltd" },
        { proName: "BSE:TATASTEEL", title: "Tata Steel Ltd" },
        { proName: "BSE:SBIN", title: "State Bank of India" },
        { proName: "BSE:ITC", title: "ITC Ltd" },
        { proName: "BSE:MARUTI", title: "Maruti Suzuki India Ltd" },
        { proName: "BSE:WIPRO", title: "Wipro Ltd" },
        { proName: "BSE:ONGC", title: "Oil & Natural Gas Corp Ltd" },
        { proName: "BSE:ASIANPAINT", title: "Asian Paints Ltd" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className={styles.tvTickerWrapper}>
      <div ref={container} />
    </div>
  );
};

export default StockTicker;
