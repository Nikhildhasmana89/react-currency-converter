import { useState } from "react";
import InputBox from "./components/InputBox";
import { useCurrencydata } from "./hooks/useCurrencydata";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [conveteramount, setConveteramount] = useState(0);

  const currencyinfo = useCurrencydata(from);
  const options = Object.keys(currencyinfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
  };

  const resultcalculator = () => {
    setConveteramount(amount * currencyinfo[to]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-md mx-auto border border-gray-200 rounded-2xl p-6 backdrop-blur-md bg-white/80 shadow-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            resultcalculator();
          }}
        >
          <div className="w-full mb-2">
            <InputBox
              onAmountChange={(amount) => setAmount(amount)}
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5 mb-3">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 shadow-lg hover:opacity-90 transition"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-2 mb-4">
            <InputBox
              label="To"
              amount={conveteramount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
