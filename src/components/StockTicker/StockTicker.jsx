import React, { useEffect, useRef } from "react";
import styles from './StockTicker.module.css';

const StockTicker = () => {
  const container = useRef(null);

 useEffect(() => {
  if (!container.current) return;

  // ✅ Clear previous widget to prevent duplicates
  container.current.innerHTML = "";

  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
  script.async = true;
  script.innerHTML = JSON.stringify({
    symbols: [
      { proName: "NASDAQ:AAPL", title: "Apple" },
      { proName: "NASDAQ:TSLA", title: "Tesla" },
      { proName: "NASDAQ:GOOGL", title: "Google" },
      { proName: "NASDAQ:MSFT", title: "Microsoft" },
      { proName: "NASDAQ:AMZN", title: "Amazon" }
    ],
    showSymbolLogo: true,
    colorTheme: "dark",
    isTransparent: false,
    displayMode: "adaptive",
    locale: "en"
  });

  container.current.appendChild(script);
}, []);


  return (
    <div className= {styles.tvTickerWrapper}>
      <div ref={container} />
    </div>
  );
};

export default StockTicker;



