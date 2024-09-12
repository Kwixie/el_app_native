import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { set } from "react-hook-form";

interface EnergyData {
  SEK_per_kWh: number;
  EUR_per_kWh: number;
  EXR: number;
  time_start: string; // ISO 8601 format for datetime
  time_end: string; // ISO 8601 format for datetime
}

export const ElprisContext = createContext({
  currentElpris: 0,
  netOwnerPrice: 0.25,
  setNetOwnerPrice: (value: number) => {},
  pricePerKwh: 0,
  setElprisArea: (value: string) => {},
  elprisArea: "SE4",
});

export const ElprisProvider = ({ children }: PropsWithChildren) => {
  const [netOwnerPrice, setNetOwnerPrice] = useState(0.25);
  const [pricePerKwh, setPricePerKwh] = useState(0);
  const [elprisArea, setElprisArea] = useState("SE4");

  const {
    data: currentElpris,
    isLoading,
    isError,
  } = useQuery<number>({
    queryKey: ["elpris", elprisArea],
    refetchInterval: 3600000, // Refetch every hour (in milliseconds)
    queryFn: async () => {
      const date = new Date();
      let hour = date.getHours();
      let day = date.getDate().toString();
      if (day.length < 2) {
        day = "0" + day;
      }
      let monthNum = date.getMonth() + 1;
      let month = monthNum.toString();
      if (month.length < 2) {
        month = "0" + month;
      }
      let year = date.getFullYear();
      let currentDate = `${year}/${month}-${day}`;

      const { data } = await axios.get<EnergyData[]>(
        `https://www.elprisetjustnu.se/api/v1/prices/${currentDate}_${elprisArea}.json`
      );
      return Math.round(data[hour].SEK_per_kWh * 100) / 100;
    },
    initialData: 0,
  });

  useEffect(() => {
    const electricityTariff = 0.392;
    const taxRate = 1.25;
    const newPricePerKwh =
      (currentElpris + netOwnerPrice + electricityTariff) * taxRate;
    setPricePerKwh(newPricePerKwh);
  }, [currentElpris, netOwnerPrice]);

  const value = {
    currentElpris,
    netOwnerPrice,
    setNetOwnerPrice,
    pricePerKwh,
    setElprisArea,
    elprisArea,
  };

  return (
    <ElprisContext.Provider value={value}>{children}</ElprisContext.Provider>
  );
};
