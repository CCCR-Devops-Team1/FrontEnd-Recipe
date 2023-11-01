import axios from "axios";
import { setCookie,getCookie } from "./cookie";
import { useState, useEffect } from "react";

export const ApiGet = () => {
  
  const [userinfo,setUserinfo]= useState();
  const access_token = getCookie("access_token");
    
  useEffect (() => {
    const userid = async () => {
        try{
        const response = await axios.get('http://localhost:8081/user',{
            headers:{
                Authorization:`Bearer ${access_token}`
            }
        })
        console.log(response.data.result.account);
        setUserinfo(response.data.result.account);

        }catch(error){
            console.error(error);
        }
    }
    userid();
},[])

  return (
    <>
      {userinfo}
    </>
  )
  }  
export default ApiGet;


 