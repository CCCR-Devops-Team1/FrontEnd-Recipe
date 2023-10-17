//메인홈 (게시판)
import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/Mainhome.css";

function Mainhome () {

    const [boardList,setBoardList] = useState ([]);

    useEffect(() =>{
        axios({
            method:'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(response => setBoardList(response.data))
    })

    

       
    return(
        <div className="home-body">

            <div className="home-box">

                <tr className="common-list">
                사람들이 작성한 글
                    <ur>
                  
                        {boardList.map((board) => (
                        <li style={{listStyle: 'none' , padding_top:'95px'} } key={board.id}>
                            <Link style={{display: 'block'}} className="userlink" to={`/Board/:${board.id}`}>{board.title}</Link>
                            <hr/>
                        </li> 
                        ))}
                
                    </ur>
                                                                    
                </tr>

                <hr/>

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