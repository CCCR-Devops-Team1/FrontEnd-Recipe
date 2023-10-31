import axios from "axios";
import { setCookie,getCookie } from "./cookie";
import { useState, useEffect } from "react";

const ApiGet = () => {
  
  const [userinfo,setUserinfo]= useState();
  const testval = ('');
  const access_token = getCookie("access_token");
  
  useEffect(() => {
    const test = async () =>{
      const response = await axios.get('http://localhost:8081/user',{
        headers:{
          'Authorization':`Bearer ${access_token}`, 
          'Content-Type':'application/json'
        }
      }).then((response)=> {console.log(response.result)})
      .catch((Error)=>{console.log(Error)})

    }
    test();
  },[])

  return userinfo
   
};
export default ApiGet;


 