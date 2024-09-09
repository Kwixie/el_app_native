import { createContext, useState, useEffect } from "react";

export const ElprisContext = createContext({
  currentElpris: null,
  setCurrentElpris: (arg) => null,
  netOwnerPrice: null,
  setNetOwnerPrice: (arg) => null,
  pricePerKwh: 0,
});

export const ElprisProvider = ({ children }) => {
  const [currentElpris, setCurrentElpris] = useState(0);
  const [netOwnerPrice, setNetOwnerPrice] = useState(0.25);
  const [pricePerKwh, setPricePerKwh] = useState(0);

  useEffect(() => {
    const electricityTariff = 0.392;
    const taxRate = 1.25;
    const newPricePerKwh =
      (currentElpris + netOwnerPrice + electricityTariff) * taxRate;
    setPricePerKwh(newPricePerKwh);
  }, [currentElpris, netOwnerPrice]);

  const value = {
    currentElpris,
    setCurrentElpris,
    netOwnerPrice,
    setNetOwnerPrice,
    pricePerKwh,
  };

  return (
    <ElprisContext.Provider value={value}>{children}</ElprisContext.Provider>
  );
};
