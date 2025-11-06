import React, { useState } from "react";
import styles from "./FinancialCalculator.module.css";
import { FaCalculator } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function FinancialCalculator() {
  const [activeCalc, setActiveCalc] = useState("sip");
  const [results, setResults] = useState(null);

  const [inputs, setInputs] = useState({
    sipAmount: 10000,
    sipRate: 12,
    sipYears: 10,
    loanAmount: 500000,
    loanRate: 10,
    loanYears: 5,
    gstAmount: 1000,
    gstRate: 18,
    fdAmount: 100000,
    fdRate: 7,
    fdYears: 5,
    mfPrincipal: 50000,
    mfRate: 12,
    mfYears: 10,
  });

  const handleChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });

  // 🧮 SIP CALCULATOR
  const calcSIP = () => {
    const { sipAmount, sipRate, sipYears } = inputs;
    const months = sipYears * 12;
    const monthlyRate = sipRate / 12 / 100;
    const totalAmount =
      sipAmount *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    const totalInvested = sipAmount * months;
    const interest = totalAmount - totalInvested;
    setResults({
      type: "SIP",
      invested: totalInvested,
      interest,
      total: totalAmount,
    });
  };

  // 💳 EMI CALCULATOR
  const calcEMI = () => {
    const { loanAmount, loanRate, loanYears } = inputs;
    const monthlyRate = loanRate / 12 / 100;
    const months = loanYears * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const interest = totalPayment - loanAmount;
    setResults({
      type: "EMI",
      emi,
      totalPayment,
      interest,
      invested: loanAmount,
    });
  };

  // 🏦 FD CALCULATOR
  const calcFD = () => {
    const { fdAmount, fdRate, fdYears } = inputs;
    const maturity = fdAmount * Math.pow(1 + fdRate / 100, fdYears);
    const interest = maturity - fdAmount;
    setResults({
      type: "FD",
      invested: fdAmount,
      interest,
      total: maturity,
    });
  };

  // 💰 GST CALCULATOR
  const calcGST = () => {
    const { gstAmount, gstRate } = inputs;
    const gst = (gstAmount * gstRate) / 100;
    const total = gstAmount + gst;
    setResults({
      type: "GST",
      gst,
      total,
      invested: gstAmount,
      interest: gst,
    });
  };

  // 📊 MUTUAL FUND RETURN CALCULATOR
  const calcMF = () => {
    const { mfPrincipal, mfRate, mfYears } = inputs;
    const total = mfPrincipal * Math.pow(1 + mfRate / 100, mfYears);
    const interest = total - mfPrincipal;
    setResults({
      type: "Mutual Fund",
      invested: mfPrincipal,
      interest,
      total,
    });
  };

  const renderInputs = () => {
    const commonProps = { onChange: handleChange };
    switch (activeCalc) {
      case "sip":
        return (
          <>
            <h3>SIP Calculator</h3>
            <Input
              label="Monthly SIP Amount (₹)"
              name="sipAmount"
              value={inputs.sipAmount}
              {...commonProps}
            />
            <Input
              label="Expected Return Rate (% p.a.)"
              name="sipRate"
              value={inputs.sipRate}
              {...commonProps}
            />
            <Input
              label="Investment Period (Years)"
              name="sipYears"
              value={inputs.sipYears}
              {...commonProps}
            />
            <button className={styles.calcBtn} onClick={calcSIP}>
              Calculate
            </button>
          </>
        );
      case "emi":
        return (
          <>
            <h3>EMI Calculator</h3>
            <Input
              label="Loan Amount (₹)"
              name="loanAmount"
              value={inputs.loanAmount}
              {...commonProps}
            />
            <Input
              label="Interest Rate (% p.a.)"
              name="loanRate"
              value={inputs.loanRate}
              {...commonProps}
            />
            <Input
              label="Loan Tenure (Years)"
              name="loanYears"
              value={inputs.loanYears}
              {...commonProps}
            />
            <button className={styles.calcBtn} onClick={calcEMI}>
              Calculate
            </button>
          </>
        );
      case "fd":
        return (
          <>
            <h3>FD Calculator</h3>
            <Input
              label="Deposit Amount (₹)"
              name="fdAmount"
              value={inputs.fdAmount}
              {...commonProps}
            />
            <Input
              label="Interest Rate (% p.a.)"
              name="fdRate"
              value={inputs.fdRate}
              {...commonProps}
            />
            <Input
              label="Period (Years)"
              name="fdYears"
              value={inputs.fdYears}
              {...commonProps}
            />
            <button className={styles.calcBtn} onClick={calcFD}>
              Calculate
            </button>
          </>
        );
      case "gst":
        return (
          <>
            <h3>GST Calculator</h3>
            <Input
              label="Base Amount (₹)"
              name="gstAmount"
              value={inputs.gstAmount}
              {...commonProps}
            />
            <Input
              label="GST Rate (%)"
              name="gstRate"
              value={inputs.gstRate}
              {...commonProps}
            />
            <button className={styles.calcBtn} onClick={calcGST}>
              Calculate
            </button>
          </>
        );
      case "mutual":
        return (
          <>
            <h3>Mutual Fund Calculator</h3>
            <Input
              label="Investment Amount (₹)"
              name="mfPrincipal"
              value={inputs.mfPrincipal}
              {...commonProps}
            />
            <Input
              label="Expected Return Rate (% p.a.)"
              name="mfRate"
              value={inputs.mfRate}
              {...commonProps}
            />
            <Input
              label="Investment Period (Years)"
              name="mfYears"
              value={inputs.mfYears}
              {...commonProps}
            />
            <button className={styles.calcBtn} onClick={calcMF}>
              Calculate
            </button>
          </>
        );
      default:
        return null;
    }
  };

  // 🎨 Dynamic Colors + Label Rendering
  const COLORS =
    results?.type === "EMI"
      ? ["#ff4c4c", "#00C49F"] // red = interest, green = principal
      : ["#00C49F", "#ff4c4c"]; // green = invested, red = profit/interest

  const data = results
    ? [
        { name: "Invested", value: results.invested || 0 },
        { name: "Interest/Profit", value: results.interest || 0 },
      ]
    : [];

  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="12"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <h2 className={styles.title}>
        <FaCalculator /> Financial <span>Calculator</span>
      </h2>
      <div className={styles.separator}></div>
      <div className={styles.wrapper}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {["sip", "mutual", "emi", "gst", "fd"].map((calc) => (
            <button
              key={calc}
              onClick={() => {
                setActiveCalc(calc);
                setResults(null);
              }}
              className={`${styles.tabBtn} ${
                activeCalc === calc ? styles.activeTab : ""
              }`}
            >
              {calc.toUpperCase()}
            </button>
          ))}
        </div>

        <div className={styles.calcContainer}>
          <div className={styles.left}>{renderInputs()}</div>

          <div className={styles.right}>
            {results ? (
              <>
                <h4>Results ({results.type})</h4>
                <div className={styles.resultsBox}>
                  {results.emi && (
                    <p>
                      <strong>Monthly EMI:</strong> ₹{results.emi.toFixed(2)}
                    </p>
                  )}
                  {results.invested && (
                    <p>
                      <strong>Invested:</strong> ₹
                      {results.invested.toLocaleString()}
                    </p>
                  )}
                  {results.interest && (
                    <p>
                      <strong>Interest/Profit:</strong> ₹
                      {results.interest.toLocaleString()}
                    </p>
                  )}
                  {results.totalPayment && (
                    <p>
                      <strong>Total Payment:</strong> ₹
                      {results.totalPayment.toLocaleString()}
                    </p>
                  )}
                  {results.total && (
                    <p>
                      <strong>Total Amount:</strong> ₹
                      {results.total.toLocaleString()}
                    </p>
                  )}
                </div>

                {results.invested > 0 && (
                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={90}
                        labelLine={false}
                        label={renderLabel}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </>
            ) : (
              <p className={styles.placeholder}>
                Enter details and click "Calculate"
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Reusable Input
const Input = ({ label, name, value, onChange }) => (
  <div className={styles.formGroup}>
    <label>{label}</label>
    <input type="number" name={name} value={value} onChange={onChange} />
  </div>
);
