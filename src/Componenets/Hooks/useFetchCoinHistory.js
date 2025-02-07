import { useState } from "react";
import { FetchCoinHistoricData } from "../../Services/FetchCoinHistoricData";
import { useQuery } from "@tanstack/react-query";
import store from "../state/Store";
function useFetchCoinHistory(coinId ) {
  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState("daily");
  const { currency } = store();
  const {
    isError,
    isLoading,
    data: historicData,
  } = useQuery({
    queryKey: ["coinsHistoricData", coinId, days, currency, interval],

    queryFn: () => FetchCoinHistoricData(coinId, currency, interval, days),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
  return [
    historicData,
    isLoading,
    isError,
    setDays,
    setCoinInterval,
    days,
    currency,
  ];
}

export default useFetchCoinHistory;
