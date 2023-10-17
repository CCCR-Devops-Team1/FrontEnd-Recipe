//글 상세보기 

import React , {useState,useEffect } from "react";
import { Route,Router } from "react-router-dom";
import Write from "./Writepage";


const Board = () => {

    return(
        <div>
            상세보기 확인용 글
            <p>{window.location.pathname}</p>
        </div>  
    )
}


export default Board