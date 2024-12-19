import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchCoinDetails } from "../Services/FetchCoinDetails";
import parse from "html-react-parser";
import LoadingSpinner from "../Componenets/Loading/Loading";
import store from "../Componenets/state/Store";
function CoinDetailsPage() {
  const { coinId } = useParams();
  const { currency } = store();
  const {
    isError,
    error,
    isLoading,
    data: coin,
  } = useQuery({
    queryKey: ["coins", coinId],

    queryFn: () => FetchCoinDetails(coinId),
  });
  useEffect(() => {
    console.log("Data download", coin);
  }, [coin]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <div>Error:Something ewent wrong</div>;
  }
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col items-start justify-between w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0">
        <img className="mb-5 h-52" src={coin?.data?.image?.large} alt="" />
        <h1 className="mb-5 text-4xl font-bold">{coin?.data.name}</h1>

        <p className="w-full px-6 py-4 text-justify">
          {parse(coin?.data?.description?.en)}
        </p>

        <div className="flex flex-col w-full md:flex-row md:justify-around">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Rank</h2>
            <span className="ml-3 text-xl text-yellow-400">
              {coin?.data?.market_cap_rank}
            </span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Current Price</h2>
            <span className="ml-3 text-xl text-yellow-400">
              {coin?.data?.market_data?.current_price[currency]}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full p-6 md:w-2/3">coin info</div>
    </div>
  );
}

export default CoinDetailsPage;
