import React , {useState,useEffect} from "react";
import Write from "./Writepage";


const Board = () => {
    return(
        <div>
            확인용 글 
            {Write.save}
        </div>  
    )
}


export default Board