import axios from "axios";
import { setCookie } from "react-cookie";
import { useState, useEffect } from "react";

const ApiGet = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user/login');
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
