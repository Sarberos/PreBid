import axios from "axios";

const apiUrl = "https://autoru.neonface.by/api/v2";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "access_token")}`;
  return config;
});

export default api;
