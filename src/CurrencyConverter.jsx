// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";
import "./currencyStyles.css";
const CurrencyConverter = () => {
  const [amountIn, setAmountIn] = useState(0);
  const [output, setOutput] = useState("Enter the Value");
  const [cur1, setCur1] = useState("USD");
  const [cur2, setCur2] = useState("EUR");
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountInChange = (e) => {
    setAmountIn(Number(e.target.value));
  };

  const handleCur1Change = (e) => {
    setCur1(e.target.value);
  };

  const handleCur2Change = (e) => {
    setCur2(e.target.value);
  };

  console.log(amountIn, cur1, cur2);

  useEffect(() => {
    const getCurrencyData = async () => {
      if (amountIn === 0) return;

      if (cur1 === cur2) {
        setOutput(
          `${amountIn} in ${cur1} will still be ${amountIn} in ${cur2}`
        );
      }
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amountIn}&from=${cur1}&to=${cur2}`
      );
      setIsLoading(false);
      const data = await res.json();
      setOutput(
        `Your ${amountIn} in ${cur1} on date ${data.date} will be ${data.rates[cur2]} in ${cur2}`
      );
    };

    getCurrencyData();
  }, [amountIn, cur1, cur2]);

  return (
    <div className="app">
      <div className="input-box">
        <input
          type="text"
          value={amountIn}
          onChange={(e) => handleAmountInChange(e)}
          disabled={isLoading}
        />
        <select
          value={cur1}
          onChange={(e) => handleCur1Change(e)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          value={cur2}
          onChange={(e) => handleCur2Change(e)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <p className="output">{output}</p>
    </div>
  );
};

export default CurrencyConverter;
