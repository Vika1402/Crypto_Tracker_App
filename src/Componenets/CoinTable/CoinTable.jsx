import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Banner from "../Banner/Banner";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable() {
  const [page, setPage] = useState(1); // Default page set to 1
 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page], // Wrap the query key in an object
    queryFn: () => fetchCoinData("usd", page), // Function to fetch data
    retry: 2, // Number of retries on failure
    retryDelay: 1000, // Delay between retries in milliseconds
    cacheTime: 1000 * 60 * 2, // Cache duration in milliseconds
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => setPage(page + 1)}>next</button>
      {page}
    </div>
  );
}

export default CoinTable;
