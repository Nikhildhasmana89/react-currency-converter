import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-indigo-600 font-semibold mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full px-4 py-3 rounded-lg border-2 border-indigo-400 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all shadow-md hover:shadow-lg"
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-purple-600 font-semibold mb-2 w-full">
          Currency Type
        </p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="w-full px-4 py-3 rounded-lg border-2 border-purple-400 bg-white/90 text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all shadow-md hover:shadow-lg"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
