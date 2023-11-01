import axios from "axios";
import { setCookie, getCookie } from "./cookie";
import { useState, useEffect } from "react";

const ApiGet = () => {
  
  const [userinfo,setUserinfo]= useState();
  
  const access_token = getCookie("access_token");
  
  useEffect(() => {
      axios.get('http://localhost:8081/user',{
        headers:{
          Authorization:`Bearer ${access_token}`
        }
      }).then((res) => setUserinfo(res.data.result.account))
      .catch((err) => console.error(err))
  },[])

  return userinfo
   
};
export default ApiGet;


 