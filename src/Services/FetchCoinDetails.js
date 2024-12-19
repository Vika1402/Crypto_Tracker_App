import axios from "axios";
import AxiosInstanat from "./AxiosInstanat";
export async function FetchCoinDetails(id) {

  try {
    const response = await AxiosInstanat.get(
      `/coins/${id}`
    );

    console.log("Api response data for details :", response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
