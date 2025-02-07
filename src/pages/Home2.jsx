import React, { useState } from "react";
import { fetchCoinData } from "../Services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import store from "../Componenets/state/Store";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Componenets/Loading/Loading";

function Home2() {
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
    <div
      className="h-screen w-full bg-cover bg-center overflow-y-scroll  mt-24"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/3d-rendering-bitcoin-sign-purple-background_181624-29618.jpg?t=st=1738933992~exp=1738937592~hmac=acb82fe847219a421c99969e04f2ad5325860502d03f6485e8a619492d2925d7&w=1480')`,
      }}
    >
      <div className="flex flex-wrap gap-y-4 gap-x-6 items-center justify-center">
        {data &&
          data?.data.map((item, index) => {
            return (
              <div className="flex justify-center items-start ">
                <div className="card bg-transparent  w-96 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      onClick={() => handleCoinRedirect(item.id)}
                      src={item.image}
                      alt="Shoes"
                      className="rounded-xl w-40"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                    <ul className="text-white font-normal">
                      <li className="card-actions flex items-center justify-center py-2 bg-gray-700/20 px-3">
                        <span className="text-lg">Last Update</span>{" "}
                        <span>{item.last_updated}</span>
                      </li>
                      <li className="card-actions flex items-center justify-center py-2 bg-gray-700/20 px-3">
                        <span className="text-xl">Current Price -</span>{" "}
                        <span>{item.current_price}</span>
                      </li>

                      <li className="card-actions flex items-center justify-center py-2 bg-gray-700/20 px-3">
                        <span className="text-xl">Symobole -</span>{" "}
                        <span className="text-lg uppercase">{item.symbol}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div
        className={`flex items-center mt-10 bottom-0 ${
          page > 1 && `justify-center gap-6`
        } justify-center w-full`}
      >
        {page > 1 && (
          <button
            className="text-2xl text-white btn btn-primary px-10"
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
          className="text-2xl text-white btn btn-secondary px-10 "
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home2;
