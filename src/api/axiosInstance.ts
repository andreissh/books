import axios from "axios";
import config from "config";

const baseUrl = config.service.BASE_URL;
const apiKey = config.service.API_KEY;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
  timeout: 5000,
});

export default axiosInstance;
