import {  getCookie, removeCookie, setCookie } from "./cookie";
import axios, { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";

const useAxiosWithAuth = () => {
  
 const accessToken = getCookie("acessToken")
    
  const navigate = useNavigate();

  const createAxiosInstance = () => {
    return axios.create({
      baseURL: "http://www.recipetips.net/",
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
            "{refresh token 발급 API URL}",
            { refresh: accessToken }
          );
          console.log(refreshResponse);
          const newToken = refreshResponse.data.accessToken;
          setCookie("accessToken", newToken);
          axiosInstance = createAxiosInstance();
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return axiosInstance(error.config);
        } catch (refreshError) {
          removeCookie("accessToken");
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