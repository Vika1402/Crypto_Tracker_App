import axios from "axios";
import { coinGeko_api_url } from "./Constatt";

const AxiosInstanat = axios.create({
  baseURL: coinGeko_api_url,
});

export default AxiosInstanat;
