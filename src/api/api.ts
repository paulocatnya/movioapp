import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

api.interceptors.request.use(async (config) => {
  const cookiesAuthentication = Cookies.get("access_token");
  if (cookiesAuthentication && config.headers) {
    config.headers.Authorization = `Bearer ${cookiesAuthentication}`;
  }

  return config;
});

export default api;
