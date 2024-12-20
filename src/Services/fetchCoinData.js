import axios from "axios";
import AxiosInstanat from "./AxiosInstanat";
export async function fetchCoinData(currency, pageNo) {
  const perPage = 10;
  try {
    const response = await AxiosInstanat.get(
      `/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${pageNo}&order=market_cap_desc`
    );

    console.log("Api response data :", response);
    return response;
  } catch (error) {
    console.log("Rate limit excceded");
    throw error;
  }
}
