import axios from "axios";
import { setCookie, getCookie } from "./cookie";
import { useState, useEffect } from "react";

export const ApiGet = () => {
  const [userinfo, setUserinfo] = useState("");
  const access_token = getCookie("access_token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://www.resipetips.net/member/user", {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        });
        setUserinfo(response.data.result.account);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [access_token]);

  return userinfo;
};

export const Article = () => {
  const [userinfo, setUserinfo] = useState("");
  const access_token = getCookie("access_token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://www.resipetips.net/member/notice", {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        });
        setUserinfo(response.data.result.memberId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [access_token]);

  return userinfo;
};
