import axios from "axios";
import NProgress from "nprogress";
const { VITE_MY_IP, VITE_SERVER_PORT } = import.meta.env;
console.log(`http://${VITE_MY_IP}:${VITE_SERVER_PORT}/api`);
export const service = axios.create({
  baseURL: `http://${VITE_MY_IP}:${VITE_SERVER_PORT}/api`,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    NProgress.start();

    config.headers = {
      Accept: "*/*",
      // "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
