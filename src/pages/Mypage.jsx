import React, { useEffect } from "react";
import axios from "axios";
import ApiGet from "../component/testapiget";
import { getCookie } from "../component/cookie";
const Mypage = () => {
    
    const myinfomaiton  = getCookie('Token');

    useEffect(() => {
        axios.get('/user',myinfomaiton)
        .then((response) =>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    })

    return(
        <>

            <div>
                <p>{myinfomaiton}</p>
            </div>


        </>
    );
};

export default Mypage;