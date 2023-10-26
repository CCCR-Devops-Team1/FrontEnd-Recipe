//글 상세보기 

import React , {useState,useEffect } from "react";
import { Route,Router } from "react-router-dom";
import { getCookie } from "../component/cookie";
import axios from "axios";
import Write from "./Writepage";


const Board = () => {


    const textdata = axios.get("",)


    return(
        <div>
            
            <p>{window.location.pathname}</p>

        </div>  
    )
}


export default Board