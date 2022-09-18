// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
import REACT_NATIVE_API_URL from "../../sv";
// import {getCookie} from "../utils/cookie"
// Set up default config for http requests here

const axiosClient = axios.create({
  baseURL: REACT_NATIVE_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // const accessToken = getCookie('accessToken');
  // // eslint-disable-next-line no-param-reassign
  // config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
