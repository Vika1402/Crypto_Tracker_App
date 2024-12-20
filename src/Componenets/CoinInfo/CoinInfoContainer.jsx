import React, { useState } from "react";
import CoinInfo from "./CoinInfo";
import store from "../state/Store";
import { FetchCoinHistoricData } from "../../Services/FetchCoinHistoricData";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Loading/Loading";

function CoinInfoContainer({ coinId }) {
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
  console.log(coinId);

  console.log("Historical Data", historicData);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <div className="alert alert-error">Something went wrong</div>;
  }
  return (
    <div>
      <CoinInfo
        historicData={historicData}
        setDays={setDays}
        setCoinInterval={setCoinInterval}
        days={days}
        currency={currency}
      />
    </div>
  );
}

export default CoinInfoContainer;
