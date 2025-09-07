import { useEffect, useState } from "react";

export const useCurrencydata = (currency) => {
  const [input, setInput] = useState([]);
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setInput(res[currency]));
  }, [currency]);
  return input;
};
