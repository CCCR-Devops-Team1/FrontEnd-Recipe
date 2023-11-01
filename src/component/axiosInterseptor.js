import {  getCookie, removeCookie, setCookie } from "./cookie";
import axios, { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";

const useAxiosWithAuth = () => {
  
 const access_token = getCookie("accesstoken")
 const refresh_token = getCookie("refreshtoken")
  const navigate = useNavigate();

  const createAxiosInstance = () => {
    return axios.create({
      baseURL: "http://www.recipetips.net/member:8081",
    });
  };

  let axiosInstance = createAxiosInstance();

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const statusCode = error.response?.status;
      if (statusCode === 419 || statusCode === 401) {
        try {
          const refreshResponse = await axios.post(
            "/auth/reissue",refresh_token);
          console.log(refreshResponse);
          const newToken = refreshResponse.data.access_token;
          setCookie("access_token", newToken);
          axiosInstance = createAxiosInstance();
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return axiosInstance(error.config);
        } catch (refreshError) {
          removeCookie("access_token");
          navigate("/");
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosWithAuth;