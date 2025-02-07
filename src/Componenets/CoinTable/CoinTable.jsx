import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
//import { CurrencyContext } from "../Context/CurrencyContext";
import LoadingSpinner from "../Loading/Loading";
import store from "../state/Store";
import { useNavigate } from "react-router-dom";

function CoinTable() {
  const { currency } = store();
  const [page, setPage] = useState(1); // Default page set to 1
  const navigate = useNavigate();

  function handleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency], // Wrap the query key in an object
    queryFn: () => fetchCoinData(currency, page), // Function to fetch data
    // retry: 2, // Number of retries on failure
    // retryDelay: 1000, // Delay between retries in milliseconds
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2, // Cache duration in milliseconds
  });

  // console.log("fetched data : ", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (


    
    <div className="flex flex-col items-center justify-center gap-5 my-5 w-[80vw] mx-auto ">
      <div className="flex items-center justify-center w-full px-2 py-2 font-semibold text-black bg-yellow-400">
        <div className="basis-[35%]">coin</div>
        <div className="basis-[25%]">Current Price</div>
        <div className="basis-[20%]">24H change</div>
        <div className="basis-[20%]">market cap</div>
      </div>

      <div className="flex-col w-[80vw] flex mx-auto">
        {data &&
          data?.data.map((coin) => {
            return (
              <div
                onClick={() => handleCoinRedirect(coin.id)}
                key={coin.id}
                className="flex items-center justify-start w-full px-2 py-2 font-semibold text-white bg-transparent cursor-pointer"
              >
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem] ">
                    <img
                      src={coin.image}
                      className="w-full h-full"
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="text-3xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[25%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%] ml-6"> {coin.market_cap}</div>
              </div>
            );
          })}

        <div
          className={`flex items-center  ${
            page > 1 && `justify-between`
          } justify-center w-full`}
        >
          {page > 1 && (
            <button
              className="text-2xl text-white btn btn-primary btn-wide"
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                  return;
                }
              }}
            >
              Prev
            </button>
          )}

          <button
            className="text-2xl text-white btn btn-secondary btn-wide"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoinTable;
