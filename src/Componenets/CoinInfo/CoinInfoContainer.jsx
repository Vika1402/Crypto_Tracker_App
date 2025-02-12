import React, { useState } from "react";
import CoinInfo from "./CoinInfo";
import LoadingSpinner from "../Loading/Loading";
import useFetchCoinHistory from "../Hooks/useFetchCoinHistory";

function CoinInfoContainer({ coinId }) {
  const [
    historicData,
    isLoading,
    isError,
    setDays,
    setCoinInterval,
    days,
    currency,
  ] = useFetchCoinHistory(coinId);

  console.log("Historical Data", historicData);

  if (isLoading) {
    return < LoadingSpinner />;
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
