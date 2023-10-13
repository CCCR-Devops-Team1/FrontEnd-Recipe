import React,{useState, useEffect} from "react";
import "./style/Mainhome.css";


function Mainhome () {
    
    return(
        <div className="home-body">

            <div className="home-box">

                <tr className="common-list">
                사람들이 작성한 글
                    <ur>
                        <li>
                           아무 글 1
                        </li>
                        <hr/>
                        <li>
                            아무 글 2
                        </li>
                    </ur>
                                                                    
                </tr>

                <div>
                    <td className="random-price">
                    음식 사진 혹은 정보
                    </td>
                </div>  

            </div>
           
        </div>
    )
}

export default Mainhome