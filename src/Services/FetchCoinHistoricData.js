import axios from "axios";
import AxiosInstanat from "./AxiosInstanat";
export async function FetchCoinHistoricData(
  id,
  currency = "usd",
  interval,
  days = 7
) {
  try {
    const response = await AxiosInstanat.get(
      `/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`
    );

    console.log("Api response data for history details :", response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
