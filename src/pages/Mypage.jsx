import React from "react";
import axios from "axios";
import ApiGet from "../component/testapiget";
import { getCookie } from "../component/cookie";
const Mypage = () => {
    
    const myinfomaiton  = getCookie();


    return(
        <>

            <div>
                <p>{myinfomaiton}</p>
            </div>


        </>
    );
};

export default Mypage;