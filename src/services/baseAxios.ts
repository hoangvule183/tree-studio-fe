import axios from "axios";

const baseService = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  //   withCredentials: true,
});

baseService.interceptors.response.use(function (response) {
  // Return unwrapped response ---the "body" of it
  return response.data;
});

export default baseService;
