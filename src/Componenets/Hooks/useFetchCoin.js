import { useQuery } from "@tanstack/react-query";
import store from "../state/Store";
import { FetchCoinDetails } from "../../Services/FetchCoinDetails";

function useFetchCoin(coinId) {
  const { currency } = store();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery({
    queryKey: ["coins", coinId],

    queryFn: () => FetchCoinDetails(coinId),
  });
  return [currency, isError, isLoading, coin];
}

export default useFetchCoin;
