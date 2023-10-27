import React, { useEffect } from "react";
import axios from "axios";
import ApiGet from "../component/testapiget";
import { getCookie } from "../component/cookie";

const Mypage = () => {
    
    const myToken  = getCookie('Token');
    const myinfomaiton  =("")

    const info = async () => {
     try{myinfomaiton= await axios.get('url',myToken)


    } catch(error){  
        
        console.log(error);

     }

    }

    return(
        <>

            <div>
                <p>{myinfomaiton}</p>
            </div>


        </>
    );
};

export default Mypage;