import axios from "axios";
console.log(process.env.REACT_APP_API_BASE_URL);
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// runs on each request.
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("jwtToken");
    config.headers = {
      Authorization: `Bearer ${token}`,
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
