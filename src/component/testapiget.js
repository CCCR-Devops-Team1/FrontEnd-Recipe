import axios from "axios";
import { setCookie,getCookie } from "./cookie";
import { useState, useEffect } from "react";

const ApiGet = () => {
  const [event, setEvent] = useState([]);
  const Token = getCookie("Token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user",Token);
        setEvent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return event; // 또는 원하는 JSX 컴포넌트나 UI를 반환합니다.
};
export default ApiGet;


 