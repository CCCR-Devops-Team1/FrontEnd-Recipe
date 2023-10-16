//메인홈 (게시판)
import React,{useState, useEffect} from "react";
import axios from "axios";
import "./style/Mainhome.css";


function Mainhome () {

    const getBoardList = async () => {
        const resp = (await axios.get({/*백엔드 포트?*/})).data
        console.log(resp.data)
    }

   
    return(
        <div className="home-body">

            <div className="home-box">

                <tr className="common-list">
                사람들이 작성한 글
                    <ur>
                        <li>
                           아무 글 1
                        </li>
                        
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